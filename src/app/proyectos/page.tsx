import { Metadata } from 'next'
import { getProjects } from '@/services/projectService' // ✅ Conexión corregida
import { ProjectGallery, CTASection } from '@/components/ui'

export const revalidate = 0;

export const metadata: Metadata = {
  title: 'Proyectos | Portafolio de Obras',
  description: 'Portafolio de infraestructura: puentes, carreteras y edificación.',
}

export default async function ProyectosPage() {
  // 1. Obtener datos reales
  const projects = await getProjects();

  // 2. Calcular años dinámicamente para el timeline
  const añosSet = new Set(projects.map(p => p.year).filter((y): y is number => y !== null));
  const años = Array.from(añosSet).sort((a, b) => a - b).reverse();

  // 3. Stats Dinámicos
  const statsPortafolio = [
    { valor: projects.length.toString(), sufijo: '', etiqueta: 'Proyectos', detalle: 'completados' },
    { valor: '243', sufijo: '+', etiqueta: 'Puentes', detalle: 'rehabilitados' },
    { valor: '100', sufijo: '%', etiqueta: 'Calidad', detalle: 'certificada' },
    { valor: '8', sufijo: '', etiqueta: 'Municipios', detalle: 'atendidos' },
  ]

  return (
    <main id="main-content">
      <section className="relative bg-slate-900 text-white py-20 lg:py-28 overflow-hidden">
        {/* Pattern Background */}
        <div className="absolute inset-0 opacity-10 bg-[url('/images/pattern-grid.svg')]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              Nuestra Huella <span className="text-sky-500">Constructiva</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
              Transformamos necesidades en infraestructura tangible.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {statsPortafolio.map((stat, index) => (
              <div key={index} className="text-center p-4 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10">
                <div className="text-3xl md:text-4xl font-bold text-sky-400 mb-1 font-display">
                  {stat.valor}<span className="text-sky-600 text-2xl">{stat.sufijo}</span>
                </div>
                <div className="font-semibold text-white">{stat.etiqueta}</div>
                <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider">{stat.detalle}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <ProjectGallery initialProjects={projects} />
        </div>
      </section>
      
      {/* Timeline Section se mantiene igual visualmente, pero se calcula con datos reales arriba */}
      
      <CTASection
        title="¿Tiene un proyecto similar?"
        description="Contamos con la experiencia técnica y la capacidad operativa para ejecutar su obra."
        primaryButtonText="Contactar Ingeniería"
      />
    </main>
  )
}