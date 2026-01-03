'use client'

import { useState, useEffect } from 'react'
import { createClient } from '@/utils/supabase/client'
// Importamos SOLO el tipo, no la lógica
import type { SiteConfig } from '@/services/configService'

export default function ConfigPage() {
  const [config, setConfig] = useState<SiteConfig>({
    title: '',
    subtitle: '',
    bg_image: '',
    cta_primary: 'Ver Portafolio',
    cta_secondary: 'Contactar'
  })
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState({ type: '', text: '' })
  
  const supabase = createClient()

  // Cargar datos al iniciar
  useEffect(() => {
    const loadConfig = async () => {
      const { data } = await supabase
        .from('site_config')
        .select('content')
        .eq('section_key', 'home_hero')
        .single()
      
      if (data?.content) {
        setConfig(data.content as SiteConfig)
      }
      setLoading(false)
    }
    loadConfig()
  }, [supabase])

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    setMessage({ type: '', text: '' })

    try {
      // Actualización directa desde el cliente
      const { error } = await supabase
        .from('site_config')
        .update({ 
          content: config, 
          updated_at: new Date().toISOString() 
        })
        .eq('section_key', 'home_hero')

      if (error) throw error

      setMessage({ type: 'success', text: '✅ Cambios guardados correctamente.' })
    } catch (error) {
      console.error(error)
      setMessage({ type: 'error', text: '❌ Error al guardar.' })
    } finally {
      setSaving(false)
    }
  }

  if (loading) return <div className="p-8">Cargando configuración...</div>

  return (
    <div className="max-w-4xl mx-auto">
      <header className="mb-8">
        <h1 className="text-3xl font-display font-bold text-slate-900">Configuración del Home</h1>
        <p className="text-slate-500">Edita los textos y la imagen principal de la portada.</p>
      </header>

      <form onSubmit={handleSave} className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 space-y-6">
        
        {/* Mensajes de feedback */}
        {message.text && (
          <div className={`p-4 rounded-xl text-sm font-bold ${message.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
            {message.text}
          </div>
        )}

        <div className="grid grid-cols-1 gap-6">
          {/* Título */}
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">Título Principal (H1)</label>
            <input 
              type="text" 
              value={config.title || ''}
              onChange={e => setConfig({...config, title: e.target.value})}
              className="w-full p-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-sky-500 outline-none text-lg font-display font-bold"
              placeholder="Ej: Infraestructura que transforma..."
            />
          </div>

          {/* Subtítulo */}
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">Subtítulo</label>
            <textarea 
              rows={3}
              value={config.subtitle || ''}
              onChange={e => setConfig({...config, subtitle: e.target.value})}
              className="w-full p-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-sky-500 outline-none text-slate-600"
              placeholder="Descripción breve de la empresa..."
            />
          </div>

          {/* Imagen de Fondo */}
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">URL Imagen de Fondo</label>
            <input 
              type="text" 
              value={config.bg_image || ''}
              onChange={e => setConfig({...config, bg_image: e.target.value})}
              className="w-full p-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-sky-500 outline-none font-mono text-sm text-slate-500"
              placeholder="https://..."
            />
            <p className="text-xs text-slate-400 mt-2">
              Tip: Deja vacío para usar la imagen del proyecto "Puente Hero".
            </p>
            {/* Previsualización pequeña */}
            {config.bg_image && (
              <div className="mt-4 h-32 w-full rounded-xl overflow-hidden relative bg-slate-100 border border-slate-200">
                <img src={config.bg_image} alt="Preview" className="w-full h-full object-cover opacity-80" />
              </div>
            )}
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Texto Botón 1</label>
              <input 
                type="text" 
                value={config.cta_primary || ''}
                onChange={e => setConfig({...config, cta_primary: e.target.value})}
                className="w-full p-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-sky-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Texto Botón 2</label>
              <input 
                type="text" 
                value={config.cta_secondary || ''}
                onChange={e => setConfig({...config, cta_secondary: e.target.value})}
                className="w-full p-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-sky-500 outline-none"
              />
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-100 flex justify-end">
          <button 
            type="submit" 
            disabled={saving}
            className={`px-8 py-4 bg-slate-900 text-white font-bold rounded-xl transition-all ${saving ? 'opacity-50 cursor-not-allowed' : 'hover:bg-sky-600 shadow-xl hover:-translate-y-1'}`}
          >
            {saving ? 'Guardando...' : 'Guardar Cambios'}
          </button>
        </div>
      </form>
    </div>
  )
}