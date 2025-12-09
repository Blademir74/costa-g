import Link from 'next/link'

const services = [
  { id: 'construccion', title: 'Construcción', desc: 'Construcción de obras civiles con los más altos estándares de calidad.' },
  { id: 'remodelacion', title: 'Remodelación', desc: 'Renovación y mejora de espacios existentes.' },
  { id: 'venta-materiales', title: 'Venta de Materiales', desc: 'Materiales de construcción de primera calidad.' },
  { id: 'diseno', title: 'Diseño Arquitectónico', desc: 'Diseño profesional para tus proyectos.' },
  { id: 'consultoria', title: 'Consultoría', desc: 'Asesoría técnica especializada en construcción.' },
]

export default function ServiciosPage() {
  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-slate-800">Costa G</Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-slate-600 hover:text-slate-800">Inicio</Link>
            <Link href="/nosotros" className="text-slate-600 hover:text-slate-800">Nosotros</Link>
            <Link href="/servicios" className="text-amber-500 font-semibold">Servicios</Link>
            <Link href="/proyectos" className="text-slate-600 hover:text-slate-800">Proyectos</Link>
            <Link href="/contacto" className="px-4 py-2 bg-amber-500 text-white rounded-lg">Contacto</Link>
          </nav>
        </div>
      </header>

      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-black text-slate-800 mb-4">Nuestros Servicios</h1>
          <p className="text-xl text-gray-600 mb-12">Soluciones integrales para tus proyectos de construcción</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link key={service.id} href={`/servicios/${service.id}`}>
                <div className="p-8 bg-white rounded-2xl border border-gray-200 hover:shadow-lg hover:border-amber-300 transition-all cursor-pointer h-full">
                  <div className="w-16 h-16 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
                    <span className="text-2xl">🏗️</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.desc}</p>
                  <span className="text-amber-500 font-semibold">Ver detalles →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <footer className="py-8 bg-slate-900 text-center text-gray-400">
        <p>© 2024 Costa G. Todos los derechos reservados.</p>
      </footer>
    </div>
  )
}
