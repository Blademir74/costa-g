'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

// Catálogo completo de proyectos
const todosProyectos = [
  // NUEVOS PROYECTOS (con las fotos proporcionadas)
  { 
    id: 1,
    nombre: 'Construcción de Aulas Escolares', 
    ubicacion: 'Guerrero, México', 
    sector: 'Educativo',
    tipo: 'educativo',
    año: 2024,
    imagen: '/images/proyectos/aulas-terminado.png',
    imagenes: ['/images/proyectos/aulas-construccion.png', '/images/proyectos/aulas-terminado.png'],
    descripcion: 'Construcción integral de aulas escolares con diseño moderno, estructura de concreto armado y acabados de primera calidad. Espacios diseñados para el aprendizaje óptimo.',
    inversion: '8,500,000',
    m2: '450',
    estatus: 'Completado'
  },
  { 
    id: 2,
    nombre: 'Muro de Contención y Gaviones', 
    ubicacion: 'Región Montaña, Guerrero', 
    sector: 'Infraestructura',
    tipo: 'infraestructura',
    año: 2024,
    imagen: '/images/proyectos/muro-mamposteria.png',
    imagenes: ['/images/proyectos/muro-gaviones.png', '/images/proyectos/muro-mamposteria.png'],
    descripcion: 'Construcción de muros de contención con gaviones y mampostería para estabilización de taludes y protección de zonas de riesgo. Ingeniería de vanguardia.',
    inversion: '12,000,000',
    m2: '1,200',
    estatus: 'Completado'
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
    descripcion: 'Instalación de techado con estructura metálica de alta resistencia para canchas deportivas de usos múltiples. Diseño moderno y durable.',
    inversion: '15,000,000',
    m2: '800',
    estatus: 'Completado'
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
    descripcion: 'Pavimentación de vialidades con concreto hidráulico de alta resistencia. Incluye banquetas, guarniciones y sistema de drenaje pluvial integrado.',
    inversion: '25,000,000',
    m2: '5,500',
    estatus: 'Completado'
  },
  { 
    id: 5,
    nombre: 'Caminos Artesanales con Empedrado', 
    ubicacion: 'Sierra de Guerrero', 
    sector: 'Infraestructura',
    tipo: 'infraestructura',
    año: 2023,
    imagen: '/images/proyectos/camino-artesanal-1.png',
    imagenes: ['/images/proyectos/camino-artesanal-1.png', '/images/proyectos/camino-artesanal-2.png'],
    descripcion: 'Construcción de caminos artesanales con empedrado tradicional. Mejora de conectividad en comunidades rurales respetando técnicas ancestrales y el entorno natural.',
    inversion: '18,000,000',
    m2: '12,000',
    estatus: 'Completado'
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
    descripcion: 'Rehabilitación estructural integral de puentes vehiculares. Reforzamiento de pilotes, trabes, losa y barandales con técnicas modernas de ingeniería civil.',
    inversion: '45,000,000',
    m2: '850',
    estatus: 'Completado'
  },
  { 
    id: 7,
    nombre: 'Rehabilitación de Caminos Rurales', 
    ubicacion: 'Costa Chica, Guerrero', 
    sector: 'Infraestructura',
    tipo: 'infraestructura',
    año: 2022,
    imagen: '/images/proyectos/camino-asfaltado-terminado.png',
    imagenes: ['/images/proyectos/camino-asfaltado-proceso.png', '/images/proyectos/camino-asfaltado-terminado.png'],
    descripcion: 'Rehabilitación y modernización de caminos rurales con carpeta asfáltica de alta durabilidad. Mejora de accesos y conectividad regional.',
    inversion: '32,000,000',
    m2: '15,000',
    estatus: 'Completado'
  },
  // PROYECTOS ANTERIORES
  { 
    id: 8,
    nombre: 'Edificación Costera Premium', 
    ubicacion: 'Costa del Pacífico, Guerrero', 
    sector: 'Residencial',
    tipo: 'residencial',
    año: 2024,
    imagen: '/images/projects/edificacion-costera.jpg',
    imagenes: ['/images/projects/edificacion-costera.jpg'],
    descripcion: 'Desarrollo arquitectónico moderno con acabados de lujo frente al mar. Diseño tropical contemporáneo con amenidades premium.',
    inversion: '45,000,000',
    m2: '12,500',
    estatus: 'Completado'
  },
  { 
    id: 9,
    nombre: 'Área Recreativa Resort', 
    ubicacion: 'Ixtapa-Zihuatanejo, Guerrero', 
    sector: 'Recreativo',
    tipo: 'deportivo',
    año: 2024,
    imagen: '/images/projects/area-recreativa.jpg',
    imagenes: ['/images/projects/area-recreativa.jpg'],
    descripcion: 'Instalación de canchas y áreas de esparcimiento en resort costero con vista panorámica al océano Pacífico.',
    inversion: '28,000,000',
    m2: '8,000',
    estatus: 'Completado'
  },
  { 
    id: 10,
    nombre: 'Red Hidráulica Regional', 
    ubicacion: 'Sierra de Guerrero', 
    sector: 'Infraestructura',
    tipo: 'infraestructura',
    año: 2024,
    imagen: '/images/projects/tuberia-hdpe.jpg',
    imagenes: ['/images/projects/tuberia-hdpe.jpg'],
    descripcion: 'Sistema de distribución de agua potable con tubería HDPE para comunidades rurales de difícil acceso.',
    inversion: '35,000,000',
    m2: '15,000',
    estatus: 'Completado'
  },
  { 
    id: 11,
    nombre: 'Sistema de Drenaje Urbano', 
    ubicacion: 'Chilpancingo, Guerrero', 
    sector: 'Infraestructura',
    tipo: 'infraestructura',
    año: 2023,
    imagen: '/images/projects/instalacion-drenaje.jpg',
    imagenes: ['/images/projects/instalacion-drenaje.jpg'],
    descripcion: 'Instalación de colectores pluviales de alta capacidad para prevención de inundaciones en zona urbana.',
    inversion: '65,000,000',
    m2: '25,000',
    estatus: 'Completado'
  },
  { 
    id: 12,
    nombre: 'Red de Alcantarillado', 
    ubicacion: 'Región Montaña, Guerrero', 
    sector: 'Infraestructura',
    tipo: 'infraestructura',
    año: 2023,
    imagen: '/images/projects/drenaje-pluvial.jpg',
    imagenes: ['/images/projects/drenaje-pluvial.jpg'],
    descripcion: 'Construcción de registros y red de alcantarillado con técnicas artesanales y materiales de primera calidad.',
    inversion: '42,000,000',
    m2: '18,000',
    estatus: 'Completado'
  },
  { 
    id: 13,
    nombre: 'Sistema de Válvulas y Conexiones', 
    ubicacion: 'Costa Grande, Guerrero', 
    sector: 'Infraestructura',
    tipo: 'infraestructura',
    año: 2023,
    imagen: '/images/projects/valvula-agua.jpg',
    imagenes: ['/images/projects/valvula-agua.jpg'],
    descripcion: 'Sistema de válvulas y conexiones para red de agua potable con tecnología de vanguardia.',
    inversion: '28,000,000',
    m2: '12,000',
    estatus: 'Completado'
  },
  { 
    id: 14,
    nombre: 'Línea de Conducción de Agua', 
    ubicacion: 'Zona Rural, Guerrero', 
    sector: 'Infraestructura',
    tipo: 'infraestructura',
    año: 2022,
    imagen: '/images/projects/tuberia-rural.jpg',
    imagenes: ['/images/projects/tuberia-rural.jpg'],
    descripcion: 'Instalación de línea de conducción de agua en terreno montañoso con supervisión técnica especializada.',
    inversion: '52,000,000',
    m2: '20,000',
    estatus: 'Completado'
  },
  { 
    id: 15,
    nombre: 'Instalación de Servicios Básicos', 
    ubicacion: 'Comunidades Rurales, Guerrero', 
    sector: 'Infraestructura',
    tipo: 'infraestructura',
    año: 2022,
    imagen: '/images/projects/instalacion-pvc.jpg',
    imagenes: ['/images/projects/instalacion-pvc.jpg'],
    descripcion: 'Trabajos de instalación de tuberías PVC para servicios básicos en zonas de desarrollo comunitario.',
    inversion: '18,000,000',
    m2: '8,500',
    estatus: 'Completado'
  },
]

