'use client';
import React, { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Hexagon, Lock, Mail, Loader2 } from 'lucide-react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const result = await signIn('credentials', {
        redirect: false,
        email,
        password,
      });

      if (result?.error) {
        setError('Credenciales inválidas. Intente de nuevo.');
      } else {
        router.push('/admin');
      }
    } catch (err) {
      setError('Ocurrió un error inesperado.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-costa-navy relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
         <Hexagon size={400} className="absolute -top-20 -right-20 text-costa-gold animate-pulse" />
         <Hexagon size={300} className="absolute bottom-0 left-0 text-costa-sky" />
      </div>

      <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-floating relative z-10 mx-4">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <Hexagon size={48} className="text-costa-navy fill-costa-sky/20" />
          </div>
          <h1 className="text-2xl font-display font-bold text-costa-navy">Acceso Administrativo</h1>
          <p className="text-gray-500 text-sm">Ingrese sus credenciales para continuar</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-xs font-bold text-costa-navy uppercase mb-2">Correo Electrónico</label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 text-gray-400" size={18} />
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 p-3 bg-gray-50 border border-gray-200 rounded focus:border-costa-sky focus:bg-white outline-none transition-all"
                placeholder="admin@costag.com"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-costa-navy uppercase mb-2">Contraseña</label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 text-gray-400" size={18} />
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 p-3 bg-gray-50 border border-gray-200 rounded focus:border-costa-sky focus:bg-white outline-none transition-all"
                placeholder="••••••••"
                required
              />
            </div>
          </div>

          {error && (
            <div className="text-red-500 text-sm text-center bg-red-50 p-2 rounded">
              {error}
            </div>
          )}

          <button 
            type="submit" 
            disabled={loading}
            className="w-full py-4 bg-costa-navy text-white font-bold rounded shadow-lg hover:bg-costa-lime hover:text-costa-navy transition-all duration-300 flex items-center justify-center disabled:opacity-70"
          >
            {loading ? <Loader2 className="animate-spin" /> : 'Iniciar Sesión'}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-xs text-gray-400">
            &copy; 2025 COSTA G. Panel de Control Seguro.
          </p>
        </div>
      </div>
    </div>
  );
}