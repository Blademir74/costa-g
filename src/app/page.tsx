'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

// Datos de proyectos actualizados con las nuevas imágenes
const proyectosDestacados = [
  { 
    id: 1,
    nombre: 'Construcción de Aulas', 
    ubicacion: 'Guerrero, México', 
    sector: 'Educativo',
    tipo: 'educativo',
    año: 2024,
    imagen: '/images/proyectos/aulas-terminado.png',
    imagenes: ['/images/proyectos/aulas-construccion.png', '/images/proyectos/aulas-terminado.png'],
    descripcion: 'Construcción integral de aulas escolares con diseño moderno, estructura de concreto armado y acabados de primera calidad.',
    inversion: '8,500,000',
    m2: '450'
  },
  { 
    id: 2,
    nombre: 'Muro de Contención', 
    ubicacion: 'Región Montaña, Guerrero', 
    sector: 'Infraestructura',
    tipo: 'infraestructura',
    año: 2024,
    imagen: '/images/proyectos/muro-mamposteria.png',
    imagenes: ['/images/proyectos/muro-gaviones.png', '/images/proyectos/muro-mamposteria.png'],
    descripcion: 'Construcción de muros de contención con gaviones y mampostería para estabilización de taludes en zonas de riesgo.',
    inversion: '12,000,000',
    m2: '1,200'
  },
  { 
    id: 3,
    nombre: 'Techado y Cancha de Usos Múltiples', 
    ubicacion: 'Chilpancingo, Guerrero', 
    sector: 'Deportivo',
    tipo: 'deportivo',
    año: 2024,
    imagen: '/images/proyectos/techado-interior.png',
    imagenes: ['/images/proyectos/techado-interior.png', '/images/proyectos/techado-exterior.png'],
    descripcion: 'Instalación de techado con estructura metálica para canchas deportivas de usos múltiples. Diseño moderno y resistente.',
    inversion: '15,000,000',
    m2: '800'
  },
  { 
    id: 4,
    nombre: 'Pavimentación de Concreto Hidráulico', 
    ubicacion: 'Zona Urbana, Guerrero', 
    sector: 'Infraestructura',
    tipo: 'infraestructura',
    año: 2023,
    imagen: '/images/proyectos/pavimentacion-concreto.png',
    imagenes: ['/images/proyectos/pavimentacion-adoquin.png', '/images/proyectos/pavimentacion-concreto.png'],
    descripcion: 'Pavimentación de vialidades con concreto hidráulico de alta resistencia. Incluye banquetas, guarniciones y drenaje pluvial.',
    inversion: '25,000,000',
    m2: '5,500'
  },
  { 
    id: 5,
    nombre: 'Caminos Artesanales', 
    ubicacion: 'Sierra de Guerrero', 
    sector: 'Infraestructura',
    tipo: 'infraestructura',
    año: 2023,
    imagen: '/images/proyectos/camino-artesanal-1.png',
    imagenes: ['/images/proyectos/camino-artesanal-1.png', '/images/proyectos/camino-artesanal-2.png'],
    descripcion: 'Construcción de caminos artesanales con empedrado tradicional. Mejora de conectividad en comunidades rurales respetando técnicas ancestrales.',
    inversion: '18,000,000',
    m2: '12,000'
  },
  { 
    id: 6,
    nombre: 'Rehabilitación Estructural de Puentes', 
    ubicacion: 'Región Centro, Guerrero', 
    sector: 'Infraestructura',
    tipo: 'infraestructura',
    año: 2023,
    imagen: '/images/proyectos/puente-terminado.png',
    imagenes: ['/images/proyectos/puente-rehabilitacion.png', '/images/proyectos/puente-terminado.png'],
    descripcion: 'Rehabilitación estructural de puentes vehiculares. Reforzamiento de pilotes, trabes y losa con técnicas modernas de ingeniería.',
    inversion: '45,000,000',
    m2: '850'
  },
  { 
    id: 7,
    nombre: 'Rehabilitación de Caminos', 
    ubicacion: 'Costa Chica, Guerrero', 
    sector: 'Infraestructura',
    tipo: 'infraestructura',
    año: 2022,
    imagen: '/images/proyectos/camino-asfaltado-terminado.png',
    imagenes: ['/images/proyectos/camino-asfaltado-proceso.png', '/images/proyectos/camino-asfaltado-terminado.png'],
    descripcion: 'Rehabilitación y modernización de caminos rurales con carpeta asfáltica. Mejora de accesos y conectividad regional.',
    inversion: '32,000,000',
    m2: '15,000'
  },
]

