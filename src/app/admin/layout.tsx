'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  if (pathname === '/admin') {
    return <>{children}</>
  }

  const handleLogout = () => {
    localStorage.removeItem('costa_g_admin')
    router.push('/admin')
  }

  const navItems = [
    { label: 'Dashboard', href: '/admin/dashboard' },
    { label: 'Proyectos', href: '/admin/proyectos' },
    { label: 'Servicios', href: '/admin/servicios' },
    { label: 'Blog', href: '/admin/blog' },
    { label: 'Leads', href: '/admin/leads' },
    { label: 'Medios', href: '/admin/medios' },
    { label: 'Configuración', href: '/admin/configuracion' },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      <aside className={`fixed top-0 left-0 h-full w-64 z-50 transform transition-transform duration-300 lg:translate-x-0 bg-gradient-to-b from-slate-800 to-slate-900 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-6">
          <Link href="/admin/dashboard" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br from-amber-500 to-amber-600">
              <span className="text-white font-bold">CG</span>
            </div>
            <div>
              <span className="font-bold text-white text-lg">Costa G</span>
              <span className="block text-xs text-white/50">Admin Panel</span>
            </div>
          </Link>
        </div>

        <nav className="px-4 py-6">
          <ul className="space-y-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href || pathname?.startsWith(item.href + '/')
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setSidebarOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${isActive ? 'bg-white/10 text-white' : 'text-white/60 hover:bg-white/5 hover:text-white'}`}
                  >
                    <span className="font-medium">{item.label}</span>
                    {isActive && <span className="ml-auto w-2 h-2 rounded-full bg-amber-500" />}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-white/10">
          <Link href="/" className="flex items-center gap-3 px-4 py-3 rounded-xl text-white/60 hover:bg-white/5 hover:text-white mb-2">
            <span className="font-medium">← Ver Sitio</span>
          </Link>
          <button onClick={handleLogout} className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-400 hover:bg-red-500/10">
            <span className="font-medium">Cerrar Sesión</span>
          </button>
        </div>
      </aside>

      <div className="lg:ml-64">
        <header className="h-16 px-6 flex items-center justify-between border-b border-gray-200 bg-white">
          <button onClick={() => setSidebarOpen(true)} className="lg:hidden p-2 rounded-lg hover:bg-gray-100">
            <span className="text-xl">☰</span>
          </button>
          <div className="flex items-center gap-3 ml-auto">
            <div className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm bg-slate-700">V</div>
            <span className="hidden sm:block text-sm font-semibold text-slate-800">Vladimir</span>
          </div>
        </header>
        <main className="p-6">{children}</main>
      </div>
    </div>
  )
}
