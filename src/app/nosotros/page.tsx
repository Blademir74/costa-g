import { Metadata } from 'next'
import Image from 'next/image'
import { Button, CTASection } from '@/components/ui'

export const metadata: Metadata = {
  title: 'Nosotros | Nuestra Historia',
  description: 
    'Conoce Costa G: 7 años de experiencia, 243+ puentes rehabilitados, 17 proyectos completados. ' +
    'Constructora bio-sustentable comprometida con Guerrero desde 2018.',
}

/* ============================================
   DATOS REALES DEL CURRÍCULUM
   ============================================ */

// Misión y valores del currículum
const identidad = {
  mision: 'Construir con los menores procesos contaminantes y dejar en cada obra una huella de carbono menor para preservar nuestro mundo. Buscamos ser una empresa certificada en edificaciones Bio-Sustentables.',
  filosofia: 'Nos identificamos como una empresa responsable, comprometidos con las necesidades de nuestros clientes.',
}

const valores = [
  { 
    nombre: 'Honestidad', 
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="w-8 h-8">
      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
    </svg>`,
    descripcion: 'Transparencia en cada proceso, desde la cotización hasta la entrega final.' 
  },
  { 
    nombre: 'Capacidad', 
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="w-8 h-8">
      <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
    </svg>`,
    descripcion: 'Equipo técnico profesional para cumplir cualquier desafío de tiempo y costo.' 
  },
  { 
    nombre: 'Responsabilidad', 
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="w-8 h-8">
      <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
    </svg>`,
    descripcion: 'Cumplimos con los compromisos en plazos y especificaciones técnicas.' 
  },
  { 
    nombre: 'Proactividad', 
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="w-8 h-8">
      <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
    </svg>`,
    descripcion: 'Anticipamos necesidades y proponemos soluciones antes de que surjan.' 
  },
]

// Timeline real 2018-2024
const timelineHitos = [
  { 
    año: '2018', 
    titulo: 'Inicio de Operaciones', 
    subtitulo: '243 puentes en Estado de México',
    descripcion: 'Primeros contratos de conservación de puentes con el STC. Se intervienen 110 puentes en Zona Texcoco y 133 en Zona Toluca.',
    logro: '243 puentes',
    imagen: '/images/projects/puente-el-naranjo.png',
    color: 'from-sky-500 to-sky-600',
  },
  { 
    año: '2019', 
    titulo: 'Expansión a Guerrero', 
    subtitulo: 'Primer proyecto educativo',
    descripcion: 'Ingreso al sector de infraestructura educativa con la construcción de aulas en Tlapa de Comonfort para SDUOPOT.',
    logro: '2 contratos',
    imagen: '/images/projects/aulas-Col. El Dorado.png',
    color: 'from-violet-500 to-violet-600',
  },
  { 
    año: '2020', 
    titulo: 'Diversificación', 
    subtitulo: 'Nuevas líneas de servicio',
    descripcion: 'Ampliación a canchas deportivas, techados y muros de contención en la Región Montaña.',
    logro: '2 obras',
    imagen: '/images/projects/cancha-Xochihuehuetlan.png',
    color: 'from-emerald-500 to-emerald-600',
  },
  { 
    año: '2021', 
    titulo: 'Consolidación', 
    subtitulo: 'Reconocimiento por cumplimiento',
    descripcion: 'Fortalecimiento en Guerrero con proyectos educativos en múltiples municipios.',
    logro: '100% entregas',
    imagen: '/images/projects/aula-tlapa2.png',
    color: 'from-amber-500 to-amber-600',
  },
  { 
    año: '2022', 
    titulo: 'Pavimentación Urbana', 
    subtitulo: 'Costa Chica de Guerrero',
    descripcion: 'Entrada al sector de pavimentación con concreto hidráulico en Ometepec.',
    logro: '2 calles',
    imagen: '/images/projects/pavimentacion-ometepec.png',
    color: 'from-orange-500 to-orange-600',
  },
  { 
    año: '2023', 
    titulo: 'Caminos Artesanales', 
    subtitulo: '11+ km construidos',
    descripcion: 'Participación en el Programa de Caminos Artesanales del H. Ayuntamiento de Tlapa.',
    logro: '11.2 km',
    imagen: '/images/projects/camino-artesanal-tlapa.png',
    color: 'from-teal-500 to-teal-600',
  },
  { 
    año: '2024', 
    titulo: 'Proyectos Estatales, nacionales', 
    subtitulo: 'Contratos CICAEG',
    descripcion: 'Rehabilitación de carreteras y puentes vehiculares con dependencias estatales.',
    logro: '4 contratos',
    imagen: '/images/projects/rehabilitacion-carretero-ayutla.png',
    color: 'from-rose-500 to-rose-600',
  },
]

