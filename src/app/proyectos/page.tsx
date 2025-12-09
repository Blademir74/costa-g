'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

const proyectos = [
  { 
    id: 1,
    nombre: 'Edificación Costera Premium', 
    ubicacion: 'Costa del Pacífico, Guerrero', 
    sector: 'Residencial',
    tipo: 'residencial',
    año: 2024,
    imagen: '/images/projects/edificacion-costera.jpg',
    descripcion: 'Desarrollo arquitectónico moderno con acabados de lujo frente al mar. Diseño tropical contemporáneo con amenidades premium.',
    inversion: '45,000,000',
    m2: '12,500',
    estatus: 'Completado'
  },
  { 
    id: 2,
    nombre: 'Área Recreativa Resort', 
    ubicacion: 'Ixtapa-Zihuatanejo, Guerrero', 
    sector: 'Recreativo',
    tipo: 'comercial',
    año: 2024,
    imagen: '/images/projects/area-recreativa.jpg',
    descripcion: 'Instalación de canchas y áreas de esparcimiento en resort costero con vista panorámica al océano Pacífico.',
    inversion: '28,000,000',
    m2: '8,000',
    estatus: 'Completado'
  },
  { 
    id: 3,
    nombre: 'Red Hidráulica Rural', 
    ubicacion: 'Sierra de Guerrero', 
    sector: 'Infraestructura',
    tipo: 'infraestructura',
    año: 2024,
    imagen: '/images/projects/tuberia-hdpe.jpg',
    descripcion: 'Sistema de distribución de agua potable con tubería HDPE para comunidades rurales de difícil acceso.',
    inversion: '35,000,000',
    m2: '15,000',
    estatus: 'Completado'
  },
  { 
    id: 4,
    nombre: 'Sistema de Drenaje Urbano', 
    ubicacion: 'Chilpancingo, Guerrero', 
    sector: 'Obra Civil',
    tipo: 'infraestructura',
    año: 2023,
    imagen: '/images/projects/instalacion-drenaje.jpg',
    descripcion: 'Instalación de colectores pluviales de alta capacidad para prevención de inundaciones en zona urbana.',
    inversion: '65,000,000',
    m2: '25,000',
    estatus: 'Completado'
  },
  { 
    id: 5,
    nombre: 'Infraestructura Hidráulica', 
    ubicacion: 'Región Montaña, Guerrero', 
    sector: 'Infraestructura',
    tipo: 'infraestructura',
    año: 2023,
    imagen: '/images/projects/drenaje-pluvial.jpg',
    descripcion: 'Construcción de registros y red de alcantarillado con técnicas artesanales y materiales de primera.',
    inversion: '42,000,000',
    m2: '18,000',
    estatus: 'Completado'
  },
  { 
    id: 6,
    nombre: 'Red de Agua Potable', 
    ubicacion: 'Costa Grande, Guerrero', 
    sector: 'Infraestructura',
    tipo: 'infraestructura',
    año: 2023,
    imagen: '/images/projects/valvula-agua.jpg',
    descripcion: 'Sistema de válvulas y conexiones para red de agua potable con tecnología de vanguardia.',
    inversion: '28,000,000',
    m2: '12,000',
    estatus: 'Completado'
  },
  { 
    id: 7,
    nombre: 'Línea de Conducción', 
    ubicacion: 'Zona Rural, Guerrero', 
    sector: 'Infraestructura',
    tipo: 'infraestructura',
    año: 2022,
    imagen: '/images/projects/tuberia-rural.jpg',
    descripcion: 'Instalación de línea de conducción de agua en terreno montañoso con supervisión técnica especializada.',
    inversion: '52,000,000',
    m2: '20,000',
    estatus: 'Completado'
  },
  { 
    id: 8,
    nombre: 'Instalación de Servicios', 
    ubicacion: 'Comunidades Rurales, Guerrero', 
    sector: 'Obra Civil',
    tipo: 'infraestructura',
    año: 2022,
    imagen: '/images/projects/instalacion-pvc.jpg',
    descripcion: 'Trabajos de instalación de tuberías PVC para servicios básicos en zonas de desarrollo comunitario.',
    inversion: '18,000,000',
    m2: '8,500',
    estatus: 'Completado'
  },
]

const tipos = [
  { id: 'todos', nombre: 'Todos' },
  { id: 'residencial', nombre: 'Residencial' },
  { id: 'comercial', nombre: 'Comercial' },
  { id: 'infraestructura', nombre: 'Infraestructura' },
]

