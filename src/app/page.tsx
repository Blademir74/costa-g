import Link from 'next/link'
import Image from 'next/image'

const projects = [
  { 
    title: 'Edificación Costera Premium', 
    location: 'Costa del Pacífico', 
    year: '2024', 
    category: 'Residencial',
    image: '/images/projects/edificacion-costera.jpg',
    desc: 'Desarrollo arquitectónico moderno con acabados de lujo frente al mar.'
  },
  { 
    title: 'Área Recreativa Playa', 
    location: 'Ixtapa-Zihuatanejo', 
    year: '2024', 
    category: 'Recreativo',
    image: '/images/projects/area-recreativa.jpg',
    desc: 'Instalación de canchas y áreas de esparcimiento en resort costero.'
  },
  { 
    title: 'Red Hidráulica Rural', 
    location: 'Sierra de Guerrero', 
    year: '2024', 
    category: 'Infraestructura',
    image: '/images/projects/tuberia-hdpe.jpg',
    desc: 'Sistema de distribución de agua potable para comunidades rurales.'
  },
  { 
    title: 'Sistema de Drenaje Urbano', 
    location: 'Chilpancingo', 
    year: '2023', 
    category: 'Obra Civil',
    image: '/images/projects/instalacion-drenaje.jpg',
    desc: 'Instalación de colectores pluviales de alta capacidad.'
  },
  { 
    title: 'Infraestructura Hidráulica', 
    location: 'Región Montaña', 
    year: '2023', 
    category: 'Infraestructura',
    image: '/images/projects/drenaje-pluvial.jpg',
    desc: 'Construcción de registros y red de alcantarillado.'
  },
  { 
    title: 'Instalación de Servicios', 
    location: 'Costa Grande', 
    year: '2023', 
    category: 'Obra Civil',
    image: '/images/projects/valvula-agua.jpg',
    desc: 'Sistema de válvulas y conexiones para red de agua potable.'
  },
]

