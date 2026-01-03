import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getProjects } from '@/services/projectService'
import { CTASection } from '@/components/ui'

export const revalidate = 0;

export const metadata: Metadata = {
  title: 'Servicios | Líneas de Especialización',
  description: 'Servicios de construcción e infraestructura: Puentes, Edificación, Caminos Artesanales y Carreteras.',
}

// Definimos los servicios estáticamente, pero las imágenes vendrán de proyectos reales
const services = [
  {
    slug: 'puentes',
    title: 'Rehabilitación y Construcción de Puentes',
    description: 'Especialistas en infraestructura vehicular mayor. Mantenimiento, rehabilitación estructural y construcción de puentes con normatividad SCT.',
    icon: '🌉',
    features: ['Dictámenes estructurales', 'Mantenimiento preventivo', 'Refuerzo de cimentaciones'],
  },
  {
    slug: 'edificacion',
    title: 'Edificación Pública y Social',
    description: 'Construcción de espacios educativos, deportivos y administrativos que fortalecen el tejido social.',
    icon: '🏗️',
    features: ['Aulas y Escuelas', 'Techados y Canchas', 'Edificios Administrativos'],
  },
  {
    slug: 'carreteras',
    title: 'Infraestructura Carretera',
    description: 'Pavimentación de concreto hidráulico y asfáltico, conectando comunidades con calidad duradera.',
    icon: '🛣️',
    features: ['Pavimentación Urbana', 'Carreteras Estatales', 'Muros de Contención'],
  },
  {
    slug: 'caminos-artesanales',
    title: 'Caminos Artesanales',
    description: 'Ejecución de caminos rurales utilizando mano de obra local y materiales de la región, fomentando la economía local.',
    icon: '⛰️',
    features: ['Empedrados', 'Huellas de rodamiento', 'Integración comunitaria'],
  }
]

export default async function ServiciosPage() {
  // 1. Traemos los proyectos reales para usar sus fotos como portada de cada servicio
  const projects = await getProjects()

  // Helper para buscar una imagen real que corresponda al servicio
  const getServiceImage = (categorySlug: string) => {
    // Mapeo manual de slugs si es necesario (ej: 'caminos' -> 'caminos-artesanales')
    const targetSlug = categorySlug === 'caminos' ? 'caminos-artesanales' : categorySlug
    
    // Buscamos un proyecto de esa categoría que tenga imagen
    const project = projects.find(p => p.category?.slug === targetSlug)
    return project?.main_image_url || null
  }

  return (
    <main className="bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
           <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">Nuestros Servicios</h1>
           <p className="text-xl text-slate-300 max-w-2xl mx-auto">
             Soluciones integrales en ingeniería civil y arquitectura para el desarrollo de México.
           </p>
        </div>
      </section>

      {/* Lista de Servicios */}
      <section className="py-16">
        <div className="container mx-auto px-4 space-y-24">
          {services.map((service, index) => {
             // Buscamos una foto real para ilustrar el servicio
             const serviceImage = getServiceImage(service.slug)
             
             return (
              <div key={service.slug} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
                {/* Lado Imagen */}
                <div className="w-full lg:w-1/2 relative h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
                  {serviceImage ? (
                    <Image 
                      src={serviceImage} 
                      alt={service.title} 
                      fill 
                      className="object-cover hover:scale-105 transition-transform duration-700"
                    />
                  ) : (
                    <div className="w-full h-full bg-slate-200 flex items-center justify-center text-slate-400">
                      <span className="text-4xl opacity-20">🏗️</span>
                    </div>
                  )}
                  {/* Icono flotante */}
                  <div className="absolute top-4 left-4 text-4xl bg-white p-3 rounded-xl shadow-lg border border-slate-100">
                    {service.icon}
                  </div>
                </div>

                {/* Lado Contenido */}
                <div className="w-full lg:w-1/2 space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-display">{service.title}</h2>
                  <p className="text-lg text-slate-600 leading-relaxed">{service.description}</p>
                  
                  <ul className="space-y-3 bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-slate-700 font-medium">
                        <svg className="w-5 h-5 text-sky-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4">
                    <Link 
                      href="/proyectos"
                      className="inline-flex items-center text-sky-600 font-bold hover:text-sky-800 transition-colors border-b-2 border-sky-100 hover:border-sky-600 pb-1"
                    >
                      Ver proyectos relacionados
                      <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
             )
          })}
        </div>
      </section>

      <CTASection 
        title="¿Necesita una solución específica?"
        description="Contáctenos para evaluar su proyecto con nuestros especialistas técnicos."
        primaryButtonText="Hablar con un Ingeniero"
      />
    </main>
  )
}