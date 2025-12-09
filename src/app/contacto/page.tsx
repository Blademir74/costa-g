'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    linea: 'construccion',
    asunto: 'Cotización de proyecto',
    mensaje: '',
  })
  const [enviando, setEnviando] = useState(false)
  const [enviado, setEnviado] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setEnviando(true)
    
    // Simular envío
    setTimeout(() => {
      setEnviando(false)
      setEnviado(true)
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-costa-light">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-costa-secondary/95 backdrop-blur-md border-b border-white/10">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-costa-gold flex items-center justify-center">
              <span className="text-costa-secondary font-black text-xl">CG</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-bold text-white text-xl">COSTA G</span>
              <span className="block text-[10px] text-costa-gold">Constructora & Inmobiliaria</span>
            </div>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-white/70 hover:text-white text-sm font-medium">INICIO</Link>
            <Link href="/servicios" className="text-white/70 hover:text-white text-sm font-medium">SERVICIOS</Link>
            <Link href="/proyectos" className="text-white/70 hover:text-white text-sm font-medium">PROYECTOS</Link>
            <Link href="/materiales" className="text-white/70 hover:text-white text-sm font-medium">MATERIALES</Link>
            <Link href="/contacto" className="text-white text-sm font-medium">CONTACTO</Link>
          </div>
          <Link href="/contacto">
            <button className="bg-costa-gold text-costa-secondary px-6 py-2.5 rounded font-bold text-sm">
              COTIZAR
            </button>
          </Link>
        </nav>
      </header>

      {/* Hero */}
      <section className="pt-24 pb-16 bg-costa-secondary">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-costa-gold/20 text-costa-gold text-sm font-semibold mb-6">
            Contáctanos
          </span>
          <h1 className="text-4xl lg:text-6xl font-black text-white mb-6">
            Hablemos de tu <span className="text-costa-gold">Proyecto</span>
          </h1>
          <p className="text-xl text-white/70 max-w-2xl">
            Estamos listos para ayudarte. Selecciona tu línea de interés y te responderemos en menos de 24 horas.
          </p>
        </div>
      </section>

      {/* Opciones de Contacto */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* WhatsApp */}
            <a 
              href="https://wa.me/527472735934?text=Hola,%20me%20interesa%20obtener%20información%20sobre%20sus%20servicios" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group bg-white border-2 border-gray-200 rounded-2xl p-8 text-center hover:border-green-500 hover:shadow-xl transition-all"
            >
              <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6 group-hover:bg-green-500 transition-colors">
                <svg className="w-10 h-10 text-green-600 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-costa-secondary mb-2">WhatsApp</h3>
              <p className="text-gray-500 text-sm mb-4">Respuesta inmediata durante horarios de oficina</p>
              <p className="text-green-600 font-bold text-lg">747 273 5934</p>
            </a>

            {/* Teléfono */}
            <a 
              href="tel:+527472735934"
              className="group bg-white border-2 border-gray-200 rounded-2xl p-8 text-center hover:border-costa-gold hover:shadow-xl transition-all"
            >
              <div className="w-20 h-20 rounded-full bg-costa-gold/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-costa-gold transition-colors">
                <span className="text-4xl group-hover:scale-110 transition-transform">📞</span>
              </div>
              <h3 className="text-xl font-bold text-costa-secondary mb-2">Teléfono</h3>
              <p className="text-gray-500 text-sm mb-4">Llama directo a nuestros ejecutivos</p>
              <p className="text-costa-gold font-bold text-lg">747 273 5934</p>
            </a>

            {/* Email */}
            <a 
              href="mailto:Inmob.costag@Hotmail.com"
              className="group bg-white border-2 border-gray-200 rounded-2xl p-8 text-center hover:border-costa-secondary hover:shadow-xl transition-all"
            >
              <div className="w-20 h-20 rounded-full bg-costa-secondary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-costa-secondary transition-colors">
                <span className="text-4xl group-hover:scale-110 transition-transform">✉️</span>
              </div>
              <h3 className="text-xl font-bold text-costa-secondary mb-2">Email</h3>
              <p className="text-gray-500 text-sm mb-4">Envíanos un correo detallado</p>
              <p className="text-costa-secondary font-bold text-sm break-all">Inmob.costag@Hotmail.com</p>
            </a>
          </div>

          {/* Formulario */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-gray-50 rounded-3xl p-8 lg:p-12 border border-gray-200">
              <h2 className="text-2xl font-black text-costa-secondary mb-2">Formulario de Contacto</h2>
              <p className="text-gray-500 mb-8">Completa el formulario y te contactaremos en menos de 24 horas.</p>

              {enviado ? (
                <div className="text-center py-12">
                  <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                    <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-costa-secondary mb-2">¡Mensaje Enviado!</h3>
                  <p className="text-gray-500 mb-6">Gracias por contactarnos. Nos pondremos en contacto contigo pronto.</p>
                  <button 
                    onClick={() => setEnviado(false)} 
                    className="text-costa-gold font-semibold hover:underline"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Línea de Interés */}
                  <div>
                    <label className="block text-sm font-bold text-costa-secondary mb-2">
                      Línea de Interés *
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { id: 'construccion', label: 'Construcción', icon: '🏗️' },
                        { id: 'inmobiliaria', label: 'Inmobiliaria', icon: '🏢' },
                        { id: 'materiales', label: 'Materiales', icon: '⚙️' },
                      ].map(linea => (
                        <button
                          key={linea.id}
                          type="button"
                          onClick={() => setFormData({...formData, linea: linea.id})}
                          className={`p-4 rounded-xl border-2 text-center transition-all ${
                            formData.linea === linea.id
                              ? 'border-costa-gold bg-costa-gold/10'
                              : 'border-gray-200 bg-white hover:border-costa-gold/50'
                          }`}
                        >
                          <span className="text-2xl block mb-1">{linea.icon}</span>
                          <span className="text-sm font-semibold text-costa-secondary">{linea.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Nombre */}
                  <div>
                    <label className="block text-sm font-bold text-costa-secondary mb-2">
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.nombre}
                      onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white focus:border-costa-gold focus:ring-2 focus:ring-costa-gold/20 outline-none transition-all"
                      placeholder="Tu nombre completo"
                    />
                  </div>

                  {/* Email y Teléfono */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-costa-secondary mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white focus:border-costa-gold focus:ring-2 focus:ring-costa-gold/20 outline-none transition-all"
                        placeholder="tu@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-costa-secondary mb-2">
                        Teléfono *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.telefono}
                        onChange={(e) => setFormData({...formData, telefono: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white focus:border-costa-gold focus:ring-2 focus:ring-costa-gold/20 outline-none transition-all"
                        placeholder="747 123 4567"
                      />
                    </div>
                  </div>

                  {/* Asunto */}
                  <div>
                    <label className="block text-sm font-bold text-costa-secondary mb-2">
                      Asunto *
                    </label>
                    <select
                      required
                      value={formData.asunto}
                      onChange={(e) => setFormData({...formData, asunto: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white focus:border-costa-gold focus:ring-2 focus:ring-costa-gold/20 outline-none transition-all"
                    >
                      <option>Cotización de proyecto</option>
                      <option>Consultoría técnica</option>
                      <option>Compra de materiales</option>
                      <option>Información general</option>
                      <option>Otro</option>
                    </select>
                  </div>

                  {/* Mensaje */}
                  <div>
                    <label className="block text-sm font-bold text-costa-secondary mb-2">
                      Mensaje *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.mensaje}
                      onChange={(e) => setFormData({...formData, mensaje: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white focus:border-costa-gold focus:ring-2 focus:ring-costa-gold/20 outline-none transition-all resize-none"
                      placeholder="Cuéntanos sobre tu proyecto..."
                    />
                  </div>

                  {/* Botón */}
                  <button
                    type="submit"
                    disabled={enviando}
                    className="w-full bg-costa-gold text-costa-secondary py-4 rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-costa-gold/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {enviando ? 'ENVIANDO...' : 'ENVIAR MENSAJE'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Información Adicional */}
      <section className="py-16 bg-costa-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Dirección */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Oficina Principal</h3>
              <div className="space-y-4 text-white/70">
                <p className="flex items-start gap-3">
                  <span className="text-costa-gold text-xl">📍</span>
                  <span>
                    Galo Soberon y Parra, Edif. C, Depto. #302<br/>
                    Col. Las Torres, C.P. 39076<br/>
                    Chilpancingo, Guerrero, México
                  </span>
                </p>
                <p className="flex items-center gap-3">
                  <span className="text-costa-gold text-xl">🕐</span>
                  <span>Lunes a Viernes: 9:00 AM - 6:00 PM<br/>Sábado: 9:00 AM - 2:00 PM</span>
                </p>
              </div>
            </div>

            {/* Mapa placeholder */}
            <div className="bg-costa-dark/50 rounded-2xl h-64 flex items-center justify-center">
              <div className="text-center text-white/50">
                <span className="text-4xl block mb-2">🗺️</span>
                <p>Mapa próximamente</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-costa-dark text-white py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-white/50">© {new Date().getFullYear()} COSTA G - Constructora e Inmobiliaria. Todos los derechos reservados.</p>
        </div>
      </footer>

      {/* WhatsApp */}
      <a href="https://wa.me/527472735934?text=Hola,%20me%20gustaría%20cotizar%20un%20proyecto" target="_blank" rel="noopener noreferrer" className="whatsapp-btn animate-pulse-glow">
        <svg viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      </a>
    </div>
  )
}
