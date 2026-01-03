-- ============================================
-- COSTA G - SUPABASE DATABASE SCHEMA
-- Ejecutar en SQL Editor de Supabase Dashboard
-- ============================================

-- 1. TABLA DE PROYECTOS
CREATE TABLE IF NOT EXISTS proyectos (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  titulo TEXT NOT NULL,
  titulo_corto TEXT,
  descripcion TEXT,
  descripcion_larga TEXT,
  ubicacion TEXT,
  municipio TEXT,
  año INTEGER,
  categoria TEXT NOT NULL CHECK (categoria IN (
    'Puentes', 'Carreteras', 'Caminos', 
    'Pavimentación', 'Infraestructura Educativa', 'Muros'
  )),
  cliente TEXT,
  dependencia TEXT,
  contrato TEXT,
  imagen_principal TEXT,
  imagenes_galeria TEXT[],
  destacado BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. ÍNDICES
CREATE INDEX idx_proyectos_año ON proyectos(año DESC);
CREATE INDEX idx_proyectos_categoria ON proyectos(categoria);

-- 3. ROW LEVEL SECURITY
ALTER TABLE proyectos ENABLE ROW LEVEL SECURITY;

-- Lectura pública
CREATE POLICY "Public read" ON proyectos FOR SELECT USING (true);

-- Admin puede todo (autenticado)
CREATE POLICY "Admin insert" ON proyectos FOR INSERT 
WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Admin update" ON proyectos FOR UPDATE 
USING (auth.role() = 'authenticated');

CREATE POLICY "Admin delete" ON proyectos FOR DELETE 
USING (auth.role() = 'authenticated');

-- 4. TRIGGER PARA UPDATED_AT
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER set_updated_at
BEFORE UPDATE ON proyectos
FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- 5. DATOS INICIALES (ejecutar después de crear la tabla)
INSERT INTO proyectos (titulo, titulo_corto, descripcion, ubicacion, municipio, año, categoria, cliente, dependencia, destacado, imagen_principal) VALUES
('Conservación Periódica de Puentes Vehiculares', 'Puentes Coahuayutla', 'Rehabilitación de 243 estructuras de puentes vehiculares.', 'km 31+000 al 80+000', 'Coahuayutla', 2024, 'Puentes', 'H. Ayuntamiento de Coahuayutla', 'SDUOPOT', true, '/images/projects/puente-vehicular-hero.png'),
('Apertura de Camino El Naranjo', 'Camino El Naranjo', '11.2 km de camino rural artesanal.', 'El Naranjo', 'Coahuayutla', 2024, 'Caminos', 'H. Ayuntamiento', 'SDUOPOT', true, '/images/projects/camino-artesanal.png'),
('Techado de Cancha Escolar', 'Techado Escuela', 'Estructura metálica para cancha deportiva.', 'Sierra', 'Coahuayutla', 2024, 'Infraestructura Educativa', 'H. Ayuntamiento', 'SDUOPOT', false, '/images/projects/techumbre-cancha.png'),
('Pavimentación Centro', 'Pavimento Centro', 'Concreto hidráulico MR-45.', 'Calle Principal', 'Chilpancingo', 2023, 'Pavimentación', 'H. Ayuntamiento', 'Obras Públicas', true, '/images/projects/pavimentacion-urbana.png'),
('Muro de Contención', 'Muro Contención', 'Mampostería de piedra para estabilización.', 'Colonia Popular', 'Chilpancingo', 2021, 'Muros', 'H. Ayuntamiento', 'Protección Civil', false, '/images/projects/muro-contencion.png');
