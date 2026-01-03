import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Contacto | Solicitar Cotización',
  description: 
    'Contacte a Costa G para su próximo proyecto de infraestructura. ' +
    'Tel: 747 273 5934. Chilpancingo, Guerrero. Respuesta en 24 horas.',
}

/* ============================================
   TIPOS DE PROYECTO PARA SELECT
   ============================================ */

const tiposProyecto = [
  { value: '', label: 'Seleccione un tipo de proyecto' },
  { value: 'puentes', label: '🌉 Rehabilitación de Puentes' },
  { value: 'carreteras', label: '🚗 Rehabilitación de Carreteras' },
  { value: 'caminos', label: '🏔️ Caminos Artesanales' },
  { value: 'pavimentacion', label: '🛤️ Pavimentación Urbana' },
  { value: 'educativa', label: '🏫 Infraestructura Educativa' },
  { value: 'contencion', label: '🧱 Muros de Contención' },
  { value: 'otro', label: '📋 Otro tipo de proyecto' },
]

export default function ContactoPage() {
  return (
    <main id="main-content">
      {/* ============================================
          HERO SECTION
          ============================================ */}
      <section className="relative py-24 lg:py-32 overflow-hidden bg-slate-900">
        {/* Decorative */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sky-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white 
                         leading-[1.08] mb-6 tracking-tight">
              Conversemos
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Cuéntenos sobre su proyecto y le responderemos en menos de 24 horas 
              con una propuesta personalizada.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================
          CONTACT SECTION
          ============================================ */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Form */}
            <div>
              <h2 className="font-display text-2xl lg:text-3xl font-bold text-slate-800 mb-8">
                Solicitar Cotización
              </h2>

              <form 
                action="#" 
                method="POST"
                className="space-y-6"
              >
                {/* Nombre */}
                <div className="group">
                  <label 
                    htmlFor="nombre" 
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    required
                    placeholder="Ej. Juan Pérez García"
                    className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-slate-200
                             text-slate-800 placeholder:text-slate-400
                             focus:border-sky-500 focus:ring-0 focus:outline-none
                             transition-colors duration-300"
                  />
                </div>

                {/* Email */}
                <div className="group">
                  <label 
                    htmlFor="email" 
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="correo@ejemplo.com"
                    className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-slate-200
                             text-slate-800 placeholder:text-slate-400
                             focus:border-sky-500 focus:ring-0 focus:outline-none
                             transition-colors duration-300"
                  />
                </div>

                {/* Teléfono (opcional) */}
                <div className="group">
                  <label 
                    htmlFor="telefono" 
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Teléfono <span className="text-slate-400">(opcional)</span>
                  </label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    placeholder="747 123 4567"
                    className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-slate-200
                             text-slate-800 placeholder:text-slate-400
                             focus:border-sky-500 focus:ring-0 focus:outline-none
                             transition-colors duration-300"
                  />
                </div>

                {/* Tipo de Proyecto */}
                <div className="group">
                  <label 
                    htmlFor="tipo" 
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Tipo de proyecto
                  </label>
                  <select
                    id="tipo"
                    name="tipo"
                    required
                    className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-slate-200
                             text-slate-800
                             focus:border-sky-500 focus:ring-0 focus:outline-none
                             transition-colors duration-300
                             cursor-pointer"
                  >
                    {tiposProyecto.map((tipo) => (
                      <option key={tipo.value} value={tipo.value}>
                        {tipo.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Mensaje */}
                <div className="group">
                  <label 
                    htmlFor="mensaje" 
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Cuéntenos sobre su proyecto
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    rows={4}
                    required
                    placeholder="Describa brevemente el proyecto, ubicación y cualquier detalle relevante..."
                    className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-slate-200
                             text-slate-800 placeholder:text-slate-400
                             focus:border-sky-500 focus:ring-0 focus:outline-none
                             transition-colors duration-300 resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                  <button
                    type="submit"
                    className="w-full py-4 px-8 bg-gradient-to-r from-sky-500 to-sky-600
                             text-white font-semibold rounded-xl
                             shadow-lg shadow-sky-500/25
                             hover:shadow-xl hover:shadow-sky-500/30 hover:-translate-y-0.5
                             focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2
                             transition-all duration-300"
                  >
                    Enviar Mensaje
                  </button>
                </div>

                {/* Privacy Note */}
                <p className="text-xs text-slate-400 text-center">
                  Al enviar este formulario, acepta que Costa G procese sus datos 
                  para responder a su solicitud.
                </p>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="font-display text-2xl lg:text-3xl font-bold text-slate-800 mb-8">
                Información de Contacto
              </h2>

              <div className="space-y-8">
                {/* Oficina */}
                <div className="flex gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-sky-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-7 h-7 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
                            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg text-slate-800 mb-1">
                      Oficinas Centrales
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      Galo Soberón y Parra, Edif. C, Depto. #302<br />
                      Col. Las Torres, C.P. 39076<br />
                      Chilpancingo, Guerrero
                    </p>
                  </div>
                </div>

                {/* Teléfono */}
                <div className="flex gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-7 h-7 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg text-slate-800 mb-1">
                      Teléfono
                    </h3>
                    <a 
                      href="tel:+527472735934" 
                      className="text-xl text-sky-600 font-semibold hover:underline"
                    >
                      747 273 5934
                    </a>
                    <p className="text-sm text-slate-500 mt-1">
                      Lun - Vie: 9:00 - 18:00<br />
                      Sáb: 9:00 - 14:00
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-violet-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-7 h-7 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg text-slate-800 mb-1">
                      Correo Electrónico
                    </h3>
                    <a 
                      href="mailto:Inmob.costag@Hotmail.com" 
                      className="text-sky-600 hover:underline"
                    >
                      Inmob.costag@Hotmail.com
                    </a>
                    <p className="text-sm text-slate-500 mt-1">
                      Respuesta en menos de 24 horas
                    </p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-7 h-7 text-green-600" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg text-slate-800 mb-1">
                      WhatsApp
                    </h3>
                    <a 
                      href="https://wa.me/527472735934?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20los%20servicios%20de%20Costa%20G"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 mt-2
                               bg-green-500 text-white rounded-lg font-medium
                               hover:bg-green-600 transition-colors duration-300"
                    >
                      Enviar mensaje
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-12 aspect-video rounded-2xl bg-slate-100 overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <svg className="w-12 h-12 mx-auto text-slate-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <p className="text-slate-500 font-medium">Chilpancingo, Guerrero</p>
                    <p className="text-slate-400 text-sm">Capital del estado</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          FAQ SECTION
          ============================================ */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h2 className="font-display text-2xl lg:text-3xl font-bold text-slate-800 text-center mb-12">
            Preguntas Frecuentes
          </h2>

          <div className="space-y-6">
            {[
              {
                pregunta: '¿Cuál es el tiempo de respuesta?',
                respuesta: 'Respondemos todas las solicitudes en menos de 24 horas hábiles. Para proyectos urgentes, puede contactarnos directamente por WhatsApp.',
              },
              {
                pregunta: '¿En qué zonas operan?',
                respuesta: 'Operamos principalmente en el estado de Guerrero, con experiencia previa en el Estado de México. Atendemos proyectos en toda la República bajo evaluación.',
              },
              {
                pregunta: '¿Qué información necesitan para cotizar?',
                respuesta: 'Para una cotización precisa necesitamos: ubicación del proyecto, tipo de obra, dimensiones aproximadas y plazo de ejecución deseado.',
              },
              {
                pregunta: '¿Trabajan con dependencias gubernamentales?',
                respuesta: 'Sí, tenemos amplia experiencia con SDUOPOT, CICAEG, y diversos ayuntamientos municipales. Estamos registrados en el padrón de contratistas.',
              },
            ].map((faq, index) => (
              <div 
                key={index}
                className="p-6 bg-white rounded-2xl border border-slate-100"
              >
                <h3 className="font-semibold text-slate-800 mb-2">{faq.pregunta}</h3>
                <p className="text-slate-600 leading-relaxed">{faq.respuesta}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