// Proyectos anteriores (de la galería existente)
const proyectosAnteriores = [
  { 
    id: 8,
    nombre: 'Edificación Costera Premium', 
    ubicacion: 'Costa del Pacífico', 
    sector: 'Residencial',
    tipo: 'residencial',
    año: 2024,
    imagen: '/images/projects/edificacion-costera.jpg',
    imagenes: ['/images/projects/edificacion-costera.jpg'],
    descripcion: 'Desarrollo arquitectónico moderno con acabados de lujo frente al mar.',
    inversion: '45,000,000',
    m2: '12,500'
  },
]

const lineasNegocio = [
  {
    id: 'construccion',
    icon: '🏗️',
    titulo: 'CONSTRUCCIÓN',
    descripcion: 'Servicios integrales de construcción: residencial, comercial, industrial e infraestructura. Diseño, supervisión y ejecución con estándares internacionales.',
    link: '/servicios',
    stats: ['500+ Proyectos', '30+ Años', 'ISO 9001']
  },
  {
    id: 'inmobiliaria',
    icon: '🏢',
    titulo: 'INMOBILIARIA',
    descripcion: 'Portafolio premium de propiedades. Departamentos, casas, locales comerciales. Desarrollos en ubicaciones estratégicas con financiamiento flexible.',
    link: '/proyectos',
    stats: ['150+ Propiedades', 'Créditos', 'Asesoría']
  },
  {
    id: 'materiales',
    icon: '⚙️',
    titulo: 'MATERIALES',
    descripcion: 'Distribuidora de materiales de construcción de calidad. Cemento, acero, blocks, acabados. Venta al por mayor y menor con asesoría técnica.',
    link: '/materiales',
    stats: ['200+ Productos', 'Entregas', 'Garantía']
  },
]

const testimonios = [
  {
    id: 1,
    nombre: 'Ing. Carlos Mendoza',
    puesto: 'Director de Obras Públicas, Municipio de Chilpancingo',
    texto: 'COSTA G ha demostrado profesionalismo excepcional en todos los proyectos de infraestructura. Calidad, cumplimiento y transparencia.',
    rating: 5,
  },
  {
    id: 2,
    nombre: 'Arq. María Elena Vázquez',
    puesto: 'Gerente de Proyectos, Secretaría de Educación',
    texto: 'Las aulas que construyeron superaron nuestras expectativas. Entrega puntual y acabados de primera calidad.',
    rating: 5,
  },
  {
    id: 3,
    nombre: 'Lic. Roberto Hernández',
    puesto: 'Presidente Municipal, Tlapa de Comonfort',
    texto: 'Los caminos artesanales transformaron la conectividad de nuestras comunidades. Un trabajo impecable.',
    rating: 5,
  },
]

const stats = [
  { valor: '30+', label: 'Años de Experiencia', icon: '📅' },
  { valor: '500+', label: 'Proyectos Completados', icon: '🏗️' },
  { valor: '85', label: 'Municipios Atendidos', icon: '📍' },
  { valor: '100%', label: 'Satisfacción', icon: '⭐' },
]

