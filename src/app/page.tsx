import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-slate-800">
            Costa G
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-slate-600 hover:text-slate-800">Inicio</Link>
            <Link href="/nosotros" className="text-slate-600 hover:text-slate-800">Nosotros</Link>
            <Link href="/servicios" className="text-slate-600 hover:text-slate-800">Servicios</Link>
            <Link href="/proyectos" className="text-slate-600 hover:text-slate-800">Proyectos</Link>
            <Link href="/blog" className="text-slate-600 hover:text-slate-800">Blog</Link>
            <Link href="/contacto" className="px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600">
              Contacto
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-slate-800 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-amber-500 text-white rounded-full text-sm font-semibold mb-6">
              +7 Años de Experiencia
            </span>
            <h1 className="text-4xl md:text-6xl font-black mb-6">
              Constructora <span className="text-sky-400">Bio-Sustentable</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Construimos infraestructura que conecta comunidades en Guerrero y Estado de México. 
              +243 puentes conservados desde 2018.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contacto" className="px-8 py-4 bg-amber-500 text-white font-bold rounded-xl hover:bg-amber-600">
                Solicitar Cotización
              </Link>
              <Link href="/proyectos" className="px-8 py-4 bg-white/10 text-white font-bold rounded-xl hover:bg-white/20">
                Ver Proyectos
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-4xl font-black text-amber-500">17</p>
              <p className="text-gray-600">Proyectos Completados</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-black text-amber-500">243+</p>
              <p className="text-gray-600">Puentes Conservados</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-black text-amber-500">7+</p>
              <p className="text-gray-600">Años de Experiencia</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-black text-amber-500">100%</p>
              <p className="text-gray-600">Garantía Total</p>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-black text-slate-800 text-center mb-12">Nuestros Servicios</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {['Construcción', 'Remodelación', 'Consultoría'].map((service) => (
              <div key={service} className="p-8 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-2xl">🏗️</span>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">{service}</h3>
                <p className="text-gray-600 mb-6">
                  Servicios profesionales de {service.toLowerCase()} con los más altos estándares de calidad.
                </p>
                <Link href="/servicios" className="text-amber-500 font-semibold hover:text-amber-600">
                  Ver más →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-800 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black mb-6">¿Listo para tu próximo proyecto?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Contáctanos hoy y recibe una cotización gratuita para tu proyecto de construcción.
          </p>
          <Link href="/contacto" className="inline-block px-8 py-4 bg-amber-500 text-white font-bold rounded-xl hover:bg-amber-600">
            Contactar Ahora
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Costa G</h3>
              <p className="text-gray-400">
                Constructora Bio-Sustentable en Guerrero y Estado de México.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Enlaces</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/nosotros" className="hover:text-white">Nosotros</Link></li>
                <li><Link href="/servicios" className="hover:text-white">Servicios</Link></li>
                <li><Link href="/proyectos" className="hover:text-white">Proyectos</Link></li>
                <li><Link href="/contacto" className="hover:text-white">Contacto</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contacto</h4>
              <ul className="space-y-2 text-gray-400">
                <li>📞 747 273 5934</li>
                <li>✉️ Inmob.costag@Hotmail.com</li>
                <li>📍 Chilpancingo, Guerrero</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Admin</h4>
              <Link href="/admin" className="text-amber-400 hover:text-amber-300">
                Panel de Administración
              </Link>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>© 2024 Costa G. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
