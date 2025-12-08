import { Metadata } from 'next'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { HeroPage } from '@/components/shared/hero-modern'
import { Button } from '@/components/ui'
import { CTASection } from '@/components/sections'
import {
  Calendar,
  Clock,
  User,
  ArrowRight,
  Tag,
  Search,
} from 'lucide-react'

// ========================================
// METADATA
// ========================================

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Artículos, noticias y consejos sobre construcción sustentable, proyectos de infraestructura y tendencias del sector en Guerrero, México.',
}

// ========================================
// DATOS DE BLOG (EJEMPLO)
// ========================================

const blogPosts = [
  {
    id: 1,
    slug: 'importancia-construccion-sustentable',
    title: 'La Importancia de la Construcción Sustentable en México',
    excerpt: 'Descubre por qué la construcción sustentable es el futuro de la industria y cómo Costa G está liderando este cambio en Guerrero.',
    category: 'Sustentabilidad',
    author: 'Costa G',
    date: '2024-12-15',
    readTime: '5 min',
    image: '/images/blog/sustentabilidad.jpg',
  },
  {
    id: 2,
    slug: 'rehabilitacion-puentes-vehiculares',
    title: 'Rehabilitación de Puentes Vehiculares: Nuestra Experiencia',
    excerpt: 'Con más de 243 puentes conservados, compartimos las mejores prácticas en rehabilitación estructural de puentes.',
    category: 'Proyectos',
    author: 'Costa G',
    date: '2024-11-28',
    readTime: '7 min',
    image: '/images/blog/puentes.jpg',
  },
  {
    id: 3,
    slug: 'caminos-artesanales-guerrero',
    title: 'Caminos Artesanales: Conectando Comunidades en Guerrero',
    excerpt: 'El programa de caminos artesanales está transformando la conectividad rural. Conoce nuestro trabajo en Tlapa de Comonfort.',
    category: 'Comunidad',
    author: 'Costa G',
    date: '2024-11-10',
    readTime: '4 min',
    image: '/images/blog/caminos.jpg',
  },
  {
    id: 4,
    slug: 'materiales-construccion-ecologicos',
    title: 'Materiales de Construcción Ecológicos: Guía Completa',
    excerpt: 'Una guía sobre los materiales más sustentables para tus proyectos de construcción y cómo reducir la huella de carbono.',
    category: 'Sustentabilidad',
    author: 'Costa G',
    date: '2024-10-22',
    readTime: '8 min',
    image: '/images/blog/materiales.jpg',
  },
  {
    id: 5,
    slug: 'infraestructura-educativa-guerrero',
    title: 'Infraestructura Educativa: Construyendo el Futuro',
    excerpt: 'Nuestro compromiso con la educación a través de la construcción de aulas y espacios deportivos en escuelas de Guerrero.',
    category: 'Proyectos',
    author: 'Costa G',
    date: '2024-10-05',
    readTime: '6 min',
    image: '/images/blog/educacion.jpg',
  },
  {
    id: 6,
    slug: 'proceso-licitacion-obra-publica',
    title: 'Proceso de Licitación en Obra Pública: Lo que Debes Saber',
    excerpt: 'Una guía práctica sobre cómo participar en licitaciones de obra pública en México.',
    category: 'Guías',
    author: 'Costa G',
    date: '2024-09-18',
    readTime: '10 min',
    image: '/images/blog/licitacion.jpg',
  },
]

const categories = [
  { name: 'Todos', count: blogPosts.length },
  { name: 'Sustentabilidad', count: 2 },
  { name: 'Proyectos', count: 2 },
  { name: 'Comunidad', count: 1 },
  { name: 'Guías', count: 1 },
]

