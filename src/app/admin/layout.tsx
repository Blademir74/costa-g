'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'
import { createClient } from '@/utils/supabase/client'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const supabase = createClient()
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      setUser(user)
      setLoading(false)
    }
    checkUser()
  }, [supabase])

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    if (error) alert('Error: ' + error.message)
    else window.location.reload()
    setLoading(false)
  }

  const handleLogout = async () => {
    await supabase.auth.signOut()
    window.location.href = '/'
  }

  if (loading) return <div className="min-h-screen flex items-center justify-center bg-slate-50">Cargando...</div>

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-100">
        <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center font-display">Costa G Admin</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-1">Correo</label>
              <input 
                type="email" 
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="w-full p-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-sky-500 outline-none"
                placeholder="admin@costag.com"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-1">Contraseña</label>
              <input 
                type="password" 
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="w-full p-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-sky-500 outline-none"
                placeholder="••••••••"
              />
            </div>
            <button type="submit" className="w-full py-3 bg-slate-900 text-white font-bold rounded-lg hover:bg-sky-600 transition-colors">
              Iniciar Sesión
            </button>
          </form>
          <div className="mt-4 text-center">
            <Link href="/" className="text-sm text-slate-500 hover:text-sky-600">← Volver al sitio</Link>
          </div>
        </div>
      </div>
    )
  }

  // ✅ AQUÍ ESTÁ EL CAMBIO CLAVE: Agregamos 'Proyectos' al menú
  const menuItems = [
    { name: 'Configuración Home', href: '/admin/config', icon: '🏠' },
    { name: 'Gestión de Proyectos', href: '/admin/proyectos', icon: '🏗️' },
  ]

  return (
    <div className="min-h-screen bg-slate-50 flex">
      <aside className="w-64 bg-slate-900 text-white flex-shrink-0 hidden md:flex flex-col">
        <div className="p-6 border-b border-slate-800">
          <h1 className="font-display font-bold text-xl">Costa G Admin</h1>
          <p className="text-xs text-slate-400 mt-1">Panel de Control</p>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          {menuItems.map(item => (
            <Link 
              key={item.href} 
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                pathname.startsWith(item.href) ? 'bg-sky-600 text-white shadow-lg' : 'text-slate-400 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <span>{item.icon}</span>
              <span className="font-medium">{item.name}</span>
            </Link>
          ))}
        </nav>
        <div className="p-4 border-t border-slate-800">
          <button 
            onClick={handleLogout}
            className="flex items-center gap-2 text-sm text-red-400 hover:text-red-300 w-full px-4 py-2"
          >
            <span>🚪</span> Cerrar Sesión
          </button>
        </div>
      </aside>

      <main className="flex-1 overflow-y-auto">
        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  )
}