import Link from 'next/link'

export default function NosotrosPage() {
  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-slate-800">Costa G</Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-slate-600 hover:text-slate-800">Inicio</Link>
            <Link href="/nosotros" className="text-amber-500 font-semibold">Nosotros</Link>
            <Link href="/servicios" className="text-slate-600 hover:text-slate-800">Servicios</Link>
            <Link href="/proyectos" className="text-slate-600 hover:text-slate-800">Proyectos</Link>
            <Link href="/contacto" className="px-4 py-2 bg-amber-500 text-white rounded-lg">Contacto</Link>
          </nav>
        </div>
      </header>

      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-black text-slate-800 mb-8">Sobre Nosotros</h1>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">Nuestra Historia</h2>
              <p className="text-gray-600 mb-4">
                Comercializadora e Inmobiliaria Costa G S.A. de C.V. es una empresa constructora Bio-Sustentable 
                con más de 7 años de experiencia en Guerrero y Estado de México.
              </p>
              <p className="text-gray-600 mb-4">
                Nos especializamos en la construcción de infraestructura vial, incluyendo puentes vehiculares, 
                caminos artesanales, carreteras y obras de pavimentación.
              </p>
              <p className="text-gray-600">
                Desde 2018, hemos conservado más de 243 puentes y completado 17 proyectos de infraestructura 
                que conectan comunidades en todo el estado de Guerrero.
              </p>
            </div>
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-6">Nuestros Valores</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-amber-400">✓</span>
                  <div>
                    <p className="font-semibold">Calidad</p>
                    <p className="text-sm text-gray-300">Obras con los más altos estándares</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-400">✓</span>
                  <div>
                    <p className="font-semibold">Sustentabilidad</p>
                    <p className="text-sm text-gray-300">Construcción responsable con el medio ambiente</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-400">✓</span>
                  <div>
                    <p className="font-semibold">Compromiso</p>
                    <p className="text-sm text-gray-300">Cumplimos con cada proyecto</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">Misión y Visión</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6">
                <h3 className="text-xl font-bold text-amber-500 mb-4">Misión</h3>
                <p className="text-gray-600">
                  Construir infraestructura de calidad que conecte comunidades, utilizando prácticas 
                  sustentables y contribuyendo al desarrollo de Guerrero y Estado de México.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="text-xl font-bold text-amber-500 mb-4">Visión</h3>
                <p className="text-gray-600">
                  Ser la empresa constructora líder en infraestructura bio-sustentable, reconocida por 
                  nuestra calidad, innovación y compromiso con las comunidades.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="py-8 bg-slate-900 text-center text-gray-400">
        <p>© 2024 Costa G. Todos los derechos reservados.</p>
      </footer>
    </div>
  )
}
