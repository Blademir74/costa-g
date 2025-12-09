import Link from 'next/link'

const values = [
  { icon: '🎯', title: 'Excelencia', desc: 'Compromiso con la máxima calidad en cada proyecto' },
  { icon: '🌍', title: 'Alcance Global', desc: 'Proyectos nacionales e internacionales' },
  { icon: '🤝', title: 'Confianza', desc: '30+ años respaldando nuestro trabajo' },
  { icon: '💡', title: 'Innovación', desc: 'Tecnología y técnicas de vanguardia' },
]

const timeline = [
  { year: '1994', title: 'Fundación', desc: 'Inicio de operaciones en Guerrero, México' },
  { year: '2005', title: 'Expansión Nacional', desc: 'Operaciones en múltiples estados de México' },
  { year: '2015', title: 'Proyectos Internacionales', desc: 'Primeros proyectos fuera de México' },
  { year: '2024', title: 'Consolidación Global', desc: '+500 proyectos en 15+ países' },
]

const services = [
  { title: 'Construcción Residencial', desc: 'Casas, departamentos y desarrollos habitacionales' },
  { title: 'Construcción Comercial', desc: 'Plazas, oficinas y centros comerciales' },
  { title: 'Construcción Industrial', desc: 'Naves, bodegas y plantas de producción' },
  { title: 'Infraestructura', desc: 'Obras civiles, hidráulicas y de servicios' },
  { title: 'Consultoría Internacional', desc: 'Asesoría técnica en proyectos globales' },
  { title: 'Inmobiliaria', desc: 'Desarrollo y comercialización de propiedades' },
]

export default function NosotrosPage() {
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
              <Link href="/nosotros" className="text-white text-sm font-medium">Nosotros</Link>
              <Link href="/servicios" className="text-white/70 hover:text-white text-sm font-medium">Servicios</Link>
              <Link href="/proyectos" className="text-white/70 hover:text-white text-sm font-medium">Proyectos</Link>
              <Link href="/contacto" className="px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-white text-sm font-semibold">Cotizar</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-24 pb-16 gradient-hero pattern-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white/90 text-sm font-medium mb-6">
            Conócenos
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
            Sobre <span className="text-gradient-sky">COSTA G</span>
          </h1>
          <p className="text-xl text-white/70 max-w-2xl">
            Más de 30 años construyendo sueños en México y el mundo. Líderes en construcción e inmobiliaria.
          </p>
        </div>
      </section>

      {/* Historia */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-sky-100 text-sky-600 text-sm font-semibold mb-4">
                Nuestra Historia
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-800 mb-6">
                <span className="text-gradient-gold">COSTA G</span> - Constructora e Inmobiliaria
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  <strong className="text-slate-800">Comercializadora e Inmobiliaria Costa G S.A. de C.V.</strong> es una empresa 
                  líder en el sector de la construcción con más de <strong className="text-sky-600">30 años de experiencia</strong> 
                  desarrollando proyectos de alta calidad.
                </p>
                <p>
                  Nos especializamos en <strong>construcción residencial, comercial e industrial</strong>, así como en 
                  <strong> obras de infraestructura</strong> y servicios de <strong>consultoría técnica</strong> a nivel 
                  nacional e internacional.
                </p>
                <p>
                  Con presencia en <strong className="text-amber-600">15+ países</strong> y más de 
                  <strong className="text-amber-600"> 500 proyectos completados</strong>, somos el socio confiable 
                  para hacer realidad cualquier proyecto de construcción.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-8">Nuestra Trayectoria</h3>
              <div className="space-y-6">
                {timeline.map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-sky-400 to-sky-600 flex items-center justify-center font-bold text-sm">
                        {item.year}
                      </div>
                      {i < timeline.length - 1 && <div className="w-0.5 h-full bg-white/20 mt-2" />}
                    </div>
                    <div className="pb-6">
                      <h4 className="font-bold text-lg">{item.title}</h4>
                      <p className="text-white/70 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-amber-100 text-amber-700 text-sm font-semibold mb-4">
              Lo que nos define
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-800">
              Nuestros <span className="text-gradient-sky">Valores</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <div key={i} className="p-6 bg-white rounded-2xl border border-slate-100 hover:shadow-lg transition-all hover-lift text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-sky-100 to-sky-50 flex items-center justify-center text-3xl mx-auto mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">{value.title}</h3>
                <p className="text-slate-500 text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-800 mb-4">
              Áreas de <span className="text-gradient-gold">Especialización</span>
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Ofrecemos soluciones integrales de construcción e inmobiliaria para todo tipo de proyectos.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <div key={i} className="p-6 rounded-2xl bg-slate-50 hover:bg-sky-50 transition-colors border border-slate-100 hover:border-sky-200">
                <h3 className="text-lg font-bold text-slate-800 mb-2">{service.title}</h3>
                <p className="text-slate-500 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-gradient-to-br from-sky-500 to-sky-600 text-white">
              <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center text-3xl mb-6">🎯</div>
              <h3 className="text-2xl font-bold mb-4">Misión</h3>
              <p className="text-white/90 leading-relaxed">
                Desarrollar proyectos de construcción de la más alta calidad, superando las expectativas de nuestros 
                clientes a través de la innovación, profesionalismo y compromiso con la excelencia, tanto a nivel 
                nacional como internacional.
              </p>
            </div>
            <div className="p-8 rounded-3xl bg-gradient-to-br from-amber-500 to-amber-600 text-white">
              <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center text-3xl mb-6">🔭</div>
              <h3 className="text-2xl font-bold mb-4">Visión</h3>
              <p className="text-white/90 leading-relaxed">
                Ser la empresa constructora e inmobiliaria de referencia a nivel global, reconocida por nuestra 
                calidad, innovación y capacidad para transformar ideas en realidades arquitectónicas excepcionales 
                en cualquier parte del mundo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 gradient-sky">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-black text-white mb-2">30+</div>
              <div className="text-white/70">Años de Experiencia</div>
            </div>
            <div>
              <div className="text-5xl font-black text-white mb-2">500+</div>
              <div className="text-white/70">Proyectos Completados</div>
            </div>
            <div>
              <div className="text-5xl font-black text-white mb-2">15+</div>
              <div className="text-white/70">Países</div>
            </div>
            <div>
              <div className="text-5xl font-black text-white mb-2">100%</div>
              <div className="text-white/70">Satisfacción</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-slate-800 mb-6">
            ¿Listo para trabajar con nosotros?
          </h2>
          <p className="text-xl text-slate-500 mb-8">
            Contáctanos y descubre cómo podemos hacer realidad tu proyecto.
          </p>
          <Link href="/contacto" className="inline-block px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold text-lg hover:shadow-glow-gold transition-all hover:scale-105">
            Solicitar Consultoría
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-slate-400">© {new Date().getFullYear()} COSTA G - Constructora e Inmobiliaria. Todos los derechos reservados.</p>
        </div>
      </footer>

      {/* WhatsApp */}
      <a href="https://wa.me/527472735934?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20Costa%20G" target="_blank" rel="noopener noreferrer" className="whatsapp-btn animate-pulse-glow">
        <svg viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      </a>
    </div>
  )
}
