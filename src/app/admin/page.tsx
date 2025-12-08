'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Eye, EyeOff, Lock, User, Building2, AlertCircle } from 'lucide-react'

export default function AdminLoginPage() {
  const router = useRouter()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      })

      const data = await response.json()

      if (response.ok) {
        router.push('/admin/dashboard')
        router.refresh()
      } else {
        setError(data.error || 'Credenciales incorrectas')
      }
    } catch (err) {
      setError('Error de conexión. Intenta de nuevo.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div 
      className="min-h-screen flex items-center justify-center p-6"
      style={{
        background: 'linear-gradient(135deg, #0f2439 0%, #1A3A52 50%, #0d1f30 100%)',
      }}
    >
      {/* Patrón decorativo */}
      <div 
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #ffffff 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Card de Login */}
      <div 
        className="relative w-full max-w-md p-8 rounded-2xl"
        style={{
          background: 'rgba(255,255,255,0.98)',
          boxShadow: '0 25px 50px rgba(0,0,0,0.3)',
        }}
      >
        {/* Logo */}
        <div className="text-center mb-8">
          <div 
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4"
            style={{
              background: 'linear-gradient(135deg, #1A3A52 0%, #0f2439 100%)',
            }}
          >
            <Building2 className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl font-black" style={{ color: '#1A3A52' }}>
            Costa G Admin
          </h1>
          <p className="text-sm mt-1" style={{ color: '#64748b' }}>
            Panel de Administración
          </p>
        </div>

        {/* Formulario */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Error */}
          {error && (
            <div 
              className="flex items-center gap-3 p-4 rounded-xl"
              style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)' }}
            >
              <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
              <span className="text-sm text-red-600">{error}</span>
            </div>
          )}

          {/* Usuario */}
          <div>
            <label className="block text-sm font-semibold mb-2" style={{ color: '#1A3A52' }}>
              Usuario
            </label>
            <div className="relative">
              <User 
                className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5" 
                style={{ color: '#94a3b8' }} 
              />
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Ingresa tu usuario"
                required
                className="w-full pl-12 pr-4 py-3 rounded-xl transition-all duration-300"
                style={{
                  background: '#f8fafc',
                  border: '2px solid #e2e8f0',
                  color: '#1A3A52',
                  outline: 'none',
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#87CEEB'
                  e.target.style.boxShadow = '0 0 0 3px rgba(135,206,235,0.2)'
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#e2e8f0'
                  e.target.style.boxShadow = 'none'
                }}
              />
            </div>
          </div>

          {/* Contraseña */}
          <div>
            <label className="block text-sm font-semibold mb-2" style={{ color: '#1A3A52' }}>
              Contraseña
            </label>
            <div className="relative">
              <Lock 
                className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5" 
                style={{ color: '#94a3b8' }} 
              />
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Ingresa tu contraseña"
                required
                className="w-full pl-12 pr-12 py-3 rounded-xl transition-all duration-300"
                style={{
                  background: '#f8fafc',
                  border: '2px solid #e2e8f0',
                  color: '#1A3A52',
                  outline: 'none',
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#87CEEB'
                  e.target.style.boxShadow = '0 0 0 3px rgba(135,206,235,0.2)'
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#e2e8f0'
                  e.target.style.boxShadow = 'none'
                }}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2"
                style={{ color: '#94a3b8' }}
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Botón de Login */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 rounded-xl font-bold text-white transition-all duration-300 disabled:opacity-50"
            style={{
              background: loading 
                ? '#94a3b8' 
                : 'linear-gradient(135deg, #D4AF37 0%, #B8860B 100%)',
              boxShadow: loading ? 'none' : '0 10px 30px rgba(212,175,55,0.3)',
            }}
            onMouseEnter={(e) => {
              if (!loading) {
                e.currentTarget.style.transform = 'translateY(-2px)'
                e.currentTarget.style.boxShadow = '0 15px 40px rgba(212,175,55,0.4)'
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(212,175,55,0.3)'
            }}
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Iniciando sesión...
              </span>
            ) : (
              'Iniciar Sesión'
            )}
          </button>
        </form>

        {/* Footer */}
        <div className="mt-8 pt-6 text-center" style={{ borderTop: '1px solid #e2e8f0' }}>
          <p className="text-xs" style={{ color: '#94a3b8' }}>
            Costa G © 2024 - Panel de Administración
          </p>
        </div>
      </div>
    </div>
  )
}
