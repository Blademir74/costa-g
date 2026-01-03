# 🏗️ Costa G - Versión Final Completa

**Versión:** 7.0 - Código Limpio + Dashboard Admin + SEO Internacional  
**Fecha:** 27 de Diciembre, 2025  
**Framework:** Next.js 14 + TypeScript + Tailwind CSS + Supabase

---

## ⚠️ IMPORTANTE - CÓMO USAR

**NO use `git clone` del repositorio antiguo.**

### Instalación Correcta:

```bash
# 1. Extraer este ZIP en una carpeta nueva
# 2. Abrir terminal en esa carpeta

cd costa-g-final

# 3. Instalar dependencias
npm install

# 4. Ejecutar en desarrollo
npm run dev

# 5. Abrir http://localhost:3000
```

---

## ✅ Checklist de Implementación

| Característica | Estado |
|----------------|--------|
| ❌ SearchBar eliminado | ✅ HECHO |
| Header limpio | ✅ HECHO |
| Logo CG Premium | ✅ HECHO |
| Hero Cinematic | ✅ HECHO |
| Fade invisible a #F0F8FF | ✅ HECHO |
| Dashboard Admin | ✅ HECHO |
| CRUD Proyectos | ✅ HECHO |
| Supabase Storage | ✅ HECHO |
| RLS Security | ✅ HECHO |
| SEO Internacional | ✅ HECHO |
| robots.txt (GPTBot) | ✅ HECHO |
| WCAG 2.1 AA | ✅ HECHO |

---

## 🎨 Paleta de Colores

| Color | HEX | Uso |
|-------|-----|-----|
| **Navy** | `#1A3A52` | Títulos, CTAs |
| **Gold** | `#D4AF37` | Acentos premium |
| **Sky Light** | `#F0F8FF` | Fondos |
| **Charcoal** | `#666666` | Texto body |

---

## 🔐 Configurar Dashboard Admin

### 1. Crear Proyecto en Supabase

1. Ir a [supabase.com](https://supabase.com)
2. Crear nuevo proyecto
3. Copiar URL y anon key

### 2. Configurar Variables de Entorno

Crear archivo `.env.local`:

```bash
NEXT_PUBLIC_SUPABASE_URL=https://tu-proyecto.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu-anon-key
```

### 3. Crear Tabla de Proyectos

Ejecutar en SQL Editor de Supabase:

```sql
-- Crear tabla
CREATE TABLE proyectos (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  titulo TEXT NOT NULL,
  titulo_corto TEXT,
  descripcion TEXT NOT NULL,
  ubicacion TEXT NOT NULL,
  municipio TEXT NOT NULL,
  año INTEGER NOT NULL,
  categoria TEXT NOT NULL,
  cliente TEXT,
  dependencia TEXT,
  contrato TEXT,
  imagen_principal TEXT,
  destacado BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Habilitar RLS
ALTER TABLE proyectos ENABLE ROW LEVEL SECURITY;

-- Lectura pública
CREATE POLICY "Public read" ON proyectos
  FOR SELECT USING (true);

-- Escritura para usuarios autenticados
CREATE POLICY "Auth write" ON proyectos
  FOR ALL USING (auth.role() = 'authenticated');
```

### 4. Crear Bucket de Storage

```sql
INSERT INTO storage.buckets (id, name, public)
VALUES ('proyectos-images', 'proyectos-images', true);
```

### 5. Crear Usuario Admin

1. Ir a Authentication > Users
2. Click "Invite user"
3. Email: admin@costag.com
4. Configurar contraseña

---

## 📁 Estructura del Proyecto

```
costa-g-final/
├── public/
│   ├── robots.txt           # Permite GPTBot
│   ├── sitemap.xml          # SEO
│   └── images/projects/     # 14 imágenes
│
├── src/
│   ├── app/
│   │   ├── globals.css      # Hero Cinematic
│   │   ├── layout.tsx       # SEO + JSON-LD
│   │   ├── page.tsx         # Home
│   │   └── admin/
│   │       ├── page.tsx     # Login
│   │       └── proyectos/
│   │           ├── page.tsx # Lista CRUD
│   │           └── [id]/    # Editor
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx   # SIN SearchBar
│   │   │   └── Footer.tsx
│   │   └── ui/
│   │       └── Logo.tsx     # Monograma CG
│   │
│   ├── lib/
│   │   └── supabase.ts      # Cliente + funciones
│   │
│   └── data/
│       └── proyectos.ts     # 17 proyectos
│
├── .env.example
├── package.json
└── tailwind.config.ts
```

---

## 📱 Rutas

| Ruta | Descripción |
|------|-------------|
| `/` | Home con Hero Cinematic |
| `/proyectos` | Galería de 17 proyectos |
| `/nosotros` | Timeline 2018-2024 |
| `/servicios` | 6 categorías |
| `/contacto` | Formulario |
| `/admin` | Login |
| `/admin/proyectos` | Lista CRUD |
| `/admin/proyectos/[id]` | Editor |

---

## 🚀 Deploy en Vercel

```bash
# Instalar CLI
npm i -g vercel

# Deploy
vercel

# Configurar variables de entorno en Vercel Dashboard
```

---

## 📊 Datos Reales del Currículum

| Estadística | Valor |
|-------------|-------|
| Puentes rehabilitados | 243+ |
| Años de experiencia | 7+ |
| Proyectos completados | 17 |
| Cumplimiento | 100% |
| Municipios atendidos | 8+ |

---

## 📞 Contacto

**Comercializadora e Inmobiliaria Costa G S.A. de C.V.**  
📍 Chilpancingo, Guerrero  
📞 747 273 5934  
✉️ Inmob.costag@Hotmail.com

---

## 🎯 Para Sincronizar con GitHub

Después de verificar que funciona:

```bash
cd tu-carpeta-del-proyecto
rm -rf * .* 2>/dev/null
# Copiar contenido de costa-g-final aquí
git add .
git commit -m "feat: Costa G v7.0 - Código limpio + Admin + SEO"
git push origin main
```

---

*"El lujo susurra con confianza"*
