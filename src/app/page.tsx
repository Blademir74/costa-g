'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

const lineasNegocio = [
  {
    id: 'construccion',
    icon: '🏗️',
    titulo: 'CONSTRUCCIÓN',
    descripcion: 'Servicios integrales: residencial, comercial, industrial. Diseño, supervisión y ejecución de proyectos de clase mundial.',
    link: '/servicios',
    imagen: '/images/projects/edificacion-costera.jpg'
  },
  {
    id: 'inmobiliaria',
    icon: '🏢',
    titulo: 'INMOBILIARIA',
    descripcion: 'Venta y renta de propiedades premium. Departamentos, casas, locales comerciales. Desarrollos en ubicaciones estratégicas.',
    link: '/proyectos',
    imagen: '/images/projects/area-recreativa.jpg'
  },
  {
    id: 'materiales',
    icon: '⚙️',
    titulo: 'MATERIALES',
    descripcion: 'Distribuidora de materiales de construcción de calidad. Cemento, acero, blocks, acabados. Venta al por mayor y menor.',
    link: '/materiales',
    imagen: '/images/projects/instalacion-drenaje.jpg'
  },
]

const proyectosDestacados = [
  { 
    id: 1,
    nombre: 'Edificación Costera Premium', 
    ubicacion: 'Costa del Pacífico', 
    sector: 'Residencial',
    año: 2024,
    imagen: '/images/projects/edificacion-costera.jpg',
    inversion: '45M',
    m2: '12,500'
  },
  { 
    id: 2,
    nombre: 'Área Recreativa Resort', 
    ubicacion: 'Ixtapa-Zihuatanejo', 
    sector: 'Recreativo',
    año: 2024,
    imagen: '/images/projects/area-recreativa.jpg',
    inversion: '28M',
    m2: '8,000'
  },
  { 
    id: 3,
    nombre: 'Sistema de Drenaje Urbano', 
    ubicacion: 'Chilpancingo', 
    sector: 'Infraestructura',
    año: 2023,
    imagen: '/images/projects/instalacion-drenaje.jpg',
    inversion: '65M',
    m2: '25,000'
  },
]

const testimonios = [
  {
    id: 1,
    nombre: 'Arq. Carlos Mendoza',
    puesto: 'Director de Proyectos, Grupo Inmobiliario del Pacífico',
    texto: 'COSTA G superó todas nuestras expectativas. Profesionalismo, calidad y cumplimiento de tiempos. Ya llevamos 5 proyectos juntos.',
    rating: 5,
  },
  {
    id: 2,
    nombre: 'Ing. María Elena Vázquez',
    puesto: 'Gerente de Construcción, Desarrollos Costa',
    texto: 'La mejor inversión que hemos hecho. Su equipo técnico es excepcional y los materiales de primera calidad.',
    rating: 5,
  },
  {
    id: 3,
    nombre: 'Lic. Roberto Hernández',
    puesto: 'CEO, Constructora del Sur',
    texto: 'Más de 30 años de experiencia se notan en cada detalle. Recomendados 100% para proyectos grandes.',
    rating: 5,
  },
]

