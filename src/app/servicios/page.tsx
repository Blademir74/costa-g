'use client'

import Link from 'next/link'
import Image from 'next/image'

const servicios = [
  {
    id: 'residencial',
    titulo: 'Construcción Residencial',
    icono: '🏠',
    descripcion: 'Diseñamos y construimos tu hogar ideal. Desde casas unifamiliares hasta desarrollos habitacionales completos.',
    caracteristicas: [
      'Casas unifamiliares y multifamiliares',
      'Desarrollos habitacionales',
      'Departamentos de lujo',
      'Residencias personalizadas',
      'Ampliaciones y remodelaciones',
    ],
    imagen: '/images/projects/edificacion-costera.jpg'
  },
  {
    id: 'comercial',
    titulo: 'Construcción Comercial',
    icono: '🏢',
    descripcion: 'Espacios comerciales que impulsan tu negocio. Plazas, oficinas y locales diseñados para el éxito.',
    caracteristicas: [
      'Plazas comerciales',
      'Edificios de oficinas',
      'Locales comerciales',
      'Centros comerciales',
      'Naves industriales ligeras',
    ],
    imagen: '/images/projects/area-recreativa.jpg'
  },
  {
    id: 'industrial',
    titulo: 'Construcción Industrial',
    icono: '🏭',
    descripcion: 'Infraestructura industrial de gran escala. Naves, bodegas y plantas de producción.',
    caracteristicas: [
      'Naves industriales',
      'Bodegas y almacenes',
      'Plantas de producción',
      'Parques industriales',
      'Instalaciones especializadas',
    ],
    imagen: '/images/projects/instalacion-drenaje.jpg'
  },
  {
    id: 'infraestructura',
    titulo: 'Infraestructura',
    icono: '🌉',
    descripcion: 'Obras civiles que conectan y desarrollan comunidades. Puentes, caminos, drenaje y más.',
    caracteristicas: [
      'Puentes vehiculares',
      'Caminos y carreteras',
      'Sistemas de drenaje',
      'Redes hidráulicas',
      'Obras de urbanización',
    ],
    imagen: '/images/projects/tuberia-hdpe.jpg'
  },
  {
    id: 'diseno',
    titulo: 'Diseño Arquitectónico',
    icono: '📐',
    descripcion: 'Diseño profesional que transforma tus ideas en planos ejecutivos listos para construir.',
    caracteristicas: [
      'Diseño arquitectónico',
      'Planos ejecutivos',
      'Renders y visualización 3D',
      'Diseño de interiores',
      'Asesoría en diseño',
    ],
    imagen: '/images/projects/valvula-agua.jpg'
  },
  {
    id: 'consultoria',
    titulo: 'Consultoría',
    icono: '📋',
    descripcion: 'Asesoría técnica especializada para optimizar tus proyectos y garantizar el éxito.',
    caracteristicas: [
      'Estudios de factibilidad',
      'Supervisión de obra',
      'Gestión de permisos',
      'Control de calidad',
      'Asesoría legal y técnica',
    ],
    imagen: '/images/projects/drenaje-pluvial.jpg'
  },
]

const procesoTrabajo = [
  { numero: '01', titulo: 'Consulta Inicial', descripcion: 'Escuchamos tus necesidades y objetivos del proyecto.' },
  { numero: '02', titulo: 'Diseño y Planeación', descripcion: 'Desarrollamos el diseño y plan de trabajo detallado.' },
  { numero: '03', titulo: 'Cotización', descripcion: 'Presentamos presupuesto transparente y competitivo.' },
  { numero: '04', titulo: 'Ejecución', descripcion: 'Construimos con los más altos estándares de calidad.' },
  { numero: '05', titulo: 'Entrega', descripcion: 'Entregamos tu proyecto terminado con garantía total.' },
]

