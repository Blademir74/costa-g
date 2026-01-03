import Link from 'next/link'

interface FooterProps {
  facebook?: string
  instagram?: string
  linkedin?: string
  whatsapp?: string
}

export default function Footer({ facebook, instagram, linkedin, whatsapp = '527472735934' }: FooterProps) {
  return (
    <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Columna 1: Marca */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-display font-bold text-white mb-4">Costa G</h3>
            <p className="text-sm leading-relaxed mb-6">
              Infraestructura que transforma comunidades. Construcción bio-sustentable con certificación estatal y federal.
            </p>
            <div className="flex gap-4">
              {/* Iconos Sociales */}
              {facebook && (
                <a href={facebook} target="_blank" rel="noopener" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-sky-600 hover:text-white transition-all">
                  <span className="sr-only">Facebook</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
              )}
              {instagram && (
                <a href={instagram} target="_blank" rel="noopener" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-pink-600 hover:text-white transition-all">
                  <span className="sr-only">Instagram</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
              )}
            </div>
          </div>

          {/* Columna 2: Enlaces */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-xs">Menú</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-white transition-colors">Inicio</Link></li>
              <li><Link href="/proyectos" className="hover:text-white transition-colors">Portafolio</Link></li>
              <li><Link href="/servicios" className="hover:text-white transition-colors">Servicios</Link></li>
              <li><Link href="/nosotros" className="hover:text-white transition-colors">Nosotros</Link></li>
            </ul>
          </div>

          {/* Columna 3: Servicios */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-xs">Especialidades</h4>
            <ul className="space-y-2 text-sm">
              <li>Rehabilitación de Puentes</li>
              <li>Caminos Artesanales</li>
              <li>Pavimentación Hidráulica</li>
              <li>Infraestructura Educativa</li>
            </ul>
          </div>

          {/* Columna 4: Contacto */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-xs">Contacto</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <span>📍</span>
                <span>Chilpancingo, Guerrero.<br/>Cobertura Estatal y Nacional.</span>
              </li>
              <li className="flex gap-3">
                <span>📞</span>
                <a href={`https://wa.me/${whatsapp}`} className="hover:text-white">747 273 5934</a>
              </li>
              <li className="flex gap-3">
                <span>📧</span>
                <a href="mailto:Inmob.costag@Hotmail.com" className="hover:text-white">Inmob.costag@Hotmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900 text-center text-xs text-slate-600">
          <p>&copy; {new Date().getFullYear()} Costa G S.A. de C.V. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}