import Link from 'next/link'

const posts = [
  { id: 1, title: 'Importancia de la Construcción Sustentable en el Siglo XXI', category: 'Sustentabilidad', date: '5 Dic 2024', readTime: '5 min', excerpt: 'Descubre cómo la construcción sustentable está transformando la industria y por qué es fundamental para el futuro.' },
  { id: 2, title: 'Rehabilitación de Puentes Vehiculares: Técnicas y Mejores Prácticas', category: 'Técnico', date: '1 Dic 2024', readTime: '8 min', excerpt: 'Una guía completa sobre las técnicas modernas de rehabilitación de puentes vehiculares en México.' },
  { id: 3, title: 'Caminos Artesanales: Conectando Comunidades Rurales', category: 'Comunidad', date: '28 Nov 2024', readTime: '4 min', excerpt: 'Cómo los caminos artesanales están mejorando la vida de las comunidades rurales en Guerrero.' },
  { id: 4, title: 'Guía de Materiales Ecológicos para Construcción', category: 'Guías', date: '25 Nov 2024', readTime: '6 min', excerpt: 'Los mejores materiales ecológicos disponibles para proyectos de construcción sustentable.' },
  { id: 5, title: 'Innovaciones en Pavimentación: Concreto Hidráulico vs Asfalto', category: 'Técnico', date: '20 Nov 2024', readTime: '7 min', excerpt: 'Comparativa detallada entre concreto hidráulico y asfalto para proyectos de pavimentación.' },
  { id: 6, title: '5 Consejos para Planificar tu Proyecto de Construcción', category: 'Consejos', date: '15 Nov 2024', readTime: '4 min', excerpt: 'Tips esenciales para una planificación exitosa de tu próximo proyecto de construcción.' },
]

const categories = ['Todos', 'Sustentabilidad', 'Técnico', 'Comunidad', 'Guías', 'Consejos']

export default function BlogPage() {
  const featuredPost = posts[0]
  const otherPosts = posts.slice(1)

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
              <span className="font-bold text-white text-lg hidden sm:block">Costa G</span>
            </Link>
            <nav className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-white/70 hover:text-white text-sm font-medium">Inicio</Link>
              <Link href="/nosotros" className="text-white/70 hover:text-white text-sm font-medium">Nosotros</Link>
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
            Recursos y Noticias
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
            Blog <span className="text-gradient-gold">Costa G</span>
          </h1>
          <p className="text-xl text-white/70 max-w-2xl">
            Artículos, guías y noticias sobre construcción sustentable e infraestructura.
          </p>
        </div>
      </section>

      {/* Categories */}
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

      {/* Featured Post */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 items-center bg-slate-50 rounded-3xl overflow-hidden">
            <div className="aspect-video lg:aspect-auto lg:h-full bg-gradient-to-br from-sky-600 via-sky-700 to-slate-800 flex items-center justify-center relative">
              <div className="absolute inset-0 pattern-grid opacity-30" />
              <span className="text-8xl opacity-50">📰</span>
            </div>
            <div className="p-8 lg:p-12">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full bg-sky-100 text-sky-600 text-xs font-semibold">
                  {featuredPost.category}
                </span>
                <span className="text-slate-400 text-sm">{featuredPost.date}</span>
                <span className="text-slate-400 text-sm">• {featuredPost.readTime}</span>
              </div>
              <h2 className="text-2xl lg:text-3xl font-black text-slate-800 mb-4">
                {featuredPost.title}
              </h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                {featuredPost.excerpt}
              </p>
              <button className="inline-flex items-center gap-2 text-sky-600 font-semibold hover:text-sky-700 group">
                Leer artículo completo
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-black text-slate-800 mb-8">Artículos Recientes</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-lg transition-all hover-lift">
                <div className="aspect-video bg-gradient-to-br from-slate-600 to-slate-800 flex items-center justify-center relative">
                  <span className="text-5xl opacity-40">📄</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-700 text-xs font-semibold">
                      {post.category}
                    </span>
                    <span className="text-slate-400 text-xs">{post.readTime}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2 line-clamp-2 hover:text-sky-600 transition-colors cursor-pointer">
                    {post.title}
                  </h3>
                  <p className="text-sm text-slate-500 line-clamp-2 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-400">{post.date}</span>
                    <button className="text-sky-600 text-sm font-semibold hover:text-sky-700">
                      Leer más →
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-100 text-amber-700 text-sm font-semibold mb-4">
            Newsletter
          </span>
          <h2 className="text-3xl font-black text-slate-800 mb-4">
            Mantente <span className="text-gradient-sky">Informado</span>
          </h2>
          <p className="text-slate-500 mb-8">
            Suscríbete para recibir las últimas noticias y artículos sobre construcción sustentable.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email"
              placeholder="tu@email.com"
              className="flex-1 px-4 py-3 rounded-xl border border-slate-200 focus:border-sky-400 outline-none"
            />
            <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-sky-600 text-white font-semibold hover:shadow-lg transition-all">
              Suscribirse
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-slate-400">© {new Date().getFullYear()} Costa G. Todos los derechos reservados.</p>
        </div>
      </footer>

      {/* WhatsApp */}
      <a href="https://wa.me/527472735934?text=Hola,%20vi%20un%20artículo%20en%20su%20blog%20y%20me%20gustaría%20más%20información" target="_blank" rel="noopener noreferrer" className="whatsapp-btn animate-pulse-glow">
        <svg viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      </a>
    </div>
  )
}
