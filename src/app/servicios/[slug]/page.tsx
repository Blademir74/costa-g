import Link from 'next/link'
import { notFound } from 'next/navigation'

const servicesData: Record<string, { title: string; description: string; features: string[] }> = {
  construccion: {
    title: 'Construcción',
    description: 'Servicios profesionales de construcción de obras civiles con los más altos estándares de calidad.',
    features: ['Puentes vehiculares', 'Caminos artesanales', 'Carreteras', 'Pavimentación', 'Muros de contención', 'Escuelas y canchas'],
  },
  remodelacion: {
    title: 'Remodelación',
    description: 'Renovación y mejora de espacios existentes para darles nueva vida.',
    features: ['Remodelación de interiores', 'Ampliaciones', 'Rehabilitación de estructuras', 'Mejoras en acabados'],
  },
  'venta-materiales': {
    title: 'Venta de Materiales',
    description: 'Materiales de construcción de primera calidad para tus proyectos.',
    features: ['Cemento', 'Varilla', 'Block', 'Arena y grava', 'Materiales eléctricos', 'Plomería'],
  },
  diseno: {
    title: 'Diseño Arquitectónico',
    description: 'Diseño profesional para tus proyectos de construcción.',
    features: ['Planos arquitectónicos', 'Renders 3D', 'Diseño de interiores', 'Asesoría en diseño'],
  },
  consultoria: {
    title: 'Consultoría',
    description: 'Asesoría técnica especializada en construcción e infraestructura.',
    features: ['Estudios de factibilidad', 'Supervisión de obra', 'Asesoría técnica', 'Gestión de permisos'],
  },
}

export function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({ slug }))
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = servicesData[params.slug]
  
  if (!service) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-slate-800">Costa G</Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-slate-600 hover:text-slate-800">Inicio</Link>
            <Link href="/servicios" className="text-amber-500 font-semibold">Servicios</Link>
            <Link href="/proyectos" className="text-slate-600 hover:text-slate-800">Proyectos</Link>
            <Link href="/contacto" className="px-4 py-2 bg-amber-500 text-white rounded-lg">Contacto</Link>
          </nav>
        </div>
      </header>

      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4">
          <Link href="/servicios" className="text-amber-500 hover:text-amber-600 mb-4 inline-block">
            ← Volver a Servicios
          </Link>
          
          <h1 className="text-4xl font-black text-slate-800 mb-6">{service.title}</h1>
          <p className="text-xl text-gray-600 mb-8">{service.description}</p>

          <div className="bg-gray-50 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">Incluye</h2>
            <ul className="grid md:grid-cols-2 gap-4">
              {service.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="text-amber-500">✓</span>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-slate-800 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">¿Interesado en este servicio?</h3>
            <p className="text-gray-300 mb-6">Contáctanos para una cotización personalizada</p>
            <Link href="/contacto" className="inline-block px-8 py-4 bg-amber-500 text-white font-bold rounded-xl hover:bg-amber-600">
              Solicitar Cotización
            </Link>
          </div>
        </div>
      </main>

      <footer className="py-8 bg-slate-900 text-center text-gray-400">
        <p>© 2024 Costa G. Todos los derechos reservados.</p>
      </footer>
    </div>
  )
}
