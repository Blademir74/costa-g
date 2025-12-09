import Link from 'next/link'

const projects = [
  { id: 1, title: 'Puente Vehicular El Naranjo', category: 'Puentes', year: 2024, location: 'Coahuayutla, Guerrero' },
  { id: 2, title: 'Camino Crucero Vista Hermosa', category: 'Caminos', year: 2024, location: 'Coahuayutla, Guerrero' },
  { id: 3, title: 'Rehabilitación Carretera Coahuayutla-Tonalá', category: 'Carreteras', year: 2024, location: 'Coahuayutla, Guerrero' },
  { id: 4, title: 'Camino Tlapa-San Marcos', category: 'Caminos', year: 2023, location: 'Tlapa de Comonfort' },
  { id: 5, title: 'Pavimentación Calle Porfirio Díaz', category: 'Pavimentación', year: 2022, location: 'Ometepec, Guerrero' },
  { id: 6, title: 'Construcción Escuela Primaria', category: 'Escuelas', year: 2021, location: 'Chilpancingo, Guerrero' },
]

export default function ProyectosPage() {
  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-slate-800">Costa G</Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-slate-600 hover:text-slate-800">Inicio</Link>
            <Link href="/nosotros" className="text-slate-600 hover:text-slate-800">Nosotros</Link>
            <Link href="/servicios" className="text-slate-600 hover:text-slate-800">Servicios</Link>
            <Link href="/proyectos" className="text-amber-500 font-semibold">Proyectos</Link>
            <Link href="/contacto" className="px-4 py-2 bg-amber-500 text-white rounded-lg">Contacto</Link>
          </nav>
        </div>
      </header>

      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-black text-slate-800 mb-4">Nuestros Proyectos</h1>
          <p className="text-xl text-gray-600 mb-12">+17 proyectos completados desde 2018</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
                  <span className="text-6xl opacity-50">🏗️</span>
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-sky-100 text-slate-700 text-xs font-semibold rounded-full mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-500 mb-4">📍 {project.location}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">{project.year}</span>
                    <span className="text-amber-500 text-sm font-semibold">Ver proyecto →</span>
                  </div>
                </div>
              </div>
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
