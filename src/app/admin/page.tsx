'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AdminLoginPage() {
  const router = useRouter()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    // Credenciales hardcodeadas para demo
    if (username === 'vladimir' && password === '1723Yf74') {
      localStorage.setItem('costa_g_admin', 'true')
      router.push('/admin/dashboard')
    } else {
      setError('Credenciales incorrectas')
    }
    setLoading(false)
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950">
      <div className="w-full max-w-md p-8 rounded-2xl bg-white shadow-2xl">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 bg-gradient-to-br from-slate-700 to-slate-900">
            <span className="text-2xl text-white font-bold">CG</span>
          </div>
          <h1 className="text-2xl font-black text-slate-800">Costa G Admin</h1>
          <p className="text-sm mt-1 text-gray-500">Panel de Administración</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {error && (
            <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-600 text-sm">
              {error}
            </div>
          )}

          <div>
            <label className="block text-sm font-semibold mb-2 text-slate-800">Usuario</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Ingresa tu usuario"
              required
              className="w-full px-4 py-3 rounded-xl bg-gray-50 border-2 border-gray-200 text-slate-800 outline-none focus:border-amber-400"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2 text-slate-800">Contraseña</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Ingresa tu contraseña"
              required
              className="w-full px-4 py-3 rounded-xl bg-gray-50 border-2 border-gray-200 text-slate-800 outline-none focus:border-amber-400"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 rounded-xl font-bold text-white bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 disabled:opacity-50"
          >
            {loading ? 'Iniciando...' : 'Iniciar Sesión'}
          </button>
        </form>

        <div className="mt-8 pt-6 text-center border-t border-gray-200">
          <p className="text-xs text-gray-400">Costa G © 2024</p>
        </div>
      </div>
    </div>
  )
}
