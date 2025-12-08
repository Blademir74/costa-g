# 🏗️ Costa G - Sitio Web Corporativo

Sitio web corporativo para **Comercializadora e Inmobiliaria Costa G S.A. de C.V.**, empresa constructora Bio-Sustentable ubicada en Chilpancingo, Guerrero, México.

![Costa G Logo](./public/logo.png)

## 📋 Descripción

Costa G es una empresa constructora especializada en:
- 🏗️ Construcción (obra civil, puentes, caminos, edificaciones)
- 🔧 Remodelación
- 🧱 Venta de Materiales
- 📐 Diseño Arquitectónico
- 📋 Consultoría

**Enfoque:** Construcción Bio-Sustentable con menor huella de carbono.

## 🎨 Paleta de Colores

| Color | Hex | Uso |
|-------|-----|-----|
| Azul Cielo | `#87CEEB` | Primario - Fondos, espacios amplios |
| Azul Marino | `#1A3A52` | Secundario - Títulos, botones |
| Dorado | `#D4AF37` | Acento - Highlights, CTAs premium |
| Blanco | `#FFFFFF` | Neutro - Fondos limpios |
| Gris | `#666666` | Texto - Cuerpo de texto |

## 🛠️ Stack Tecnológico

- **Framework:** Next.js 14 (App Router)
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS
- **Animaciones:** Framer Motion
- **Iconos:** Lucide React
- **Tipografía:** Montserrat (títulos) + Open Sans (cuerpo)

## 📁 Estructura del Proyecto

```
costa-g-website/
├── public/
│   ├── images/
│   └── fonts/
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Layout principal
│   │   ├── page.tsx           # Home
│   │   ├── globals.css        # Estilos globales
│   │   └── [otras páginas]/
│   ├── components/
│   │   ├── ui/                # Componentes base (Button, Input, Card...)
│   │   ├── layout/            # Header, Footer, WhatsApp Float
│   │   ├── shared/            # ServiceCard, ProjectCard, Hero...
│   │   └── sections/          # Secciones de página
│   ├── data/
│   │   └── projects.ts        # Datos de proyectos del curriculum
│   ├── lib/
│   │   ├── constants.ts       # Configuración del sitio
│   │   └── utils.ts           # Utilidades
│   └── types/
│       └── index.ts           # Tipos TypeScript
├── tailwind.config.ts
├── next.config.js
├── package.json
└── README.md
```

## 🚀 Instalación

### Requisitos
- Node.js 18.x o superior
- npm o yarn

### Pasos

1. **Clonar el repositorio**
```bash
git clone https://github.com/costag/website.git
cd costa-g-website
```

2. **Instalar dependencias**
```bash
npm install
# o
yarn install
```

3. **Configurar variables de entorno**
```bash
cp .env.example .env.local
```

Editar `.env.local` con tus credenciales:
```env
NEXT_PUBLIC_SITE_URL=https://costag.mx
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
HUBSPOT_ACCESS_TOKEN=pat-xxx
GOOGLE_MAPS_API_KEY=AIza...
```

4. **Ejecutar en desarrollo**
```bash
npm run dev
# o
yarn dev
```

5. **Abrir en el navegador**
```
http://localhost:3000
```

## 📦 Scripts Disponibles

| Script | Descripción |
|--------|-------------|
| `npm run dev` | Inicia servidor de desarrollo |
| `npm run build` | Genera build de producción |
| `npm run start` | Inicia servidor de producción |
| `npm run lint` | Ejecuta ESLint |
| `npm run type-check` | Verifica tipos TypeScript |

## 🏠 Páginas del Sitio

1. **Home** (`/`) - Página principal con hero, servicios, proyectos
2. **Servicios** (`/servicios`) - Listado de servicios
3. **Proyectos** (`/proyectos`) - Portafolio de proyectos
4. **Desarrollos** (`/desarrollos`) - Propiedades inmobiliarias
5. **Nosotros** (`/nosotros`) - Información de la empresa
6. **Blog** (`/blog`) - Artículos y noticias
7. **Contacto** (`/contacto`) - Formulario de contacto

## 🧩 Componentes Principales

### UI Base
- `Button` - Botones con variantes (primary, secondary, outline, accent)
- `Input` - Campos de texto con validación
- `Textarea` - Área de texto
- `Select` - Selector desplegable
- `Card` - Tarjetas de contenido
- `Badge` - Etiquetas de estado
- `Breadcrumb` - Navegación jerárquica

### Layout
- `Header` - Navegación principal con mega menú
- `Footer` - Pie de página con links y newsletter
- `Logo` - Logo de Costa G
- `WhatsAppFloat` - Botón flotante de WhatsApp

### Compartidos
- `Hero` - Sección hero con video/imagen
- `ServiceCard` - Tarjeta de servicio
- `ProjectCard` - Tarjeta de proyecto
- `ContactForm` - Formulario de contacto

### Secciones
- `StatsCounter` - Números animados
- `ServicesSection` - Grid de servicios
- `ProjectsSection` - Galería de proyectos
- `WhyUsSection` - Por qué elegirnos
- `CTASection` - Call to action

## 📊 Datos del Curriculum

El sitio incluye **17 proyectos** del curriculum empresarial:
- 243 puentes conservados (Texcoco y Toluca, 2018)
- Infraestructura educativa (escuelas, aulas)
- Caminos artesanales
- Pavimentación
- Rehabilitación de puentes

## 📱 Responsive Breakpoints

| Breakpoint | Ancho | Dispositivo |
|------------|-------|-------------|
| xs | 320px | Móvil pequeño |
| sm | 640px | Móvil grande |
| md | 768px | Tablet |
| lg | 1024px | Laptop |
| xl | 1280px | Desktop |
| 2xl | 1440px | Desktop grande |

## 🔧 Configuración

### Información de Contacto
Editar en `src/lib/constants.ts`:
```typescript
export const SITE_CONFIG = {
  contact: {
    phone: '747 273 5934',
    email: 'Inmob.costag@Hotmail.com',
    whatsapp: '527472735934',
  },
  address: {
    street: 'Galo Soberon y Parra, Edif. C, Depto. #302',
    city: 'Chilpancingo',
    state: 'Guerrero',
  },
  // ...
}
```

## 🚢 Despliegue

### Vercel (Recomendado)
```bash
vercel deploy
```

### Build Manual
```bash
npm run build
npm run start
```

## 📝 Licencia

Propiedad de Comercializadora e Inmobiliaria Costa G S.A. de C.V.

## 📞 Contacto

- **Teléfono:** 747 273 5934
- **Email:** Inmob.costag@Hotmail.com
- **Dirección:** Galo Soberon y Parra, Edif. C, Depto. #302, Col. Las Torres, C.P. 39076, Chilpancingo, Guerrero

---

Desarrollado con ❤️ para Costa G