// Cifras acumuladas
const cifras = [
  { valor: '243', sufijo: '+', etiqueta: 'Puentes', detalle: 'rehabilitados' },
  { valor: '17', sufijo: '+', etiqueta: 'Proyectos', detalle: 'completados' },
  { valor: '8', sufijo: '', etiqueta: 'Municipios', detalle: 'atendidos' },
  { valor: '100', sufijo: '%', etiqueta: 'Cumplimiento', detalle: 'de plazos' },
]

export default function NosotrosPage() {
  return (
    <main id="main-content">
      {/* ============================================
          HERO SECTION
          ============================================ */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
        
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-sky-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-32">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 mb-6 bg-sky-500/20 backdrop-blur-sm 
                           rounded-full text-sky-400 text-sm font-medium">
              Desde 2018
            </span>
            
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white 
                         leading-[1.08] mb-8 tracking-tight">
              Construyendo el{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-emerald-400">
                futuro
              </span>
              {' '}de Guerrero
            </h1>
            
            <p className="text-xl text-slate-300 leading-relaxed">
              Somos una empresa joven con bases sólidas en ser una constructora Bio-Sustentable. 
              En un corto tiempo hemos desarrollado obras importantes cumpliendo con los costos 
              y tiempos de ejecución.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================
          STATS SECTION
          ============================================ */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {cifras.map((cifra, index) => (
              <div 
                key={cifra.etiqueta}
                className="text-center group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="font-display text-5xl lg:text-6xl font-bold 
                              bg-gradient-to-br from-sky-500 to-sky-600 bg-clip-text text-transparent
                              transition-transform duration-500 group-hover:scale-110">
                  {cifra.valor}<span className="text-4xl">{cifra.sufijo}</span>
                </div>
                <div className="text-slate-800 font-semibold mt-2">{cifra.etiqueta}</div>
                <div className="text-slate-500 text-sm">{cifra.detalle}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          TIMELINE SECTION - VISUAL INTERACTIVO
          ============================================ */}
      <section className="py-24 lg:py-32 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-20">
            <span className="text-sm font-semibold text-sky-600 tracking-wide uppercase">
              Nuestra Evolución
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mt-4">
              7 Años de Crecimiento
            </h2>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Central Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-sky-500 via-emerald-500 to-amber-500 
                          hidden lg:block transform -translate-x-1/2" />

            {/* Timeline Items */}
            <div className="space-y-12 lg:space-y-24">
              {timelineHitos.map((hito, index) => {
                const isEven = index % 2 === 0
                
                return (
                  <div 
                    key={hito.año}
                    className={`relative flex flex-col lg:flex-row items-center gap-8 lg:gap-16
                              ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                  >
                    {/* Image Side */}
                    <div className={`w-full lg:w-5/12 ${isEven ? 'lg:text-right' : 'lg:text-left'}`}>
                      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl
                                    group cursor-pointer">
                        <Image
                          src={hito.imagen}
                          alt={`${hito.titulo} - ${hito.año}`}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        
                        {/* Year Badge */}
                        <div className={`absolute top-4 ${isEven ? 'right-4' : 'left-4'}
                                      px-4 py-2 rounded-full bg-gradient-to-r ${hito.color}
                                      text-white font-bold text-lg shadow-lg`}>
                          {hito.año}
                        </div>
                        
                        {/* Logro Badge */}
                        <div className={`absolute bottom-4 ${isEven ? 'right-4' : 'left-4'}
                                      px-4 py-2 rounded-xl bg-white/95 backdrop-blur-sm`}>
                          <span className="font-bold text-slate-800">{hito.logro}</span>
                        </div>
                      </div>
                    </div>

                    {/* Center Dot - Desktop */}
                    <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2
                                  w-6 h-6 rounded-full bg-white border-4 border-sky-500 shadow-lg z-10" />

                    {/* Content Side */}
                    <div className={`w-full lg:w-5/12 ${isEven ? 'lg:text-left' : 'lg:text-right'}`}>
                      <div className={`p-8 bg-white rounded-2xl shadow-lg border border-slate-100
                                    hover:shadow-xl transition-shadow duration-300`}>
                        <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold
                                       bg-gradient-to-r ${hito.color} text-white mb-4`}>
                          {hito.subtitulo}
                        </span>
                        <h3 className="font-display text-2xl font-bold text-slate-800 mb-4">
                          {hito.titulo}
                        </h3>
                        <p className="text-slate-600 leading-relaxed">
                          {hito.descripcion}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          MISSION & VALUES
          ============================================ */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Mission */}
          <div className="max-w-4xl mx-auto text-center mb-20">
            <span className="text-sm font-semibold text-sky-600 tracking-wide uppercase">
              Nuestra Misión
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mt-4 mb-8">
              Construir con{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-sky-500">
                responsabilidad
              </span>
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              {identidad.mision}
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {valores.map((valor, index) => (
              <div 
                key={valor.nombre}
                className="group p-8 bg-slate-50 rounded-2xl border border-slate-100
                         hover:bg-white hover:shadow-xl hover:-translate-y-2
                         transition-all duration-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div 
                  className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-sky-500 to-sky-600
                           flex items-center justify-center text-white
                           group-hover:scale-110 group-hover:rotate-3
                           transition-transform duration-500"
                  dangerouslySetInnerHTML={{ __html: valor.icon }}
                />
                <h3 className="font-display text-xl font-bold text-slate-800 mb-3">
                  {valor.nombre}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {valor.descripcion}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          CONTACT INFO
          ============================================ */}
      <section className="py-24 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Map Placeholder */}
            <div className="relative aspect-square lg:aspect-[4/3] rounded-3xl overflow-hidden bg-slate-200">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-sky-100 
                                flex items-center justify-center">
                    <svg className="w-10 h-10 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="font-display text-xl font-bold text-slate-800 mb-2">
                    Chilpancingo, Guerrero
                  </h3>
                  <p className="text-slate-500">Capital del estado</p>
                </div>
              </div>
            </div>

            {/* Contact Details */}
            <div>
              <span className="text-sm font-semibold text-sky-600 tracking-wide uppercase">
                Ubicación
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-800 mt-4 mb-8">
                Oficinas Centrales
              </h2>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-sky-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
                            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1">Dirección</h4>
                    <p className="text-slate-600 leading-relaxed">
                      Galo Soberón y Parra, Edif. C, Depto. #302<br />
                      Col. Las Torres, C.P. 39076<br />
                      Chilpancingo, Guerrero
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-sky-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1">Teléfono</h4>
                    <a href="tel:+527472735934" className="text-sky-600 hover:underline text-lg">
                      747 273 5934
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-sky-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1">Correo</h4>
                    <a href="mailto:Inmob.costag@Hotmail.com" className="text-sky-600 hover:underline">
                      Inmob.costag@Hotmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <Button href="/contacto" size="lg">
                  Enviar Mensaje
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          CTA SECTION
          ============================================ */}
      <CTASection
        title="¿Listo para su próximo proyecto?"
        description="Contamos con la experiencia y el equipo técnico para hacer realidad su visión."
        primaryButtonText="Solicitar Cotización"
      />
    </main>
  )
}