const categorias = [
  { id: 'todos', nombre: 'Todos', count: todosProyectos.length },
  { id: 'infraestructura', nombre: 'Infraestructura', count: todosProyectos.filter(p => p.tipo === 'infraestructura').length },
  { id: 'residencial', nombre: 'Residencial', count: todosProyectos.filter(p => p.tipo === 'residencial').length },
  { id: 'educativo', nombre: 'Educativo', count: todosProyectos.filter(p => p.tipo === 'educativo').length },
  { id: 'deportivo', nombre: 'Deportivo', count: todosProyectos.filter(p => p.tipo === 'deportivo').length },
]

// Componente Lightbox
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
    <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4" onClick={onClose}>
      <div className="relative max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="flex justify-between items-center mb-4 text-white">
          <div>
            <h3 className="text-xl font-bold">{projectName}</h3>
            <span className="text-sm text-white/60">{currentIndex + 1} de {images.length} imágenes</span>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Main Image */}
        <div className="relative aspect-video bg-costa-dark rounded-xl overflow-hidden">
          <Image
            src={images[currentIndex]}
            alt={`${projectName} - Imagen ${currentIndex + 1}`}
            fill
            className="object-contain"
          />
        </div>

        {/* Navigation */}
        {images.length > 1 && (
          <>
            <button 
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-costa-gold/90 hover:bg-costa-gold flex items-center justify-center shadow-xl transition"
            >
              <svg className="w-7 h-7 text-costa-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-costa-gold/90 hover:bg-costa-gold flex items-center justify-center shadow-xl transition"
            >
              <svg className="w-7 h-7 text-costa-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}

        {/* Thumbnails */}
        {images.length > 1 && (
          <div className="flex gap-3 mt-4 justify-center flex-wrap">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`relative w-24 h-16 rounded-lg overflow-hidden transition ${
                  idx === currentIndex ? 'ring-3 ring-costa-gold scale-105' : 'opacity-60 hover:opacity-100'
                }`}
              >
                <Image src={img} alt={`Miniatura ${idx + 1}`} fill className="object-cover" />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default function ProyectosPage() {
  const [filtro, setFiltro] = useState('todos')
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxImages, setLightboxImages] = useState<string[]>([])
  const [lightboxIndex, setLightboxIndex] = useState(0)
  const [lightboxProject, setLightboxProject] = useState('')

  const proyectosFiltrados = filtro === 'todos' 
    ? todosProyectos 
    : todosProyectos.filter(p => p.tipo === filtro)

  const openLightbox = (images: string[], index: number, projectName: string) => {
    setLightboxImages(images)
    setLightboxIndex(index)
    setLightboxProject(projectName)
    setLightboxOpen(true)
  }

  return (
    <div className="min-h-screen bg-costa-light">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-costa-secondary/95 backdrop-blur-md border-b border-white/10">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-costa-gold flex items-center justify-center">
              <span className="text-costa-secondary font-black text-xl">CG</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-bold text-white text-xl">COSTA G</span>
              <span className="block text-[10px] text-costa-gold">Constructora & Inmobiliaria</span>
            </div>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-white/70 hover:text-white text-sm font-medium">INICIO</Link>
            <Link href="/servicios" className="text-white/70 hover:text-white text-sm font-medium">SERVICIOS</Link>
            <Link href="/proyectos" className="text-white text-sm font-medium">PROYECTOS</Link>
            <Link href="/materiales" className="text-white/70 hover:text-white text-sm font-medium">MATERIALES</Link>
            <Link href="/contacto" className="text-white/70 hover:text-white text-sm font-medium">CONTACTO</Link>
          </div>
          <Link href="/contacto">
            <button className="bg-costa-gold text-costa-secondary px-6 py-2.5 rounded font-bold text-sm">
              COTIZAR
            </button>
          </Link>
        </nav>
      </header>

      {/* Hero */}
      <section className="pt-24 relative h-[500px]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-costa-secondary/95 via-costa-secondary/80 to-costa-secondary/50" />
        
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <span className="inline-block px-5 py-2 rounded-full bg-costa-gold/20 text-costa-gold text-sm font-bold mb-6 tracking-wider">
              PORTAFOLIO DE PROYECTOS
            </span>
            <h1 className="text-5xl lg:text-7xl font-black text-white mb-6">
              Proyectos <span className="text-costa-gold">Realizados</span>
            </h1>
            <p className="text-xl text-white/70 max-w-2xl">
              Más de 500 proyectos completados en 30+ años. Infraestructura, edificación, caminos y más. 
              Cada proyecto es un testimonio de nuestra excelencia.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-10 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-black text-costa-gold">500+</p>
              <p className="text-gray-500 text-sm">Proyectos</p>
            </div>
            <div>
              <p className="text-4xl font-black text-costa-secondary">30+</p>
              <p className="text-gray-500 text-sm">Años</p>
            </div>
            <div>
              <p className="text-4xl font-black text-costa-gold">85</p>
              <p className="text-gray-500 text-sm">Municipios</p>
            </div>
            <div>
              <p className="text-4xl font-black text-costa-secondary">100%</p>
              <p className="text-gray-500 text-sm">Satisfacción</p>
            </div>
          </div>
        </div>
      </section>

      {/* Filtros */}
      <section className="py-8 bg-white sticky top-[72px] z-40 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-3 justify-center">
            {categorias.map(cat => (
              <button
                key={cat.id}
                onClick={() => setFiltro(cat.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all flex items-center gap-2 ${
                  filtro === cat.id
                    ? 'bg-costa-gold text-costa-secondary shadow-lg shadow-costa-gold/30'
                    : 'bg-gray-100 text-costa-secondary hover:bg-costa-gold/20'
                }`}
              >
                {cat.nombre}
                <span className={`text-xs px-2 py-0.5 rounded-full ${
                  filtro === cat.id ? 'bg-costa-secondary/20' : 'bg-gray-200'
                }`}>
                  {cat.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid de Proyectos - Masónico */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-gray-500 mb-10">
            Mostrando <strong className="text-costa-secondary">{proyectosFiltrados.length}</strong> proyectos
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {proyectosFiltrados.map((proyecto, index) => (
              <div 
                key={proyecto.id} 
                className={`group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer ${
                  index === 0 || index === 5 ? 'md:col-span-2' : ''
                }`}
                onClick={() => openLightbox(proyecto.imagenes, 0, proyecto.nombre)}
              >
                {/* Imagen */}
                <div className={`relative overflow-hidden ${
                  index === 0 || index === 5 ? 'h-80' : 'h-64'
                }`}>
                  <Image
                    src={proyecto.imagen}
                    alt={proyecto.nombre}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    <span className="px-3 py-1.5 rounded-full bg-costa-gold text-costa-secondary text-xs font-bold">
                      {proyecto.año}
                    </span>
                    <span className="px-3 py-1.5 rounded-full bg-white/20 backdrop-blur text-white text-xs font-bold">
                      {proyecto.sector}
                    </span>
                    <span className="px-3 py-1.5 rounded-full bg-green-500/80 text-white text-xs font-bold">
                      {proyecto.estatus}
                    </span>
                  </div>

                  {/* Gallery indicator */}
                  {proyecto.imagenes.length > 1 && (
                    <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur text-white text-xs font-bold flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {proyecto.imagenes.length}
                    </div>
                  )}
                  
                  {/* Title on image */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className={`font-bold text-white mb-2 ${
                      index === 0 || index === 5 ? 'text-2xl' : 'text-xl'
                    }`}>
                      {proyecto.nombre}
                    </h3>
                    <p className="text-white/70 text-sm flex items-center gap-1">
                      📍 {proyecto.ubicacion}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {proyecto.descripcion}
                  </p>
                  
                  {/* Métricas */}
                  <div className="grid grid-cols-2 gap-4 py-4 border-t border-gray-100">
                    <div>
                      <p className="text-xs text-gray-400">Inversión</p>
                      <p className="font-bold text-costa-secondary">${proyecto.inversion}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">Área</p>
                      <p className="font-bold text-costa-secondary">{proyecto.m2} m²</p>
                    </div>
                  </div>

                  {/* View Button */}
                  <button className="w-full mt-4 bg-costa-secondary text-white py-3 rounded-lg font-bold hover:bg-costa-dark transition-colors flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    Ver Galería
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-costa-gold">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-black text-costa-secondary mb-6">
            ¿Quieres un Proyecto Como Estos?
          </h2>
          <p className="text-costa-secondary/80 mb-10 text-lg">
            Únete a nuestros +500 clientes satisfechos. Solicita una consulta gratuita hoy mismo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacto">
              <button className="bg-costa-secondary text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-costa-dark transition-all">
                INICIAR MI PROYECTO
              </button>
            </Link>
            <a href="https://wa.me/527472735934" target="_blank" rel="noopener noreferrer">
              <button className="bg-white text-costa-secondary px-10 py-5 rounded-xl font-bold text-lg hover:shadow-xl transition-all flex items-center justify-center gap-2">
                💬 WHATSAPP
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-costa-dark text-white py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-white/50">© {new Date().getFullYear()} COSTA G - Constructora e Inmobiliaria. Todos los derechos reservados.</p>
        </div>
      </footer>

      {/* WhatsApp */}
      <a href="https://wa.me/527472735934" target="_blank" rel="noopener noreferrer" className="whatsapp-btn animate-pulse-glow">
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