// Componente de Lightbox para la galería
function GalleryLightbox({ 
  images, 
  isOpen, 
  onClose, 
  currentIndex, 
  setCurrentIndex,
  projectName 
}: { 
  images: string[], 
  isOpen: boolean, 
  onClose: () => void,
  currentIndex: number,
  setCurrentIndex: (index: number) => void,
  projectName: string
}) {
  if (!isOpen) return null

  const nextImage = () => setCurrentIndex((currentIndex + 1) % images.length)
  const prevImage = () => setCurrentIndex((currentIndex - 1 + images.length) % images.length)

  return (
    <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center" onClick={onClose}>
      <div className="relative max-w-6xl w-full mx-4" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="absolute -top-12 left-0 right-0 flex justify-between items-center text-white">
          <h3 className="text-xl font-bold">{projectName}</h3>
          <span className="text-sm">{currentIndex + 1} / {images.length}</span>
        </div>
        
        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-costa-gold transition"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Main Image */}
        <div className="relative aspect-video bg-costa-dark rounded-lg overflow-hidden">
          <Image
            src={images[currentIndex]}
            alt={`${projectName} - Imagen ${currentIndex + 1}`}
            fill
            className="object-contain"
          />
        </div>

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button 
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 hover:bg-costa-gold flex items-center justify-center transition"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 hover:bg-costa-gold flex items-center justify-center transition"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}

        {/* Thumbnails */}
        {images.length > 1 && (
          <div className="flex gap-2 mt-4 justify-center">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`relative w-20 h-14 rounded overflow-hidden transition ${
                  idx === currentIndex ? 'ring-2 ring-costa-gold' : 'opacity-50 hover:opacity-100'
                }`}
              >
                <Image src={img} alt={`Thumbnail ${idx + 1}`} fill className="object-cover" />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxImages, setLightboxImages] = useState<string[]>([])
  const [lightboxIndex, setLightboxIndex] = useState(0)
  const [lightboxProject, setLightboxProject] = useState('')

  const openLightbox = (images: string[], index: number, projectName: string) => {
    setLightboxImages(images)
    setLightboxIndex(index)
    setLightboxProject(projectName)
    setLightboxOpen(true)
  }

  return (
    <div className="min-h-screen bg-costa-light">
      {/* Header Premium - Glass Effect */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-costa-secondary/95 backdrop-blur-md border-b border-white/10">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-costa-gold to-amber-600 flex items-center justify-center shadow-lg">
              <span className="text-costa-secondary font-black text-2xl">CG</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-bold text-white text-2xl tracking-tight">COSTA G</span>
              <span className="block text-[11px] text-costa-gold tracking-widest uppercase">Constructora & Inmobiliaria</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-10">
            <Link href="/" className="text-white hover:text-costa-gold transition font-medium">INICIO</Link>
            
            {/* Dropdown */}
            <div className="relative group">
              <button className="text-white hover:text-costa-gold transition font-medium flex items-center gap-1">
                NEGOCIO
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 overflow-hidden">
                <Link href="/servicios" className="block px-6 py-4 text-costa-secondary hover:bg-costa-gold/10 border-b border-gray-100">
                  <span className="font-bold">🏗️ Construcción</span>
                  <span className="block text-xs text-gray-500 mt-1">Residencial, Comercial, Industrial</span>
                </Link>
                <Link href="/proyectos" className="block px-6 py-4 text-costa-secondary hover:bg-costa-gold/10 border-b border-gray-100">
                  <span className="font-bold">🏢 Inmobiliaria</span>
                  <span className="block text-xs text-gray-500 mt-1">Venta y Renta de Propiedades</span>
                </Link>
                <Link href="/materiales" className="block px-6 py-4 text-costa-secondary hover:bg-costa-gold/10">
                  <span className="font-bold">⚙️ Materiales</span>
                  <span className="block text-xs text-gray-500 mt-1">Catálogo y Distribución</span>
                </Link>
              </div>
            </div>

            <Link href="/proyectos" className="text-white hover:text-costa-gold transition font-medium">PROYECTOS</Link>
            <Link href="/nosotros" className="text-white hover:text-costa-gold transition font-medium">NOSOTROS</Link>
            <Link href="/contacto" className="text-white hover:text-costa-gold transition font-medium">CONTACTO</Link>
          </div>

          {/* CTA Button */}
          <Link href="/contacto" className="hidden md:block">
            <button className="bg-gradient-to-r from-costa-gold to-amber-500 text-costa-secondary px-8 py-3 rounded-lg font-bold hover:shadow-xl hover:shadow-costa-gold/30 transition-all hover:scale-105">
              COTIZAR AHORA
            </button>
          </Link>

          {/* Mobile Menu */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden p-2 text-white">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </nav>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="lg:hidden bg-costa-secondary/98 border-t border-white/10 px-6 py-6 space-y-4">
            <Link href="/" className="block text-white py-2 font-medium">Inicio</Link>
            <Link href="/servicios" className="block text-white py-2">🏗️ Construcción</Link>
            <Link href="/proyectos" className="block text-white py-2">🏢 Inmobiliaria</Link>
            <Link href="/materiales" className="block text-white py-2">⚙️ Materiales</Link>
            <Link href="/nosotros" className="block text-white py-2">Nosotros</Link>
            <Link href="/contacto" className="block text-white py-2">Contacto</Link>
            <Link href="/contacto" className="block bg-costa-gold text-costa-secondary text-center py-4 rounded-lg font-bold mt-6">
              COTIZAR AHORA
            </Link>
          </div>
        )}
      </header>

      {/* Hero Section - Premium */}
      <section className="relative h-[750px] lg:h-[850px]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-costa-secondary/90 via-costa-secondary/70 to-transparent" />
        
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <div className="max-w-3xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-costa-gold/20 border border-costa-gold/50 mb-10 animate-fade-in">
                <span className="w-2.5 h-2.5 rounded-full bg-costa-gold animate-pulse" />
                <span className="text-sm text-white font-semibold tracking-wide">+30 Años de Experiencia • Nacional e Internacional</span>
              </div>

              {/* Main Title */}
              <h1 className="text-6xl lg:text-8xl font-black text-white leading-[0.9] mb-8 animate-slide-up">
                Construimos<br/>
                <span className="text-costa-gold">Proyectos de</span><br/>
                <span className="text-costa-sky">Impacto</span>
              </h1>
              
              {/* Description */}
              <p className="text-xl lg:text-2xl text-white/80 mb-10 max-w-xl leading-relaxed font-light animate-slide-up" style={{animationDelay: '0.2s'}}>
                Ingeniería y construcción de clase mundial. Infraestructura, edificación, 
                caminos y más. <strong className="text-white">Tu proyecto en las mejores manos.</strong>
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-5 animate-slide-up" style={{animationDelay: '0.4s'}}>
                <Link href="/proyectos">
                  <button className="bg-gradient-to-r from-costa-gold to-amber-500 text-costa-secondary px-10 py-5 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-costa-gold/40 transition-all hover:scale-105">
                    EXPLORAR PROYECTOS
                  </button>
                </Link>
                <Link href="/contacto">
                  <button className="bg-white/10 backdrop-blur border-2 border-white/40 text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-white/20 transition-all">
                    INICIAR PROYECTO
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-costa-dark/95 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, i) => (
                <div key={i} className="text-center group">
                  <span className="text-3xl mb-2 block">{stat.icon}</span>
                  <p className="text-4xl lg:text-5xl font-black text-costa-gold group-hover:scale-110 transition-transform">{stat.valor}</p>
                  <p className="text-sm text-white/60 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3 Líneas de Negocio - Cards Grandes */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="inline-block px-5 py-2 rounded-full bg-costa-gold/10 text-costa-gold text-sm font-bold mb-6 tracking-wider">
              NUESTROS SERVICIOS
            </span>
            <h2 className="text-5xl lg:text-6xl font-black text-costa-secondary mb-6">
              Líneas de Negocio
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              Tres pilares sólidos que impulsan el desarrollo de Guerrero y la región
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
            {lineasNegocio.map((linea) => (
              <Link href={linea.link} key={linea.id}>
                <div className="group bg-gradient-to-br from-costa-secondary to-costa-dark rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer h-full hover:-translate-y-2">
                  {/* Header con icono */}
                  <div className="p-10 pb-6">
                    <span className="text-6xl block mb-6">{linea.icon}</span>
                    <h3 className="text-3xl font-black text-white mb-4 tracking-tight">
                      {linea.titulo}
                    </h3>
                    <p className="text-white/70 leading-relaxed">
                      {linea.descripcion}
                    </p>
                  </div>
                  
                  {/* Stats */}
                  <div className="px-10 pb-8">
                    <div className="flex flex-wrap gap-2">
                      {linea.stats.map((stat, i) => (
                        <span key={i} className="px-3 py-1.5 rounded-full bg-white/10 text-white/80 text-xs font-semibold">
                          {stat}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="px-10 py-5 bg-costa-gold/10 border-t border-costa-gold/20">
                    <span className="inline-flex items-center text-costa-gold font-bold group-hover:gap-4 gap-2 transition-all">
                      Explorar
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Proyectos Destacados - Grid Masónico */}
      <section className="py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
            <div>
              <span className="inline-block px-5 py-2 rounded-full bg-costa-secondary/10 text-costa-secondary text-sm font-bold mb-6 tracking-wider">
                PORTAFOLIO
              </span>
              <h2 className="text-5xl lg:text-6xl font-black text-costa-secondary">
                Proyectos Destacados
              </h2>
            </div>
            <Link href="/proyectos" className="inline-flex items-center gap-3 text-costa-gold font-bold text-lg hover:gap-5 transition-all">
              Ver Todos los Proyectos
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Grid Masónico */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {proyectosDestacados.slice(0, 6).map((proyecto, index) => (
              <div 
                key={proyecto.id} 
                className={`group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer ${
                  index === 0 ? 'md:col-span-2 md:row-span-2' : ''
                }`}
                onClick={() => openLightbox(proyecto.imagenes, 0, proyecto.nombre)}
              >
                {/* Imagen */}
                <div className={`relative overflow-hidden ${index === 0 ? 'h-96' : 'h-56'}`}>
                  <Image
                    src={proyecto.imagen}
                    alt={proyecto.nombre}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-3 py-1.5 rounded-full bg-costa-gold text-costa-secondary text-xs font-bold">
                      {proyecto.año}
                    </span>
                    <span className="px-3 py-1.5 rounded-full bg-white/20 backdrop-blur text-white text-xs font-bold">
                      {proyecto.sector}
                    </span>
                  </div>

                  {/* Gallery icon */}
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  
                  {/* Content on image */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className={`font-bold text-white mb-1 ${index === 0 ? 'text-2xl' : 'text-lg'}`}>
                      {proyecto.nombre}
                    </h3>
                    <p className="text-white/70 text-sm flex items-center gap-1">
                      📍 {proyecto.ubicacion}
                    </p>
                  </div>
                </div>

                {/* Footer con métricas */}
                <div className="p-5">
                  <div className="flex items-center justify-between text-sm">
                    <div>
                      <span className="text-gray-400">Inversión</span>
                      <p className="font-bold text-costa-secondary">${proyecto.inversion}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-gray-400">Área</span>
                      <p className="font-bold text-costa-secondary">{proyecto.m2} m²</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-28 bg-costa-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-5 py-2 rounded-full bg-costa-gold/20 text-costa-gold text-sm font-bold mb-6 tracking-wider">
              TESTIMONIOS
            </span>
            <h2 className="text-5xl font-black text-white mb-4">
              Lo Que Dicen Nuestros Clientes
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonios.map((testimonio) => (
              <div key={testimonio.id} className="bg-white/5 backdrop-blur border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors">
                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonio.rating)].map((_, i) => (
                    <span key={i} className="text-costa-gold text-2xl">★</span>
                  ))}
                </div>
                
                {/* Texto */}
                <p className="text-white/80 mb-8 leading-relaxed text-lg italic">
                  "{testimonio.texto}"
                </p>
                
                {/* Autor */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-costa-gold to-amber-600 flex items-center justify-center">
                    <span className="text-costa-secondary font-bold text-xl">{testimonio.nombre.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="font-bold text-white">{testimonio.nombre}</p>
                    <p className="text-sm text-white/50">{testimonio.puesto}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-28 bg-gradient-to-r from-costa-gold via-amber-500 to-costa-gold relative overflow-hidden">
        {/* Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(0,0,0,0.1) 35px, rgba(0,0,0,0.1) 70px)'}} />
        </div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl lg:text-6xl font-black text-costa-secondary mb-8">
            ¿Tienes un Proyecto en Mente?
          </h2>
          <p className="text-xl text-costa-secondary/80 mb-12 max-w-2xl mx-auto">
            Contáctanos hoy y recibe una consultoría gratuita. Más de 30 años transformando ideas en realidades.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link href="/contacto">
              <button className="bg-costa-secondary text-white px-12 py-5 rounded-xl font-bold text-lg hover:bg-costa-dark transition-all hover:shadow-2xl">
                SOLICITAR COTIZACIÓN
              </button>
            </Link>
            <a href="https://wa.me/527472735934?text=Hola,%20me%20interesa%20cotizar%20un%20proyecto" target="_blank" rel="noopener noreferrer">
              <button className="bg-white text-costa-secondary px-12 py-5 rounded-xl font-bold text-lg hover:shadow-2xl transition-all flex items-center justify-center gap-3">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                WHATSAPP
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer Premium */}
      <footer className="bg-costa-dark text-white pt-24 pb-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            {/* Brand */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-costa-gold to-amber-600 flex items-center justify-center">
                  <span className="text-costa-secondary font-black text-2xl">CG</span>
                </div>
                <div>
                  <span className="font-bold text-2xl">COSTA G</span>
                  <span className="block text-xs text-costa-gold tracking-wider">CONSTRUCTORA & INMOBILIARIA</span>
                </div>
              </div>
              <p className="text-white/50 leading-relaxed mb-8">
                Más de 30 años construyendo el futuro de Guerrero. Excelencia en construcción, inmobiliaria y materiales.
              </p>
            </div>

            {/* Navegación */}
            <div>
              <h4 className="font-bold text-lg mb-6 text-costa-gold">Navegación</h4>
              <ul className="space-y-4 text-white/60">
                <li><Link href="/" className="hover:text-costa-gold transition">Inicio</Link></li>
                <li><Link href="/nosotros" className="hover:text-costa-gold transition">Nosotros</Link></li>
                <li><Link href="/servicios" className="hover:text-costa-gold transition">Servicios</Link></li>
                <li><Link href="/proyectos" className="hover:text-costa-gold transition">Proyectos</Link></li>
                <li><Link href="/contacto" className="hover:text-costa-gold transition">Contacto</Link></li>
              </ul>
            </div>

            {/* Líneas */}
            <div>
              <h4 className="font-bold text-lg mb-6 text-costa-gold">Líneas de Negocio</h4>
              <ul className="space-y-4 text-white/60">
                <li><Link href="/servicios" className="hover:text-costa-gold transition">🏗️ Construcción</Link></li>
                <li><Link href="/proyectos" className="hover:text-costa-gold transition">🏢 Inmobiliaria</Link></li>
                <li><Link href="/materiales" className="hover:text-costa-gold transition">⚙️ Materiales</Link></li>
              </ul>
            </div>

            {/* Contacto */}
            <div>
              <h4 className="font-bold text-lg mb-6 text-costa-gold">Contacto</h4>
              <ul className="space-y-4 text-white/60">
                <li className="flex items-start gap-3">
                  <span className="text-costa-gold text-xl">📞</span>
                  <span>747 273 5934</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-costa-gold text-xl">✉️</span>
                  <span className="break-all">Inmob.costag@Hotmail.com</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-costa-gold text-xl">📍</span>
                  <span>Chilpancingo, Guerrero, México</span>
                </li>
              </ul>
              <div className="mt-8">
                <Link href="/admin" className="text-xs text-white/20 hover:text-white/40 transition">
                  Panel Admin
                </Link>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-10 border-t border-white/10 text-center text-white/30 text-sm">
            <p>© {new Date().getFullYear()} COSTA G - Constructora e Inmobiliaria. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a 
        href="https://wa.me/527472735934?text=Hola,%20me%20interesa%20obtener%20información%20sobre%20sus%20servicios" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="whatsapp-btn animate-pulse-glow"
        aria-label="Contactar por WhatsApp"
      >
        <svg viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      </a>

      {/* Lightbox */}
      <GalleryLightbox
        images={lightboxImages}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        currentIndex={lightboxIndex}
        setCurrentIndex={setLightboxIndex}
        projectName={lightboxProject}
      />
    </div>
  )
}