// ========================================
// PÁGINA BLOG
// ========================================

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <HeroPage
        title="Blog"
        description="Noticias, artículos y consejos sobre construcción sustentable y desarrollo de infraestructura."
        breadcrumbs={[{ label: 'Blog', href: '/blog' }]}
        badge="Actualizado semanalmente"
      />

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <aside className="lg:col-span-1 order-2 lg:order-1">
              {/* Search */}
              <div className="mb-8">
                <h3 className="text-sm font-semibold text-secondary-700 uppercase tracking-wide mb-4">
                  Buscar
                </h3>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Buscar artículos..."
                    className="w-full px-4 py-3 pr-10 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-transparent"
                  />
                  <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
                </div>
              </div>

              {/* Categories */}
              <div className="mb-8">
                <h3 className="text-sm font-semibold text-secondary-700 uppercase tracking-wide mb-4">
                  Categorías
                </h3>
                <ul className="space-y-2">
                  {categories.map((category) => (
                    <li key={category.name}>
                      <button
                        className={cn(
                          'w-full flex items-center justify-between px-4 py-2 rounded-lg',
                          'text-left text-sm transition-colors',
                          category.name === 'Todos'
                            ? 'bg-primary-100 text-secondary-700 font-medium'
                            : 'hover:bg-neutral-100 text-neutral-600'
                        )}
                      >
                        <span>{category.name}</span>
                        <span className="text-xs bg-neutral-200 px-2 py-0.5 rounded-full">
                          {category.count}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Newsletter */}
              <div className="bg-secondary-700 rounded-2xl p-6 text-white">
                <h3 className="font-bold mb-2">Suscríbete</h3>
                <p className="text-sm text-primary-200 mb-4">
                  Recibe nuestros artículos más recientes directamente en tu correo.
                </p>
                <input
                  type="email"
                  placeholder="Tu correo electrónico"
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 mb-3 focus:outline-none focus:ring-2 focus:ring-accent-400"
                />
                <Button variant="accent" fullWidth size="sm">
                  Suscribirse
                </Button>
              </div>
            </aside>

            {/* Blog Posts */}
            <div className="lg:col-span-3 order-1 lg:order-2">
              {/* Featured Post */}
              <article className="mb-10">
                <Link
                  href={`/blog/${blogPosts[0].slug}`}
                  className="group block"
                >
                  <div className="relative aspect-[21/9] rounded-2xl overflow-hidden bg-gradient-to-br from-secondary-600 to-secondary-800 mb-6">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-6xl opacity-20">📰</span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/80 via-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <span className="inline-block px-3 py-1 bg-accent-400 text-secondary-900 text-xs font-semibold rounded-full mb-3">
                        Destacado
                      </span>
                      <h2 className="text-2xl md:text-3xl font-bold text-white group-hover:text-accent-300 transition-colors">
                        {blogPosts[0].title}
                      </h2>
                    </div>
                  </div>
                </Link>
              </article>

              {/* Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {blogPosts.slice(1).map((post) => (
                  <article
                    key={post.id}
                    className="group border border-neutral-200 rounded-xl overflow-hidden hover:border-primary-300 hover:shadow-lg transition-all duration-300"
                  >
                    {/* Image */}
                    <div className="aspect-video bg-gradient-to-br from-neutral-100 to-neutral-200 flex items-center justify-center">
                      <span className="text-4xl opacity-30">📄</span>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="px-2 py-1 bg-primary-100 text-secondary-700 text-xs font-medium rounded">
                          {post.category}
                        </span>
                        <span className="text-xs text-neutral-400 flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </span>
                      </div>

                      <Link href={`/blog/${post.slug}`}>
                        <h3 className="font-bold text-secondary-700 mb-2 group-hover:text-primary-600 transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                      </Link>

                      <p className="text-sm text-neutral-500 mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between text-xs text-neutral-400">
                        <span className="flex items-center gap-1">
                          <User className="w-3 h-3" />
                          {post.author}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {new Date(post.date).toLocaleDateString('es-MX', {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric',
                          })}
                        </span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center mt-10">
                <div className="flex items-center gap-2">
                  <button className="w-10 h-10 rounded-lg bg-secondary-700 text-white font-medium">
                    1
                  </button>
                  <button className="w-10 h-10 rounded-lg bg-neutral-100 text-neutral-600 hover:bg-neutral-200 transition-colors">
                    2
                  </button>
                  <button className="w-10 h-10 rounded-lg bg-neutral-100 text-neutral-600 hover:bg-neutral-200 transition-colors">
                    3
                  </button>
                  <span className="px-2 text-neutral-400">...</span>
                  <button className="w-10 h-10 rounded-lg bg-neutral-100 text-neutral-600 hover:bg-neutral-200 transition-colors flex items-center justify-center">
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        variant="contact"
        title="¿Tienes un proyecto en mente?"
        description="Contáctanos y hagamos realidad tu próximo proyecto de construcción."
        primaryButtonText="Contactar"
        primaryButtonHref="/contacto"
      />
    </>
  )
}
