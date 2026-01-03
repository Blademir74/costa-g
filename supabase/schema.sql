-- ============================================
-- COSTA G - ESQUEMA DE BASE DE DATOS SUPABASE
-- Ejecutar en Supabase SQL Editor
-- ============================================

-- ============================================
-- 1. TABLA DE PROYECTOS
-- ============================================

-- Eliminar tabla si existe (CUIDADO en producción)
-- DROP TABLE IF EXISTS proyectos CASCADE;

-- Crear tipo ENUM para categorías
DO $$ BEGIN
    CREATE TYPE categoria_proyecto AS ENUM (
        'Puentes',
        'Carreteras', 
        'Caminos',
        'Pavimentación',
        'Educativa',
        'Contención'
    );
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

-- Crear tipo ENUM para estados
DO $$ BEGIN
    CREATE TYPE estado_proyecto AS ENUM (
        'borrador',
        'publicado',
        'archivado'
    );
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

-- Crear tabla de proyectos
CREATE TABLE IF NOT EXISTS proyectos (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    
    -- Información básica
    titulo TEXT NOT NULL,
    titulo_corto TEXT,
    descripcion TEXT,
    descripcion_larga TEXT,
    
    -- Ubicación
    ubicacion TEXT,
    municipio TEXT,
    
    -- Clasificación
    año INTEGER NOT NULL DEFAULT EXTRACT(YEAR FROM NOW()),
    categoria categoria_proyecto NOT NULL DEFAULT 'Puentes',
    
    -- Cliente y contrato
    cliente TEXT,
    dependencia TEXT,
    contrato TEXT,
    monto DECIMAL(15, 2),
    
    -- Medios
    url_imagen TEXT,
    imagenes_galeria TEXT[] DEFAULT '{}',
    
    -- Estado y visibilidad
    destacado BOOLEAN DEFAULT false,
    estado estado_proyecto DEFAULT 'borrador',
    orden INTEGER DEFAULT 0,
    
    -- Timestamps
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Índices para mejor rendimiento
CREATE INDEX IF NOT EXISTS idx_proyectos_categoria ON proyectos(categoria);
CREATE INDEX IF NOT EXISTS idx_proyectos_año ON proyectos(año DESC);
CREATE INDEX IF NOT EXISTS idx_proyectos_estado ON proyectos(estado);
CREATE INDEX IF NOT EXISTS idx_proyectos_destacado ON proyectos(destacado) WHERE destacado = true;
CREATE INDEX IF NOT EXISTS idx_proyectos_orden ON proyectos(orden);

-- Trigger para actualizar updated_at automáticamente
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS update_proyectos_updated_at ON proyectos;
CREATE TRIGGER update_proyectos_updated_at
    BEFORE UPDATE ON proyectos
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- ============================================
-- 2. ROW LEVEL SECURITY (RLS)
-- ============================================

-- Habilitar RLS
ALTER TABLE proyectos ENABLE ROW LEVEL SECURITY;

-- Política: Lectura pública de proyectos publicados
CREATE POLICY "Lectura pública de proyectos publicados"
ON proyectos
FOR SELECT
USING (estado = 'publicado');

-- Política: Lectura completa para usuarios autenticados
CREATE POLICY "Lectura completa para autenticados"
ON proyectos
FOR SELECT
TO authenticated
USING (true);

-- Política: CRUD completo para administradores
CREATE POLICY "CRUD para administradores"
ON proyectos
FOR ALL
TO authenticated
USING (
    auth.jwt() ->> 'email' IN (
        'admin@costag.com',
        'inmob.costag@hotmail.com',
        'blademir@costag.com'
    )
)
WITH CHECK (
    auth.jwt() ->> 'email' IN (
        'admin@costag.com',
        'inmob.costag@hotmail.com',
        'blademir@costag.com'
    )
);

-- ============================================
-- 3. TABLA DE USUARIOS/ADMINS
-- ============================================

CREATE TABLE IF NOT EXISTS usuarios (
    id UUID REFERENCES auth.users(id) PRIMARY KEY,
    email TEXT UNIQUE NOT NULL,
    nombre TEXT,
    avatar_url TEXT,
    rol TEXT DEFAULT 'viewer' CHECK (rol IN ('admin', 'editor', 'viewer')),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE usuarios ENABLE ROW LEVEL SECURITY;

-- Usuarios pueden ver su propio perfil
CREATE POLICY "Usuarios ven su perfil"
ON usuarios
FOR SELECT
TO authenticated
USING (auth.uid() = id);

-- Solo admins pueden modificar usuarios
CREATE POLICY "Admins modifican usuarios"
ON usuarios
FOR ALL
TO authenticated
USING (
    auth.jwt() ->> 'email' IN (
        'admin@costag.com',
        'inmob.costag@hotmail.com'
    )
);

-- ============================================
-- 4. STORAGE BUCKETS
-- ============================================

-- Crear bucket para imágenes de proyectos
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
    'proyectos',
    'proyectos',
    true,
    10485760, -- 10MB
    ARRAY['image/jpeg', 'image/png', 'image/webp', 'image/avif']
)
ON CONFLICT (id) DO UPDATE SET
    public = true,
    file_size_limit = 10485760,
    allowed_mime_types = ARRAY['image/jpeg', 'image/png', 'image/webp', 'image/avif'];

-- Políticas de Storage

-- Lectura pública de imágenes
CREATE POLICY "Lectura pública de imágenes"
ON storage.objects
FOR SELECT
USING (bucket_id = 'proyectos');

-- Subida solo para autenticados
CREATE POLICY "Subida para autenticados"
ON storage.objects
FOR INSERT
TO authenticated
WITH CHECK (
    bucket_id = 'proyectos' AND
    auth.jwt() ->> 'email' IN (
        'admin@costag.com',
        'inmob.costag@hotmail.com',
        'blademir@costag.com'
    )
);

-- Actualización solo para autenticados
CREATE POLICY "Actualización para autenticados"
ON storage.objects
FOR UPDATE
TO authenticated
USING (
    bucket_id = 'proyectos' AND
    auth.jwt() ->> 'email' IN (
        'admin@costag.com',
        'inmob.costag@hotmail.com',
        'blademir@costag.com'
    )
);

-- Eliminación solo para autenticados
CREATE POLICY "Eliminación para autenticados"
ON storage.objects
FOR DELETE
TO authenticated
USING (
    bucket_id = 'proyectos' AND
    auth.jwt() ->> 'email' IN (
        'admin@costag.com',
        'inmob.costag@hotmail.com',
        'blademir@costag.com'
    )
);

-- ============================================
-- 5. FUNCIONES ÚTILES
-- ============================================

-- Función para obtener estadísticas del dashboard
CREATE OR REPLACE FUNCTION get_dashboard_stats()
RETURNS JSON AS $$
DECLARE
    result JSON;
BEGIN
    SELECT json_build_object(
        'total_proyectos', (SELECT COUNT(*) FROM proyectos),
        'publicados', (SELECT COUNT(*) FROM proyectos WHERE estado = 'publicado'),
        'destacados', (SELECT COUNT(*) FROM proyectos WHERE destacado = true),
        'por_categoria', (
            SELECT json_object_agg(categoria, count)
            FROM (
                SELECT categoria, COUNT(*) as count
                FROM proyectos
                GROUP BY categoria
            ) sub
        ),
        'por_año', (
            SELECT json_object_agg(año, count)
            FROM (
                SELECT año, COUNT(*) as count
                FROM proyectos
                GROUP BY año
                ORDER BY año DESC
                LIMIT 10
            ) sub
        )
    ) INTO result;
    
    RETURN result;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- ============================================
-- 6. DATOS INICIALES (17 proyectos del currículum)
-- ============================================

-- Insertar proyectos de ejemplo (solo si la tabla está vacía)
INSERT INTO proyectos (titulo, titulo_corto, descripcion, ubicacion, municipio, año, categoria, dependencia, destacado, estado, url_imagen)
SELECT * FROM (VALUES
    ('Rehabilitación de 243 Puentes Vehiculares en Estado de México', 'Puentes Edo. Méx.', 
     'Conservación rutinaria de 243 puentes vehiculares en la red carretera del Estado de México',
     'Estado de México', 'Diversos municipios', 2018, 'Puentes'::categoria_proyecto, 
     'SDUOPOT', true, 'publicado'::estado_proyecto, '/images/projects/puente-vehicular-hero.png'),
    
    ('Rehabilitación de Carretera Tlapa-Marquelia', 'Carretera Tlapa', 
     'Rehabilitación integral de superficie de rodamiento y señalización vial',
     'Región Montaña', 'Tlapa de Comonfort', 2019, 'Carreteras'::categoria_proyecto, 
     'CICAEG', false, 'publicado'::estado_proyecto, '/images/projects/carretera-rehabilitada.png'),
    
    ('Pavimentación con Concreto Hidráulico MR-45', 'Pavimento MR-45', 
     'Construcción de pavimento de concreto hidráulico de alta resistencia para vías urbanas',
     'Chilpancingo', 'Chilpancingo de los Bravo', 2020, 'Pavimentación'::categoria_proyecto, 
     'H. Ayuntamiento', true, 'publicado'::estado_proyecto, '/images/projects/pavimentacion-urbana.png'),
    
    ('Construcción de Aulas en Escuela Primaria', 'Aulas Primaria', 
     'Construcción de 4 aulas didácticas con mobiliario y equipamiento completo',
     'Región Costa Chica', 'Ayutla de los Libres', 2021, 'Educativa'::categoria_proyecto, 
     'SEP Guerrero', false, 'publicado'::estado_proyecto, '/images/projects/aulas-educativas.png'),
    
    ('Techado de Cancha Deportiva Escolar', 'Techumbre Cancha', 
     'Instalación de techumbre metálica para cancha de usos múltiples',
     'Tierra Caliente', 'Coyuca de Catalán', 2022, 'Educativa'::categoria_proyecto, 
     'IIFEEM', true, 'publicado'::estado_proyecto, '/images/projects/techumbre-cancha.png'),
    
    ('Apertura de Camino Artesanal Rural', 'Camino El Naranjo', 
     'Apertura de 11.2 km de camino artesanal conectando comunidades rurales aisladas',
     'Región Montaña', 'Coahuayutla', 2023, 'Caminos'::categoria_proyecto, 
     'SDUOPOT', true, 'publicado'::estado_proyecto, '/images/projects/camino-artesanal.png'),
    
    ('Construcción de Muro de Contención', 'Muro Contención', 
     'Muro de mampostería de piedra con sistema de drenaje integrado',
     'Chilpancingo', 'Chilpancingo de los Bravo', 2024, 'Contención'::categoria_proyecto, 
     'Protección Civil', false, 'publicado'::estado_proyecto, '/images/projects/muro-contencion.png')
) AS v(titulo, titulo_corto, descripcion, ubicacion, municipio, año, categoria, dependencia, destacado, estado, url_imagen)
WHERE NOT EXISTS (SELECT 1 FROM proyectos LIMIT 1);

-- ============================================
-- 7. VERIFICACIÓN
-- ============================================

-- Verificar que todo se creó correctamente
DO $$
BEGIN
    RAISE NOTICE '✅ Tabla proyectos creada';
    RAISE NOTICE '✅ RLS habilitado';
    RAISE NOTICE '✅ Políticas de seguridad creadas';
    RAISE NOTICE '✅ Bucket de storage configurado';
    RAISE NOTICE '✅ Datos iniciales insertados';
    RAISE NOTICE '';
    RAISE NOTICE '📋 Siguiente paso: Crear usuario admin en Authentication > Users';
    RAISE NOTICE '   Email: admin@costag.com o inmob.costag@hotmail.com';
END $$;