const stats = [
  { valor: '30+', label: 'Años de Experiencia' },
  { valor: '500+', label: 'Proyectos Completados' },
  { valor: '15+', label: 'Países' },
  { valor: '100%', label: 'Satisfacción' },
]

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-costa-light">
      {/* Header Premium */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-costa-secondary/95 backdrop-blur-md border-b border-white/10">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-costa-gold flex items-center justify-center">
              <span className="text-costa-secondary font-black text-xl">CG</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-bold text-white text-xl tracking-tight">COSTA G</span>
              <span className="block text-[10px] text-costa-gold tracking-widest uppercase">Constructora & Inmobiliaria</span>
            </div>
          </Link>

          {/* Menú Desktop */}
          <div className="hidden lg:flex items-center gap-8">
            <Link href="/" className="text-white hover:text-costa-gold transition font-medium text-sm tracking-wide">
              INICIO
            </Link>
            
            {/* Dropdown Negocio */}
            <div className="relative group">
              <button className="text-white hover:text-costa-gold transition font-medium text-sm tracking-wide flex items-center gap-1">
                NEGOCIO
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 overflow-hidden">
                <Link href="/servicios" className="block px-5 py-3 text-costa-secondary hover:bg-costa-gold/10 hover:text-costa-gold transition border-b border-gray-100">
                  <span className="font-semibold">Construcción</span>
                  <span className="block text-xs text-gray-500">Residencial, Comercial, Industrial</span>
                </Link>
                <Link href="/proyectos" className="block px-5 py-3 text-costa-secondary hover:bg-costa-gold/10 hover:text-costa-gold transition border-b border-gray-100">
                  <span className="font-semibold">Inmobiliaria</span>
                  <span className="block text-xs text-gray-500">Venta y Renta de Propiedades</span>
                </Link>
                <Link href="/materiales" className="block px-5 py-3 text-costa-secondary hover:bg-costa-gold/10 hover:text-costa-gold transition">
                  <span className="font-semibold">Materiales</span>
                  <span className="block text-xs text-gray-500">Catálogo y Distribución</span>
                </Link>
              </div>
            </div>

            <Link href="/proyectos" className="text-white hover:text-costa-gold transition font-medium text-sm tracking-wide">
              PROYECTOS
            </Link>
            <Link href="/nosotros" className="text-white hover:text-costa-gold transition font-medium text-sm tracking-wide">
              NOSOTROS
            </Link>
            <Link href="/blog" className="text-white hover:text-costa-gold transition font-medium text-sm tracking-wide">
              BLOG
            </Link>
            <Link href="/contacto" className="text-white hover:text-costa-gold transition font-medium text-sm tracking-wide">
              CONTACTO
            </Link>
          </div>

          {/* CTA */}
          <Link href="/contacto" className="hidden md:block">
            <button className="bg-costa-gold text-costa-secondary px-6 py-2.5 rounded font-bold text-sm hover:shadow-lg hover:shadow-costa-gold/30 transition-all">
              COTIZAR AHORA
            </button>
          </Link>

          {/* Mobile Menu Button */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden p-2 text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden bg-costa-secondary border-t border-white/10">
            <div className="px-6 py-4 space-y-3">
              <Link href="/" className="block text-white py-2">Inicio</Link>
              <Link href="/servicios" className="block text-white py-2">Construcción</Link>
              <Link href="/proyectos" className="block text-white py-2">Inmobiliaria</Link>
              <Link href="/materiales" className="block text-white py-2">Materiales</Link>
              <Link href="/nosotros" className="block text-white py-2">Nosotros</Link>
              <Link href="/contacto" className="block text-white py-2">Contacto</Link>
              <Link href="/contacto" className="block bg-costa-gold text-costa-secondary text-center py-3 rounded font-bold mt-4">
                COTIZAR
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section - Full Width con Imagen Real */}
      <section className="relative h-[700px] lg:h-[800px]">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
          }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-costa-secondary/70" />
        
        {/* Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <div className="max-w-3xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-costa-gold/20 border border-costa-gold/40 mb-8 animate-fade-in">
                <span className="w-2 h-2 rounded-full bg-costa-gold animate-pulse" />
                <span className="text-sm text-white font-medium">+30 Años de Experiencia • Nacional e Internacional</span>
              </div>

              {/* Main Title */}
              <h1 className="text-6xl lg:text-8xl font-black text-white leading-none mb-6 animate-slide-up">
                COSTA G
              </h1>
              
              {/* Subtítulos con Tags */}
              <div className="flex flex-wrap items-center gap-3 mb-6 animate-slide-up delay-100" style={{opacity: 0, animationFillMode: 'forwards'}}>
                <span className="px-4 py-2 rounded bg-white/10 backdrop-blur border border-white/20 text-white font-semibold">
                  Constructora
                </span>
                <span className="text-costa-gold text-2xl font-light">&</span>
                <span className="px-4 py-2 rounded bg-costa-gold text-costa-secondary font-semibold">
                  Inmobiliaria
                </span>
              </div>

              {/* Tagline */}
              <h2 className="text-2xl lg:text-3xl text-white/90 font-light mb-4 animate-slide-up delay-200" style={{opacity: 0, animationFillMode: 'forwards'}}>
                Proyectos <span className="text-costa-gold font-semibold">Nacionales</span> e <span className="text-costa-sky font-semibold">Internacionales</span>
              </h2>

              {/* Description */}
              <p className="text-lg text-white/70 mb-10 max-w-xl leading-relaxed animate-slide-up delay-300" style={{opacity: 0, animationFillMode: 'forwards'}}>
                Desarrollamos proyectos de construcción <strong className="text-white">residenciales, comerciales e industriales</strong> con 
                los más altos estándares de calidad.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 animate-slide-up delay-400" style={{opacity: 0, animationFillMode: 'forwards'}}>
                <Link href="/contacto">
                  <button className="bg-costa-gold text-costa-secondary px-8 py-4 rounded font-bold text-lg hover:shadow-lg hover:shadow-costa-gold/40 transition-all hover:scale-105">
                    INICIAR PROYECTO
                  </button>
                </Link>
                <Link href="/proyectos">
                  <button className="bg-white/10 backdrop-blur border border-white/30 text-white px-8 py-4 rounded font-bold text-lg hover:bg-white/20 transition-all">
                    VER PROYECTOS
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-costa-secondary/90 backdrop-blur-md border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <p className="text-3xl lg:text-4xl font-black text-costa-gold">{stat.valor}</p>
                  <p className="text-sm text-white/70">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3 Líneas de Negocio */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-costa-gold/10 text-costa-gold text-sm font-semibold mb-4">
              ¿Qué Hacemos?
            </span>
            <h2 className="text-4xl lg:text-5xl font-black text-costa-secondary mb-4">
              Nuestras Líneas de Negocio
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Tres divisiones especializadas para cubrir todas tus necesidades de construcción e inmobiliaria.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {lineasNegocio.map((linea) => (
              <Link href={linea.link} key={linea.id}>
                <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer h-full">
                  {/* Imagen */}
                  <div className="h-56 relative overflow-hidden">
                    <Image
                      src={linea.imagen}
                      alt={linea.titulo}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-costa-secondary/80 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <span className="text-5xl">{linea.icon}</span>
                    </div>
                  </div>
                  
                  {/* Contenido */}
                  <div className="p-8">
                    <h3 className="text-2xl font-black text-costa-secondary mb-4 group-hover:text-costa-gold transition-colors">
                      {linea.titulo}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {linea.descripcion}
                    </p>
                    <span className="inline-flex items-center text-costa-gold font-bold group-hover:gap-3 gap-2 transition-all">
                      Ver Más
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

      {/* Proyectos Destacados */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-costa-secondary/10 text-costa-secondary text-sm font-semibold mb-4">
                Portafolio
              </span>
              <h2 className="text-4xl lg:text-5xl font-black text-costa-secondary">
                Proyectos Destacados
              </h2>
            </div>
            <Link href="/proyectos" className="inline-flex items-center gap-2 text-costa-gold font-bold hover:gap-3 transition-all">
              Ver Todos los Proyectos
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {proyectosDestacados.map((proyecto) => (
              <div key={proyecto.id} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                {/* Imagen */}
                <div className="h-64 relative overflow-hidden">
                  <Image
                    src={proyecto.imagen}
                    alt={proyecto.nombre}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 right-4 bg-costa-gold text-costa-secondary px-3 py-1 rounded-full text-sm font-bold">
                    {proyecto.año}
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block bg-white/20 backdrop-blur text-white text-xs px-2 py-1 rounded mb-2">
                      {proyecto.sector}
                    </span>
                    <h3 className="text-xl font-bold text-white">{proyecto.nombre}</h3>
                  </div>
                </div>

                {/* Contenido */}
                <div className="p-6">
                  <p className="text-gray-600 text-sm mb-4 flex items-center gap-1">
                    📍 {proyecto.ubicacion}
                  </p>
                  
                  {/* Métricas */}
                  <div className="grid grid-cols-2 gap-4 py-4 border-t border-b border-gray-100 mb-4">
                    <div>
                      <p className="text-xs text-gray-500">Inversión</p>
                      <p className="font-bold text-costa-secondary">${proyecto.inversion}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Área</p>
                      <p className="font-bold text-costa-secondary">{proyecto.m2} m²</p>
                    </div>
                  </div>

                  <button className="w-full bg-costa-secondary text-white py-3 rounded font-bold hover:bg-costa-dark transition-colors">
                    Ver Detalles
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-24 bg-costa-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-costa-gold/20 text-costa-gold text-sm font-semibold mb-4">
              Testimonios
            </span>
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
              Lo Que Dicen Nuestros Clientes
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonios.map((testimonio) => (
              <div key={testimonio.id} className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8">
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonio.rating)].map((_, i) => (
                    <span key={i} className="text-costa-gold text-xl">★</span>
                  ))}
                </div>
                
                {/* Texto */}
                <p className="text-white/80 mb-6 leading-relaxed italic">
                  "{testimonio.texto}"
                </p>
                
                {/* Autor */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-costa-gold/20 flex items-center justify-center">
                    <span className="text-costa-gold font-bold">{testimonio.nombre.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="font-bold text-white">{testimonio.nombre}</p>
                    <p className="text-sm text-white/60">{testimonio.puesto}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-costa-gold">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-black text-costa-secondary mb-6">
            ¿Tienes un proyecto en mente?
          </h2>
          <p className="text-xl text-costa-secondary/80 mb-10">
            Contáctanos hoy y recibe una consultoría gratuita. Transformamos tus ideas en realidad.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacto">
              <button className="bg-costa-secondary text-white px-10 py-4 rounded font-bold text-lg hover:bg-costa-dark transition-all">
                SOLICITAR COTIZACIÓN
              </button>
            </Link>
            <a href="https://wa.me/527472735934?text=Hola,%20me%20interesa%20cotizar%20un%20proyecto" target="_blank" rel="noopener noreferrer">
              <button className="bg-white text-costa-secondary px-10 py-4 rounded font-bold text-lg hover:shadow-lg transition-all flex items-center justify-center gap-2">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                WHATSAPP
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer Premium */}
      <footer className="bg-costa-dark text-white pt-20 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            {/* Brand */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-lg bg-costa-gold flex items-center justify-center">
                  <span className="text-costa-secondary font-black text-2xl">CG</span>
                </div>
                <div>
                  <span className="font-bold text-2xl">COSTA G</span>
                  <span className="block text-xs text-costa-gold">Constructora & Inmobiliaria</span>
                </div>
              </div>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                Más de 30 años construyendo sueños. Proyectos residenciales, comerciales e industriales a nivel nacional e internacional.
              </p>
              {/* Social */}
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-costa-gold transition-colors">
                  <span className="text-sm">FB</span>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-costa-gold transition-colors">
                  <span className="text-sm">IG</span>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-costa-gold transition-colors">
                  <span className="text-sm">LI</span>
                </a>
              </div>
            </div>

            {/* Navegación */}
            <div>
              <h4 className="font-bold text-lg mb-6 text-costa-gold">Navegación</h4>
              <ul className="space-y-3 text-white/60">
                <li><Link href="/" className="hover:text-costa-gold transition-colors">Inicio</Link></li>
                <li><Link href="/nosotros" className="hover:text-costa-gold transition-colors">Nosotros</Link></li>
                <li><Link href="/servicios" className="hover:text-costa-gold transition-colors">Servicios</Link></li>
                <li><Link href="/proyectos" className="hover:text-costa-gold transition-colors">Proyectos</Link></li>
                <li><Link href="/blog" className="hover:text-costa-gold transition-colors">Blog</Link></li>
                <li><Link href="/contacto" className="hover:text-costa-gold transition-colors">Contacto</Link></li>
              </ul>
            </div>

            {/* Líneas de Negocio */}
            <div>
              <h4 className="font-bold text-lg mb-6 text-costa-gold">Líneas de Negocio</h4>
              <ul className="space-y-3 text-white/60">
                <li><Link href="/servicios" className="hover:text-costa-gold transition-colors">Construcción</Link></li>
                <li><Link href="/proyectos" className="hover:text-costa-gold transition-colors">Inmobiliaria</Link></li>
                <li><Link href="/materiales" className="hover:text-costa-gold transition-colors">Materiales</Link></li>
                <li><Link href="/contacto" className="hover:text-costa-gold transition-colors">Consultoría</Link></li>
              </ul>
            </div>

            {/* Contacto */}
            <div>
              <h4 className="font-bold text-lg mb-6 text-costa-gold">Contacto</h4>
              <ul className="space-y-4 text-white/60">
                <li className="flex items-start gap-3">
                  <span className="text-costa-gold">📞</span>
                  <span>747 273 5934</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-costa-gold">✉️</span>
                  <span className="break-all">Inmob.costag@Hotmail.com</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-costa-gold">📍</span>
                  <span>Chilpancingo, Guerrero, México</span>
                </li>
              </ul>
              <div className="mt-6">
                <Link href="/admin" className="text-xs text-white/30 hover:text-white/50 transition-colors">
                  Panel Admin
                </Link>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-white/10 text-center text-white/40 text-sm">
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
    </div>
  )
}
