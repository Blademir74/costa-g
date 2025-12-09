import Link from 'next/link'

const services = [
  { id: 'construccion', icon: '🏗️', title: 'Construcción', desc: 'Construcción de obras civiles con los más altos estándares de calidad.', features: ['Puentes vehiculares', 'Caminos artesanales', 'Carreteras', 'Pavimentación', 'Muros de contención', 'Escuelas y canchas'] },
  { id: 'remodelacion', icon: '🔧', title: 'Remodelación', desc: 'Renovación y mejora de espacios existentes para darles nueva vida.', features: ['Remodelación de interiores', 'Ampliaciones', 'Rehabilitación de estructuras', 'Mejoras en acabados'] },
  { id: 'venta-materiales', icon: '🏪', title: 'Venta de Materiales', desc: 'Materiales de construcción de primera calidad para tus proyectos.', features: ['Cemento', 'Varilla', 'Block', 'Arena y grava', 'Materiales eléctricos', 'Plomería'] },
  { id: 'diseno', icon: '📐', title: 'Diseño Arquitectónico', desc: 'Diseño profesional para tus proyectos de construcción.', features: ['Planos arquitectónicos', 'Renders 3D', 'Diseño de interiores', 'Asesoría en diseño'] },
  { id: 'consultoria', icon: '📋', title: 'Consultoría', desc: 'Asesoría técnica especializada en construcción e infraestructura.', features: ['Estudios de factibilidad', 'Supervisión de obra', 'Asesoría técnica', 'Gestión de permisos'] },
]

export default function ServiciosPage() {
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
              <Link href="/servicios" className="text-white text-sm font-medium">Servicios</Link>
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
            ¿Qué hacemos?
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
            Nuestros <span className="text-gradient-gold">Servicios</span>
          </h1>
          <p className="text-xl text-white/70 max-w-2xl">
            Soluciones integrales de construcción con los más altos estándares de calidad y compromiso ambiental.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="space-y-8">
            {services.map((service, index) => (
              <div 
                key={service.id}
                className={`flex flex-col lg:flex-row gap-8 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="lg:w-1/2">
                  <div className="aspect-video rounded-3xl bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 pattern-grid opacity-30" />
                    <span className="text-8xl opacity-50">{service.icon}</span>
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <span className="inline-block px-3 py-1 rounded-full bg-sky-100 text-sky-600 text-xs font-semibold mb-4">
                    Servicio #{index + 1}
                  </span>
                  <h3 className="text-3xl font-black text-slate-800 mb-4">{service.title}</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">{service.desc}</p>
                  <ul className="grid grid-cols-2 gap-3 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-slate-600 text-sm">
                        <span className="text-sky-500">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link 
                    href={`/servicios/${service.id}`}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-sky-600 text-white font-semibold hover:shadow-lg transition-all hover:scale-105"
                  >
                    Ver más detalles
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 gradient-sky">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-6">
            ¿Necesitas alguno de estos servicios?
          </h2>
          <p className="text-xl text-white/70 mb-8">
            Contáctanos hoy y recibe una cotización personalizada sin compromiso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacto" className="px-8 py-4 rounded-2xl bg-white text-sky-600 font-bold text-lg hover:shadow-xl transition-all">
              Solicitar Cotización
            </Link>
            <a href="https://wa.me/527472735934" target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-2xl bg-green-500 text-white font-bold text-lg hover:bg-green-600 transition-all flex items-center justify-center gap-2">
              💬 WhatsApp Directo
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-slate-400">© {new Date().getFullYear()} Costa G. Todos los derechos reservados.</p>
        </div>
      </footer>

      {/* WhatsApp */}
      <a href="https://wa.me/527472735934?text=Hola,%20me%20interesan%20sus%20servicios%20de%20construcción" target="_blank" rel="noopener noreferrer" className="whatsapp-btn animate-pulse-glow">
        <svg viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      </a>
    </div>
  )
}
