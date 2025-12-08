'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import {
  LayoutDashboard,
  FolderKanban,
  Wrench,
  FileText,
  Users,
  Settings,
  LogOut,
  Menu,
  X,
  Building2,
  Bell,
  ChevronDown,
  Home,
  Image,
} from 'lucide-react'

// ========================================
// TIPOS
// ========================================

interface NavItem {
  label: string
  href: string
  icon: React.ComponentType<{ className?: string }>
}

// ========================================
// NAVEGACIÓN DEL SIDEBAR
// ========================================

const navItems: NavItem[] = [
  { label: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard },
  { label: 'Proyectos', href: '/admin/proyectos', icon: FolderKanban },
  { label: 'Servicios', href: '/admin/servicios', icon: Wrench },
  { label: 'Blog', href: '/admin/blog', icon: FileText },
  { label: 'Leads', href: '/admin/leads', icon: Users },
  { label: 'Medios', href: '/admin/medios', icon: Image },
  { label: 'Configuración', href: '/admin/configuracion', icon: Settings },
]

// ========================================
// COMPONENTE SIDEBAR
// ========================================

function Sidebar({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const pathname = usePathname()
  const router = useRouter()

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' })
      router.push('/admin')
      router.refresh()
    } catch (error) {
      console.error('Error al cerrar sesión:', error)
    }
  }

  return (
    <>
      {/* Overlay móvil */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-full w-64 z-50
          transform transition-transform duration-300 ease-in-out
          lg:translate-x-0
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
        style={{
          background: 'linear-gradient(180deg, #1A3A52 0%, #0f2439 100%)',
        }}
      >
        {/* Logo */}
        <div className="p-6 flex items-center justify-between">
          <Link href="/admin/dashboard" className="flex items-center gap-3">
            <div 
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #D4AF37 0%, #B8860B 100%)' }}
            >
              <Building2 className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="font-bold text-white text-lg">Costa G</span>
              <span className="block text-xs text-white/50">Admin Panel</span>
            </div>
          </Link>
          <button onClick={onClose} className="lg:hidden text-white/60 hover:text-white">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Navegación */}
        <nav className="px-4 py-6">
          <ul className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href || pathname?.startsWith(item.href + '/')

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className={`
                      flex items-center gap-3 px-4 py-3 rounded-xl
                      transition-all duration-200
                      ${isActive 
                        ? 'bg-white/10 text-white' 
                        : 'text-white/60 hover:bg-white/5 hover:text-white'
                      }
                    `}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                    {isActive && (
                      <span 
                        className="ml-auto w-2 h-2 rounded-full"
                        style={{ background: '#D4AF37' }}
                      />
                    )}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        {/* Footer del Sidebar */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-white/10">
          <Link
            href="/"
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-white/60 hover:bg-white/5 hover:text-white transition-all duration-200 mb-2"
          >
            <Home className="w-5 h-5" />
            <span className="font-medium">Ver Sitio Web</span>
          </Link>
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-400 hover:bg-red-500/10 transition-all duration-200"
          >
            <LogOut className="w-5 h-5" />
            <span className="font-medium">Cerrar Sesión</span>
          </button>
        </div>
      </aside>
    </>
  )
}

// ========================================
// COMPONENTE HEADER
// ========================================

function Header({ onMenuClick }: { onMenuClick: () => void }) {
  const pathname = usePathname()
  
  // Obtener título de la página actual
  const getPageTitle = () => {
    const item = navItems.find(item => pathname?.startsWith(item.href))
    return item?.label || 'Dashboard'
  }

  return (
    <header 
      className="h-16 px-6 flex items-center justify-between border-b"
      style={{ 
        background: 'white',
        borderColor: '#e2e8f0',
      }}
    >
      <div className="flex items-center gap-4">
        <button 
          onClick={onMenuClick}
          className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
        >
          <Menu className="w-6 h-6" style={{ color: '#1A3A52' }} />
        </button>
        <h1 className="text-xl font-bold" style={{ color: '#1A3A52' }}>
          {getPageTitle()}
        </h1>
      </div>

      <div className="flex items-center gap-4">
        {/* Notificaciones */}
        <button className="relative p-2 rounded-lg hover:bg-gray-100">
          <Bell className="w-5 h-5" style={{ color: '#64748b' }} />
          <span 
            className="absolute top-1 right-1 w-2 h-2 rounded-full"
            style={{ background: '#ef4444' }}
          />
        </button>

        {/* Usuario */}
        <div className="flex items-center gap-3 pl-4 border-l" style={{ borderColor: '#e2e8f0' }}>
          <div 
            className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm"
            style={{ background: 'linear-gradient(135deg, #1A3A52 0%, #0f2439 100%)' }}
          >
            V
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-semibold" style={{ color: '#1A3A52' }}>Vladimir</p>
            <p className="text-xs" style={{ color: '#64748b' }}>Administrador</p>
          </div>
          <ChevronDown className="w-4 h-4" style={{ color: '#64748b' }} />
        </div>
      </div>
    </header>
  )
}

// ========================================
// LAYOUT PRINCIPAL
// ========================================

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const pathname = usePathname()

  // Si estamos en la página de login, no mostrar layout
  if (pathname === '/admin') {
    return <>{children}</>
  }

  return (
    <div className="min-h-screen" style={{ background: '#f8fafc' }}>
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Contenido principal */}
      <div className="lg:ml-64">
        {/* Header */}
        <Header onMenuClick={() => setSidebarOpen(true)} />

        {/* Contenido de la página */}
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  )
}