export default function ServiciosPage() {
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
            <Link href="/servicios" className="text-white text-sm font-medium">SERVICIOS</Link>
            <Link href="/proyectos" className="text-white/70 hover:text-white text-sm font-medium">PROYECTOS</Link>
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
            backgroundImage: `url('https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
          }}
        />
        <div className="absolute inset-0 bg-costa-secondary/80" />
        
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <span className="inline-block px-4 py-1.5 rounded-full bg-costa-gold/20 text-costa-gold text-sm font-semibold mb-6">
              Nuestros Servicios
            </span>
            <h1 className="text-4xl lg:text-6xl font-black text-white mb-6">
              Servicios de <span className="text-costa-gold">Construcción</span>
            </h1>
            <p className="text-xl text-white/70 max-w-2xl">
              Soluciones integrales de construcción para proyectos residenciales, comerciales e industriales con los más altos estándares de calidad.
            </p>
          </div>
        </div>
      </section>

      {/* Grid de Servicios */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-black text-costa-secondary mb-4">
              ¿Qué Podemos Hacer Por Ti?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ofrecemos una amplia gama de servicios de construcción adaptados a tus necesidades específicas.
            </p>
          </div>

          <div className="space-y-16">
            {servicios.map((servicio, index) => (
              <div 
                key={servicio.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Imagen */}
                <div className={`relative h-80 lg:h-96 rounded-2xl overflow-hidden shadow-xl ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <Image
                    src={servicio.imagen}
                    alt={servicio.titulo}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-costa-secondary/60 to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <span className="text-6xl">{servicio.icono}</span>
                  </div>
                </div>

                {/* Contenido */}
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <span className="inline-block px-3 py-1 rounded bg-costa-gold/10 text-costa-gold text-sm font-semibold mb-4">
                    Servicio
                  </span>
                  <h3 className="text-3xl font-black text-costa-secondary mb-4">
                    {servicio.titulo}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {servicio.descripcion}
                  </p>
                  
                  {/* Características */}
                  <ul className="space-y-3 mb-8">
                    {servicio.caracteristicas.map((car, i) => (
                      <li key={i} className="flex items-center gap-3 text-gray-700">
                        <span className="w-6 h-6 rounded-full bg-costa-gold/20 flex items-center justify-center">
                          <svg className="w-4 h-4 text-costa-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        {car}
                      </li>
                    ))}
                  </ul>

                  <Link href="/contacto">
                    <button className="bg-costa-gold text-costa-secondary px-8 py-3 rounded font-bold hover:shadow-lg hover:shadow-costa-gold/30 transition-all">
                      SOLICITAR COTIZACIÓN
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proceso de Trabajo */}
      <section className="py-24 bg-costa-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-costa-gold/20 text-costa-gold text-sm font-semibold mb-4">
              Metodología
            </span>
            <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">
              Nuestro Proceso de Trabajo
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Un proceso estructurado que garantiza resultados excepcionales en cada proyecto.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {procesoTrabajo.map((paso, index) => (
              <div key={index} className="text-center relative">
                {/* Línea conectora */}
                {index < procesoTrabajo.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-costa-gold/30" />
                )}
                
                {/* Número */}
                <div className="w-16 h-16 rounded-full bg-costa-gold text-costa-secondary font-black text-xl flex items-center justify-center mx-auto mb-4 relative z-10">
                  {paso.numero}
                </div>
                
                <h3 className="font-bold text-white mb-2">{paso.titulo}</h3>
                <p className="text-white/60 text-sm">{paso.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-costa-gold">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-black text-costa-secondary mb-6">
            ¿Listo para Comenzar tu Proyecto?
          </h2>
          <p className="text-costa-secondary/80 mb-10 text-lg">
            Contáctanos hoy para una consulta gratuita y descubre cómo podemos ayudarte a hacer realidad tu proyecto.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacto">
              <button className="bg-costa-secondary text-white px-10 py-4 rounded font-bold text-lg hover:bg-costa-dark transition-all">
                SOLICITAR CONSULTA
              </button>
            </Link>
            <a href="https://wa.me/527472735934" target="_blank" rel="noopener noreferrer">
              <button className="bg-white text-costa-secondary px-10 py-4 rounded font-bold text-lg hover:shadow-lg transition-all">
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
      <a href="https://wa.me/527472735934?text=Hola,%20me%20interesan%20sus%20servicios" target="_blank" rel="noopener noreferrer" className="whatsapp-btn animate-pulse-glow">
        <svg viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      </a>
    </div>
  )
}