const services = [
  { icon: '🏗️', title: 'Construcción', desc: 'Proyectos residenciales, comerciales e industriales de alta calidad.' },
  { icon: '🏢', title: 'Inmobiliaria', desc: 'Desarrollo y comercialización de proyectos inmobiliarios.' },
  { icon: '🌍', title: 'Internacional', desc: 'Consultoría y proyectos a nivel internacional.' },
  { icon: '📐', title: 'Diseño', desc: 'Diseño arquitectónico y planos ejecutivos profesionales.' },
  { icon: '🔧', title: 'Infraestructura', desc: 'Obras civiles, hidráulicas y de servicios públicos.' },
  { icon: '📋', title: 'Consultoría', desc: 'Asesoría técnica especializada y gestión de proyectos.' },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="glass-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-400 to-sky-600 flex items-center justify-center shadow-lg group-hover:shadow-glow-sky transition-all">
                <span className="text-white font-bold text-lg">CG</span>
              </div>
              <div className="hidden sm:block">
                <span className="font-bold text-white text-lg tracking-tight">COSTA G</span>
                <span className="block text-[10px] text-sky-300 -mt-1 tracking-widest uppercase">Constructora & Inmobiliaria</span>
              </div>
            </Link>
            
            <nav className="hidden md:flex items-center gap-8">
              {['Inicio', 'Nosotros', 'Servicios', 'Proyectos', 'Blog'].map((item) => (
                <Link 
                  key={item} 
                  href={item === 'Inicio' ? '/' : `/${item.toLowerCase()}`}
                  className="text-white/80 hover:text-white text-sm font-medium transition-colors relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-sky-400 to-sky-500 group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
              <Link 
                href="/contacto" 
                className="px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-white text-sm font-semibold hover:shadow-glow-gold transition-all hover:scale-105"
              >
                Cotizar Ahora
              </Link>
            </nav>

            <button className="md:hidden p-2 text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section - Con imagen de fondo impactante */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image from Unsplash */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
          }}
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/60" />
        {/* Pattern overlay */}
        <div className="absolute inset-0 pattern-grid opacity-20" />
        
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-sky-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-32 relative z-10">
          <div className="max-w-4xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm text-white/90 font-medium">+30 Años de Experiencia • Nacional e Internacional</span>
            </div>

            {/* Main Title */}
            <div className="mb-6 animate-slide-up">
              <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black text-white leading-none tracking-tight">
                COSTA G
              </h1>
              <div className="flex flex-wrap items-center gap-3 mt-4">
                <span className="px-4 py-2 rounded-lg bg-sky-500/20 border border-sky-400/30 text-sky-300 font-semibold text-lg">
                  Constructora
                </span>
                <span className="text-white/50 text-2xl">&</span>
                <span className="px-4 py-2 rounded-lg bg-amber-500/20 border border-amber-400/30 text-amber-300 font-semibold text-lg">
                  Inmobiliaria
                </span>
              </div>
            </div>

            {/* Subtitle */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white/90 mb-6 animate-slide-up delay-100" style={{opacity: 0, animationFillMode: 'forwards'}}>
              Proyectos <span className="text-gradient-gold">Nacionales</span> e <span className="text-gradient-sky">Internacionales</span>
            </h2>

            {/* Description */}
            <p className="text-lg sm:text-xl text-white/70 mb-10 max-w-2xl leading-relaxed animate-slide-up delay-200" style={{opacity: 0, animationFillMode: 'forwards'}}>
              Desarrollamos proyectos de construcción <strong className="text-white">residenciales, comerciales e industriales</strong> con 
              los más altos estándares de calidad. Consultoría especializada a nivel nacional e internacional.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 mb-10 animate-slide-up delay-300" style={{opacity: 0, animationFillMode: 'forwards'}}>
              <div className="text-center">
                <span className="block text-4xl sm:text-5xl font-black text-amber-400">30+</span>
                <span className="text-sm text-white/60">Años de<br/>Experiencia</span>
              </div>
              <div className="w-px h-16 bg-white/20 hidden sm:block" />
              <div className="text-center">
                <span className="block text-4xl sm:text-5xl font-black text-sky-400">500+</span>
                <span className="text-sm text-white/60">Proyectos<br/>Completados</span>
              </div>
              <div className="w-px h-16 bg-white/20 hidden sm:block" />
              <div className="text-center">
                <span className="block text-4xl sm:text-5xl font-black text-green-400">100%</span>
                <span className="text-sm text-white/60">Garantía<br/>Total</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 animate-slide-up delay-400" style={{opacity: 0, animationFillMode: 'forwards'}}>
              <Link 
                href="/contacto" 
                className="group px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold text-lg hover:shadow-glow-gold transition-all hover:scale-105 flex items-center gap-2"
              >
                Solicitar Cotización
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link 
                href="/proyectos" 
                className="px-8 py-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold text-lg hover:bg-white/20 transition-all flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                Ver Proyectos
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
            <div className="w-1.5 h-3 rounded-full bg-white/50 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-sky-100 text-sky-600 text-sm font-semibold mb-4">
              Nuestros Servicios
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-800 mb-4">
              Soluciones <span className="text-gradient-sky">Integrales</span> de Construcción
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              Ofrecemos servicios completos de construcción e inmobiliaria a nivel nacional e internacional.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group p-8 rounded-3xl bg-gradient-to-br from-slate-50 to-white border border-slate-100 hover:border-sky-200 hover:shadow-xl transition-all duration-300 hover-lift"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-sky-100 to-sky-50 flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-sky-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-500 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/servicios" className="inline-flex items-center gap-2 text-sky-600 font-semibold hover:text-sky-700 transition-colors group">
              Ver todos los servicios
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 gradient-sky pattern-dots relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: '500+', label: 'Proyectos Completados', icon: '🏗️' },
              { value: '30+', label: 'Años de Experiencia', icon: '📅' },
              { value: '15+', label: 'Países Alcanzados', icon: '🌍' },
              { value: '100%', label: 'Clientes Satisfechos', icon: '⭐' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-4xl sm:text-5xl font-black text-white mb-2">{stat.value}</div>
                <div className="text-white/70 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section - Con imágenes reales */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-amber-100 text-amber-700 text-sm font-semibold mb-4">
                Portafolio
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-800">
                Proyectos <span className="text-gradient-gold">Destacados</span>
              </h2>
            </div>
            <Link href="/proyectos" className="text-sky-600 font-semibold hover:text-sky-700 flex items-center gap-2 group">
              Ver todos
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="group relative rounded-3xl overflow-hidden hover-lift cursor-pointer bg-white border border-slate-100"
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-sky-500/90 text-white text-xs font-semibold">
                      {project.category}
                    </span>
                  </div>
                  
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-sky-300 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-white/70">
                      <span className="flex items-center gap-1">📍 {project.location}</span>
                      <span>{project.year}</span>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-white">
                  <p className="text-sm text-slate-600">{project.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-sky-900 relative overflow-hidden">
        <div className="absolute inset-0 pattern-grid opacity-30" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6">
            ¿Tienes un proyecto <span className="text-gradient-gold">en mente</span>?
          </h2>
          <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
            Contáctanos hoy y recibe una consultoría gratuita. Trabajamos en proyectos nacionales e internacionales.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacto" className="px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold text-lg hover:shadow-glow-gold transition-all hover:scale-105">
              Solicitar Consultoría Gratis
            </Link>
            <a href="https://wa.me/527472735934?text=Hola,%20me%20interesa%20obtener%20información%20sobre%20sus%20servicios%20de%20construcción" target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-2xl bg-green-500 text-white font-bold text-lg hover:bg-green-600 transition-all hover:scale-105 flex items-center justify-center gap-2">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp Directo
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-400 to-sky-600 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">CG</span>
                </div>
                <div>
                  <span className="font-bold text-xl">COSTA G</span>
                  <span className="block text-xs text-sky-400">Constructora & Inmobiliaria</span>
                </div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Más de 30 años construyendo sueños. Proyectos residenciales, comerciales e industriales a nivel nacional e internacional.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-white">Navegación</h4>
              <ul className="space-y-2 text-slate-400">
                <li><Link href="/nosotros" className="hover:text-sky-400 transition-colors">Nosotros</Link></li>
                <li><Link href="/servicios" className="hover:text-sky-400 transition-colors">Servicios</Link></li>
                <li><Link href="/proyectos" className="hover:text-sky-400 transition-colors">Proyectos</Link></li>
                <li><Link href="/blog" className="hover:text-sky-400 transition-colors">Blog</Link></li>
                <li><Link href="/contacto" className="hover:text-sky-400 transition-colors">Contacto</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-white">Servicios</h4>
              <ul className="space-y-2 text-slate-400">
                <li><Link href="/servicios/construccion" className="hover:text-sky-400 transition-colors">Construcción</Link></li>
                <li><Link href="/servicios/remodelacion" className="hover:text-sky-400 transition-colors">Remodelación</Link></li>
                <li><Link href="/servicios/diseno" className="hover:text-sky-400 transition-colors">Diseño</Link></li>
                <li><Link href="/servicios/consultoria" className="hover:text-sky-400 transition-colors">Consultoría Internacional</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-white">Contacto</h4>
              <ul className="space-y-3 text-slate-400">
                <li className="flex items-start gap-3"><span className="text-sky-400">📞</span><span>747 273 5934</span></li>
                <li className="flex items-start gap-3"><span className="text-sky-400">✉️</span><span className="break-all">Inmob.costag@Hotmail.com</span></li>
                <li className="flex items-start gap-3"><span className="text-sky-400">📍</span><span>Chilpancingo, Guerrero, México</span></li>
              </ul>
              <div className="mt-4">
                <Link href="/admin" className="text-xs text-slate-500 hover:text-slate-400 transition-colors">Panel Admin</Link>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
            <p>© {new Date().getFullYear()} COSTA G - Constructora e Inmobiliaria. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a href="https://wa.me/527472735934?text=Hola,%20me%20interesa%20obtener%20información%20sobre%20sus%20servicios" target="_blank" rel="noopener noreferrer" className="whatsapp-btn animate-pulse-glow" aria-label="Contactar por WhatsApp">
        <svg viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      </a>
    </div>
  )
}
