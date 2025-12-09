'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function ContactoPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    setTimeout(() => {
      setSending(false)
      setSent(true)
    }, 1500)
  }

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
            Contáctanos
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
            Hablemos de tu <span className="text-gradient-gold">Proyecto</span>
          </h1>
          <p className="text-xl text-white/70 max-w-2xl">
            Estamos listos para ayudarte. Solicita tu cotización gratuita y sin compromiso.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-slate-50 rounded-3xl p-8 lg:p-10">
              <h2 className="text-2xl font-black text-slate-800 mb-6">Envíanos un mensaje</h2>
              
              {sent ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                    <span className="text-4xl">✅</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">¡Mensaje enviado!</h3>
                  <p className="text-slate-500 mb-6">Nos pondremos en contacto contigo pronto.</p>
                  <button onClick={() => setSent(false)} className="text-sky-600 font-semibold">
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Nombre completo *</label>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:border-sky-400 focus:ring-2 focus:ring-sky-100 outline-none transition-all"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Email *</label>
                      <input 
                        type="email" 
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:border-sky-400 focus:ring-2 focus:ring-sky-100 outline-none transition-all"
                        placeholder="tu@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Teléfono</label>
                      <input 
                        type="tel" 
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:border-sky-400 focus:ring-2 focus:ring-sky-100 outline-none transition-all"
                        placeholder="747 123 4567"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Servicio de interés</label>
                    <select 
                      value={formData.service}
                      onChange={(e) => setFormData({...formData, service: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:border-sky-400 focus:ring-2 focus:ring-sky-100 outline-none transition-all"
                    >
                      <option value="">Selecciona un servicio</option>
                      <option value="construccion">Construcción</option>
                      <option value="remodelacion">Remodelación</option>
                      <option value="materiales">Venta de Materiales</option>
                      <option value="diseno">Diseño Arquitectónico</option>
                      <option value="consultoria">Consultoría</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Mensaje *</label>
                    <textarea 
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:border-sky-400 focus:ring-2 focus:ring-sky-100 outline-none transition-all resize-none"
                      placeholder="Cuéntanos sobre tu proyecto..."
                    />
                  </div>
                  <button 
                    type="submit"
                    disabled={sending}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold text-lg hover:shadow-glow-gold transition-all disabled:opacity-50"
                  >
                    {sending ? 'Enviando...' : 'Enviar Mensaje'}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-black text-slate-800 mb-6">Información de Contacto</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50">
                    <div className="w-12 h-12 rounded-xl bg-sky-100 flex items-center justify-center text-xl flex-shrink-0">📞</div>
                    <div>
                      <h3 className="font-bold text-slate-800">Teléfono</h3>
                      <p className="text-slate-600">747 273 5934</p>
                      <a href="tel:+527472735934" className="text-sky-600 text-sm font-medium">Llamar ahora →</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50">
                    <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center text-xl flex-shrink-0">✉️</div>
                    <div>
                      <h3 className="font-bold text-slate-800">Email</h3>
                      <p className="text-slate-600">Inmob.costag@Hotmail.com</p>
                      <a href="mailto:Inmob.costag@Hotmail.com" className="text-sky-600 text-sm font-medium">Enviar email →</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50">
                    <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center text-xl flex-shrink-0">📍</div>
                    <div>
                      <h3 className="font-bold text-slate-800">Dirección</h3>
                      <p className="text-slate-600">Galo Soberon y Parra, Edif. C, Depto. #302</p>
                      <p className="text-slate-600">Col. Las Torres, C.P. 39076</p>
                      <p className="text-slate-600">Chilpancingo, Guerrero, México</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="p-8 rounded-3xl bg-gradient-to-br from-green-500 to-green-600 text-white">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">WhatsApp</h3>
                    <p className="text-white/80 text-sm">Respuesta más rápida</p>
                  </div>
                </div>
                <p className="text-white/90 mb-6">
                  Escríbenos directamente por WhatsApp y recibe atención personalizada al instante.
                </p>
                <a 
                  href="https://wa.me/527472735934?text=Hola,%20me%20gustaría%20obtener%20información%20sobre%20sus%20servicios%20de%20construcción"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-green-600 font-bold hover:shadow-lg transition-all"
                >
                  💬 Abrir WhatsApp
                </a>
              </div>

              {/* Hours */}
              <div className="p-6 rounded-2xl bg-slate-50">
                <h3 className="font-bold text-slate-800 mb-4">Horario de Atención</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Lunes - Viernes</span>
                    <span className="font-medium text-slate-800">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Sábado</span>
                    <span className="font-medium text-slate-800">9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Domingo</span>
                    <span className="font-medium text-slate-800">Cerrado</span>
                  </div>
                </div>
              </div>
            </div>
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
      <a href="https://wa.me/527472735934?text=Hola,%20me%20gustaría%20cotizar%20un%20proyecto" target="_blank" rel="noopener noreferrer" className="whatsapp-btn animate-pulse-glow">
        <svg viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      </a>
    </div>
  )
}
