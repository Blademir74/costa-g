import Link from 'next/link'
import Image from 'next/image'

const projects = [
  { 
    title: 'Edificación Costera Premium', 
    location: 'Costa del Pacífico', 
    year: '2024', 
    category: 'Residencial',
    image: '/images/projects/edificacion-costera.jpg',
    desc: 'Desarrollo arquitectónico moderno con acabados de lujo frente al mar. Diseño tropical contemporáneo con áreas verdes integradas.'
  },
  { 
    title: 'Área Recreativa Playa', 
    location: 'Ixtapa-Zihuatanejo', 
    year: '2024', 
    category: 'Recreativo',
    image: '/images/projects/area-recreativa.jpg',
    desc: 'Instalación de canchas y áreas de esparcimiento en resort costero con vista panorámica al océano.'
  },
  { 
    title: 'Red Hidráulica Rural', 
    location: 'Sierra de Guerrero', 
    year: '2024', 
    category: 'Infraestructura',
    image: '/images/projects/tuberia-hdpe.jpg',
    desc: 'Sistema de distribución de agua potable con tubería HDPE para comunidades rurales de difícil acceso.'
  },
  { 
    title: 'Sistema de Drenaje Urbano', 
    location: 'Chilpancingo', 
    year: '2023', 
    category: 'Obra Civil',
    image: '/images/projects/instalacion-drenaje.jpg',
    desc: 'Instalación de colectores pluviales de alta capacidad para prevención de inundaciones.'
  },
  { 
    title: 'Infraestructura Hidráulica', 
    location: 'Región Montaña', 
    year: '2023', 
    category: 'Infraestructura',
    image: '/images/projects/drenaje-pluvial.jpg',
    desc: 'Construcción de registros y red de alcantarillado con técnicas artesanales y materiales de primera.'
  },
  { 
    title: 'Red de Agua Potable', 
    location: 'Costa Grande', 
    year: '2023', 
    category: 'Obra Civil',
    image: '/images/projects/valvula-agua.jpg',
    desc: 'Sistema de válvulas y conexiones para red de agua potable con tecnología de vanguardia.'
  },
  { 
    title: 'Línea de Conducción', 
    location: 'Zona Rural', 
    year: '2022', 
    category: 'Infraestructura',
    image: '/images/projects/tuberia-rural.jpg',
    desc: 'Instalación de línea de conducción de agua en terreno montañoso con supervisión técnica especializada.'
  },
  { 
    title: 'Instalación de Servicios', 
    location: 'Comunidades Rurales', 
    year: '2022', 
    category: 'Obra Civil',
    image: '/images/projects/instalacion-pvc.jpg',
    desc: 'Trabajos de instalación de tuberías PVC para servicios básicos en zonas de desarrollo.'
  },
]

const categories = ['Todos', 'Residencial', 'Recreativo', 'Infraestructura', 'Obra Civil']

export default function ProyectosPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="glass-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-400 to-sky-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg">CG</span>
              </div>
              <div className="hidden sm:block">
                <span className="font-bold text-white text-lg">COSTA G</span>
                <span className="block text-[10px] text-sky-300 -mt-1">Constructora & Inmobiliaria</span>
              </div>
            </Link>
            <nav className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-white/70 hover:text-white text-sm font-medium">Inicio</Link>
              <Link href="/nosotros" className="text-white/70 hover:text-white text-sm font-medium">Nosotros</Link>
              <Link href="/servicios" className="text-white/70 hover:text-white text-sm font-medium">Servicios</Link>
              <Link href="/proyectos" className="text-white text-sm font-medium">Proyectos</Link>
              <Link href="/contacto" className="px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-white text-sm font-semibold">Cotizar</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-24 pb-16 gradient-hero pattern-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white/90 text-sm font-medium mb-6">
            Nuestro Portafolio
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
            Proyectos <span className="text-gradient-gold">Realizados</span>
          </h1>
          <p className="text-xl text-white/70 max-w-2xl">
            +500 proyectos completados exitosamente en más de 30 años. Conoce nuestra trayectoria nacional e internacional.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-black text-sky-500">500+</p>
              <p className="text-slate-500">Proyectos</p>
            </div>
            <div>
              <p className="text-4xl font-black text-amber-500">30+</p>
              <p className="text-slate-500">Años</p>
            </div>
            <div>
              <p className="text-4xl font-black text-green-500">15+</p>
              <p className="text-slate-500">Países</p>
            </div>
            <div>
              <p className="text-4xl font-black text-purple-500">100%</p>
              <p className="text-slate-500">Satisfacción</p>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white sticky top-16 z-40 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button 
                key={cat}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${cat === 'Todos' ? 'bg-sky-500 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-xl transition-all hover-lift">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="px-2 py-1 rounded-full bg-sky-500 text-white text-xs font-semibold">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3">
                    <span className="px-2 py-1 rounded-full bg-black/50 text-white text-xs font-medium">
                      {project.year}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-slate-800 mb-1 group-hover:text-sky-600 transition-colors line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-500 mb-2 flex items-center gap-1">
                    <span>📍</span> {project.location}
                  </p>
                  <p className="text-sm text-slate-600 line-clamp-2">
                    {project.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 gradient-sky">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-6">
            ¿Tienes un proyecto en mente?
          </h2>
          <p className="text-xl text-white/70 mb-8">
            Conviértelo en realidad con nosotros. Solicita tu consultoría gratuita.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacto" className="px-8 py-4 rounded-2xl bg-white text-sky-600 font-bold text-lg hover:shadow-xl transition-all">
              Solicitar Cotización
            </Link>
            <a href="https://wa.me/527472735934" target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-2xl bg-green-500 text-white font-bold text-lg hover:bg-green-600 transition-all flex items-center justify-center gap-2">
              💬 WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-slate-400">© {new Date().getFullYear()} COSTA G - Constructora e Inmobiliaria. Todos los derechos reservados.</p>
        </div>
      </footer>

      {/* WhatsApp */}
      <a href="https://wa.me/527472735934?text=Hola,%20vi%20sus%20proyectos%20y%20me%20gustaría%20cotizar" target="_blank" rel="noopener noreferrer" className="whatsapp-btn animate-pulse-glow">
        <svg viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      </a>
    </div>
  )
}