export default function ProyectosPage() {
  const [filtro, setFiltro] = useState('todos')

  const proyectosFiltrados = filtro === 'todos' 
    ? proyectos 
    : proyectos.filter(p => p.tipo === filtro)

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
            backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
          }}
        />
        <div className="absolute inset-0 bg-costa-secondary/80" />
        
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <span className="inline-block px-4 py-1.5 rounded-full bg-costa-gold/20 text-costa-gold text-sm font-semibold mb-6">
              Portafolio
            </span>
            <h1 className="text-4xl lg:text-6xl font-black text-white mb-6">
              Proyectos <span className="text-costa-gold">Realizados</span>
            </h1>
            <p className="text-xl text-white/70 max-w-2xl">
              +500 proyectos completados exitosamente en más de 30 años. Conoce nuestra trayectoria nacional e internacional.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-black text-costa-gold">500+</p>
              <p className="text-gray-500 text-sm">Proyectos Completados</p>
            </div>
            <div>
              <p className="text-4xl font-black text-costa-secondary">30+</p>
              <p className="text-gray-500 text-sm">Años de Experiencia</p>
            </div>
            <div>
              <p className="text-4xl font-black text-costa-gold">15+</p>
              <p className="text-gray-500 text-sm">Países</p>
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
            {tipos.map(tipo => (
              <button
                key={tipo.id}
                onClick={() => setFiltro(tipo.id)}
                className={`px-6 py-2.5 rounded-full font-semibold transition-all ${
                  filtro === tipo.id
                    ? 'bg-costa-gold text-costa-secondary shadow-lg'
                    : 'bg-gray-100 text-costa-secondary hover:bg-costa-gold/10'
                }`}
              >
                {tipo.nombre}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid de Proyectos */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-gray-500 mb-8">
            Mostrando <strong className="text-costa-secondary">{proyectosFiltrados.length}</strong> proyectos
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {proyectosFiltrados.map(proyecto => (
              <div key={proyecto.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
                {/* Imagen */}
                <div className="h-64 relative overflow-hidden">
                  <Image
                    src={proyecto.imagen}
                    alt={proyecto.nombre}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-3 py-1 rounded-full bg-costa-gold text-costa-secondary text-xs font-bold">
                      {proyecto.año}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-green-500 text-white text-xs font-bold">
                      {proyecto.estatus}
                    </span>
                  </div>
                  
                  {/* Título en imagen */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block bg-white/20 backdrop-blur text-white text-xs px-2 py-1 rounded mb-2">
                      {proyecto.sector}
                    </span>
                    <h3 className="text-xl font-bold text-white">{proyecto.nombre}</h3>
                  </div>
                </div>

                {/* Contenido */}
                <div className="p-6">
                  <p className="text-gray-500 text-sm mb-4 flex items-center gap-1">
                    📍 {proyecto.ubicacion}
                  </p>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {proyecto.descripcion}
                  </p>

                  {/* Métricas */}
                  <div className="grid grid-cols-2 gap-4 py-4 border-t border-b border-gray-100 mb-4">
                    <div>
                      <p className="text-xs text-gray-500">Inversión</p>
                      <p className="font-bold text-costa-secondary">${proyecto.inversion}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Área Construida</p>
                      <p className="font-bold text-costa-secondary">{proyecto.m2} m²</p>
                    </div>
                  </div>

                  {/* Botón */}
                  <button className="w-full bg-costa-secondary text-white py-3 rounded font-bold hover:bg-costa-dark transition-colors">
                    Ver Detalles del Proyecto
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
          <h2 className="text-3xl lg:text-4xl font-black text-costa-secondary mb-6">
            ¿Tienes un Proyecto en Mente?
          </h2>
          <p className="text-costa-secondary/80 mb-10 text-lg">
            Únete a nuestros +500 clientes satisfechos. Solicita una consulta gratuita hoy mismo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacto">
              <button className="bg-costa-secondary text-white px-10 py-4 rounded font-bold text-lg hover:bg-costa-dark transition-all">
                INICIAR MI PROYECTO
              </button>
            </Link>
            <a href="https://wa.me/527472735934" target="_blank" rel="noopener noreferrer">
              <button className="bg-white text-costa-secondary px-10 py-4 rounded font-bold text-lg hover:shadow-lg transition-all">
                💬 CONTACTAR
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
      <a href="https://wa.me/527472735934?text=Hola,%20vi%20sus%20proyectos%20y%20me%20gustaría%20cotizar" target="_blank" rel="noopener noreferrer" className="whatsapp-btn animate-pulse-glow">
        <svg viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      </a>
    </div>
  )
}
