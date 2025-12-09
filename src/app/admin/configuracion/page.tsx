'use client'

import { useState } from 'react'

export default function ConfigurationPage() {
  const [config, setConfig] = useState({
    siteName: 'Costa G',
    phone: '747 273 5934',
    email: 'Inmob.costag@Hotmail.com',
    address: 'Chilpancingo, Guerrero',
  })
  const [saving, setSaving] = useState(false)

  const handleSave = () => {
    setSaving(true)
    setTimeout(() => {
      alert('Configuración guardada')
      setSaving(false)
    }, 1000)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-black text-slate-800">Configuración</h1>
          <p className="text-sm text-gray-500">Ajustes del sitio</p>
        </div>
        <button onClick={handleSave} disabled={saving} className="px-4 py-2.5 rounded-xl font-semibold text-white bg-amber-500 hover:bg-amber-600 disabled:opacity-50">
          {saving ? 'Guardando...' : 'Guardar Cambios'}
        </button>
      </div>

      <div className="p-6 rounded-2xl bg-white border border-gray-200 space-y-6">
        <h2 className="text-lg font-bold text-slate-800">Información General</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold mb-2 text-slate-800">Nombre del Sitio</label>
            <input type="text" value={config.siteName} onChange={e => setConfig({...config, siteName: e.target.value})} className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200" />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2 text-slate-800">Teléfono</label>
            <input type="text" value={config.phone} onChange={e => setConfig({...config, phone: e.target.value})} className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200" />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2 text-slate-800">Email</label>
            <input type="email" value={config.email} onChange={e => setConfig({...config, email: e.target.value})} className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200" />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2 text-slate-800">Dirección</label>
            <input type="text" value={config.address} onChange={e => setConfig({...config, address: e.target.value})} className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200" />
          </div>
        </div>
      </div>

      <div className="p-6 rounded-2xl bg-white border border-gray-200">
        <h2 className="text-lg font-bold text-slate-800 mb-4">Seguridad</h2>
        <div className="p-4 rounded-xl bg-amber-50 border border-amber-200">
          <p className="font-semibold text-slate-800">Usuario actual: vladimir</p>
          <p className="text-sm text-gray-500">Para cambiar la contraseña, contacta al desarrollador.</p>
        </div>
      </div>
    </div>
  )
}
