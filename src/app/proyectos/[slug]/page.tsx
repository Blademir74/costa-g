import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getProjectBySlug } from '@/services/projectService'
import { CTASection } from '@/components/ui'

interface Props {
  params: { slug: string }
}

// 1. Generar Metadatos SEO dinámicos para cada proyecto
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = await getProjectBySlug(params.slug)
  if (!project) return { title: 'Proyecto no encontrado' }

  return {
    title: `${project.title} | Costa G`,
    description: project.description || `Detalles del proyecto ${project.title}`,
    openGraph: {
      images: [project.main_image_url], // La imagen que sale al compartir link
    },
  }
}

// 2. Componente de Página
export default async function ProjectDetailPage({ params }: Props) {
  const project = await getProjectBySlug(params.slug)

  if (!project) {
    notFound() // Muestra la página 404 de Next.js
  }

  return (
    <main className="bg-white min-h-screen pb-20">
      {/* HEADER CON IMAGEN DE FONDO */}
      <div className="relative h-[60vh] w-full bg-slate-900">
        <Image
          src={project.main_image_url}
          alt={project.title}
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
        
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16">
          <div className="container mx-auto">
            <span className="inline-block px-4 py-1 mb-4 text-sm font-semibold tracking-wider text-sky-400 bg-sky-900/50 backdrop-blur-md rounded-full border border-sky-500/30 uppercase">
              {project.category?.name}
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white max-w-4xl leading-tight">
              {project.title}
            </h1>
            {project.location && (
              <p className="mt-4 text-xl text-slate-300 flex items-center gap-2">
                <svg className="w-5 h-5 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {project.location} {project.year && <span className="text-slate-500">| {project.year}</span>}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* CONTENIDO PRINCIPAL */}
      <div className="container mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Columna Izquierda: Descripción */}
        <div className="lg:col-span-8 space-y-8">
          <div className="prose prose-lg prose-slate max-w-none">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Descripción del Proyecto</h3>
            <p className="text-slate-600 leading-relaxed text-lg">
              {project.description || "No hay descripción disponible para este proyecto."}
            </p>
          </div>

          {/* Galería de Imágenes Adicionales */}
          {project.gallery_urls && project.gallery_urls.length > 0 && (
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Galería de Avances</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.gallery_urls.map((url, idx) => (
                  <div key={idx} className="relative h-64 rounded-xl overflow-hidden shadow-md group">
                    <Image
                      src={url}
                      alt={`${project.title} galería ${idx + 1}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Columna Derecha: Sidebar de Datos */}
        <div className="lg:col-span-4 space-y-8">
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm sticky top-24">
            <h4 className="font-display font-bold text-slate-900 text-lg mb-6 pb-4 border-b border-slate-200">
              Ficha Técnica
            </h4>
            
            <dl className="space-y-4">
              <div>
                <dt className="text-sm font-medium text-slate-500">Categoría</dt>
                <dd className="text-slate-900 font-semibold">{project.category?.name}</dd>
              </div>
              
              <div>
                <dt className="text-sm font-medium text-slate-500">Año de Ejecución</dt>
                <dd className="text-slate-900 font-semibold">{project.year || "N/D"}</dd>
              </div>

              <div>
                <dt className="text-sm font-medium text-slate-500">Ubicación</dt>
                <dd className="text-slate-900 font-semibold">{project.location || "N/D"}</dd>
              </div>

              {/* Aquí podrías agregar campos extra si modificas la DB: Cliente, Duración, etc. */}
            </dl>

            <div className="mt-8 pt-6 border-t border-slate-200">
              <Link 
                href="/proyectos"
                className="block w-full text-center py-3 px-4 bg-white border border-slate-300 text-slate-700 font-medium rounded-lg hover:bg-slate-50 transition-colors"
              >
                ← Volver al Catálogo
              </Link>
            </div>
          </div>
        </div>

      </div>

      <CTASection />
    </main>
  )
}