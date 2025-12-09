import Link from 'next/link'

export default function ContactoPage() {
  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-slate-800">Costa G</Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-slate-600 hover:text-slate-800">Inicio</Link>
            <Link href="/nosotros" className="text-slate-600 hover:text-slate-800">Nosotros</Link>
            <Link href="/servicios" className="text-slate-600 hover:text-slate-800">Servicios</Link>
            <Link href="/proyectos" className="text-slate-600 hover:text-slate-800">Proyectos</Link>
            <Link href="/contacto" className="px-4 py-2 bg-amber-500 text-white rounded-lg">Contacto</Link>
          </nav>
        </div>
      </header>

      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-black text-slate-800 mb-4">Contacto</h1>
          <p className="text-xl text-gray-600 mb-12">Estamos listos para ayudarte con tu proyecto</p>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-800 mb-2">Nombre completo</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amber-400 outline-none" placeholder="Tu nombre" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-800 mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amber-400 outline-none" placeholder="tu@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-800 mb-2">Teléfono</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amber-400 outline-none" placeholder="747 123 4567" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-800 mb-2">Servicio de interés</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amber-400 outline-none">
                    <option>Selecciona un servicio</option>
                    <option>Construcción</option>
                    <option>Remodelación</option>
                    <option>Venta de Materiales</option>
                    <option>Diseño Arquitectónico</option>
                    <option>Consultoría</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-800 mb-2">Mensaje</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amber-400 outline-none resize-none" placeholder="Cuéntanos sobre tu proyecto..."></textarea>
                </div>
                <button type="submit" className="w-full py-4 bg-amber-500 text-white font-bold rounded-xl hover:bg-amber-600">
                  Enviar Mensaje
                </button>
              </form>
            </div>

            <div className="space-y-8">
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-slate-800 mb-6">Información de Contacto</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-4">
                    <span className="text-2xl">📞</span>
                    <div>
                      <p className="font-semibold text-slate-800">Teléfono</p>
                      <p className="text-gray-600">747 273 5934</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-4">
                    <span className="text-2xl">✉️</span>
                    <div>
                      <p className="font-semibold text-slate-800">Email</p>
                      <p className="text-gray-600">Inmob.costag@Hotmail.com</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-4">
                    <span className="text-2xl">📍</span>
                    <div>
                      <p className="font-semibold text-slate-800">Dirección</p>
                      <p className="text-gray-600">Galo Soberon y Parra, Edif. C, Depto. #302<br/>Col. Las Torres, C.P. 39076<br/>Chilpancingo, Guerrero</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-slate-800 rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold mb-4">WhatsApp</h3>
                <p className="text-gray-300 mb-6">Escríbenos directamente por WhatsApp para una respuesta más rápida.</p>
                <a href="https://wa.me/527472735934" target="_blank" className="inline-block px-6 py-3 bg-green-500 text-white font-bold rounded-xl hover:bg-green-600">
                  💬 Abrir WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="py-8 bg-slate-900 text-center text-gray-400">
        <p>© 2024 Costa G. Todos los derechos reservados.</p>
      </footer>
    </div>
  )
}
