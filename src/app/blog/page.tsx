import Link from 'next/link'

const posts = [
  { id: 1, title: 'Importancia de la Construcción Sustentable', category: 'Sustentabilidad', date: '1 Dic 2024' },
  { id: 2, title: 'Rehabilitación de Puentes Vehiculares', category: 'Proyectos', date: '28 Nov 2024' },
  { id: 3, title: 'Caminos Artesanales en Guerrero', category: 'Comunidad', date: '25 Nov 2024' },
  { id: 4, title: 'Guía de Materiales Ecológicos', category: 'Guías', date: '20 Nov 2024' },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-slate-800">Costa G</Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-slate-600 hover:text-slate-800">Inicio</Link>
            <Link href="/nosotros" className="text-slate-600 hover:text-slate-800">Nosotros</Link>
            <Link href="/servicios" className="text-slate-600 hover:text-slate-800">Servicios</Link>
            <Link href="/proyectos" className="text-slate-600 hover:text-slate-800">Proyectos</Link>
            <Link href="/contacto" className="px-4 py-2 bg-amber-500 text-white rounded-lg">Contacto</Link>
          </nav>
        </div>
      </header>

      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-black text-slate-800 mb-4">Blog</h1>
          <p className="text-xl text-gray-600 mb-12">Noticias y artículos sobre construcción sustentable</p>
          
          <div className="space-y-8">
            {posts.map((post) => (
              <article key={post.id} className="p-6 bg-white rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 bg-amber-100 text-amber-700 text-xs font-semibold rounded-full">
                    {post.category}
                  </span>
                  <span className="text-sm text-gray-400">{post.date}</span>
                </div>
                <h2 className="text-xl font-bold text-slate-800 mb-4">{post.title}</h2>
                <p className="text-gray-600 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <span className="text-amber-500 font-semibold cursor-pointer hover:text-amber-600">
                  Leer más →
                </span>
              </article>
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
