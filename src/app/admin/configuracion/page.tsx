'use client'

import { useState } from 'react'

export default function ConfigurationPage() {
  const [activeTab, setActiveTab] = useState('general')
  const [saving, setSaving] = useState(false)
  const [config, setConfig] = useState({
    siteName: 'Costa G',
    legalName: 'Comercializadora e Inmobiliaria Costa G S.A. de C.V.',
    tagline: 'Constructora Bio-Sustentable',
    phone: '747 273 5934',
    email: 'Inmob.costag@Hotmail.com',
    address: 'Galo Soberon y Parra, Edif. C, Depto. #302, Col. Las Torres, C.P. 39076, Chilpancingo, Guerrero',
    facebook: 'https://facebook.com/costag',
    instagram: 'https://instagram.com/costag',
  })

  const handleSave = () => {
    setSaving(true)
    setTimeout(() => {
      alert('Configuración guardada (demo)')
      setSaving(false)
    }, 1000)
  }

  const tabs = [
    { id: 'general', label: 'General' },
    { id: 'contact', label: 'Contacto' },
    { id: 'social', label: 'Redes Sociales' },
    { id: 'security', label: 'Seguridad' },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-black text-slate-800">Configuración</h1>
          <p className="text-sm text-gray-500">Administra la configuración del sitio</p>
        </div>
        <button onClick={handleSave} disabled={saving} className="px-4 py-2.5 rounded-xl font-semibold text-white disabled:opacity-50 bg-gradient-to-r from-amber-500 to-amber-600">
          {saving ? 'Guardando...' : 'Guardar Cambios'}
        </button>
      </div>

      <div className="grid lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1 rounded-2xl p-2 bg-white border border-gray-200">
          {tabs.map(tab => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`w-full px-4 py-3 rounded-xl text-left font-medium ${activeTab === tab.id ? 'bg-slate-800 text-white' : 'text-gray-500 hover:bg-gray-50'}`}>
              {tab.label}
            </button>
          ))}
        </div>

        <div className="lg:col-span-3 p-6 rounded-2xl bg-white border border-gray-200">
          {activeTab === 'general' && (
            <div className="space-y-6">
              <h2 className="text-lg font-bold text-slate-800">Información General</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-slate-800">Nombre del Sitio</label>
                  <input type="text" value={config.siteName} onChange={e => setConfig({...config, siteName: e.target.value})} className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-slate-800" />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-slate-800">Razón Social</label>
                  <input type="text" value={config.legalName} onChange={e => setConfig({...config, legalName: e.target.value})} className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-slate-800" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold mb-2 text-slate-800">Slogan</label>
                  <input type="text" value={config.tagline} onChange={e => setConfig({...config, tagline: e.target.value})} className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-slate-800" />
                </div>
              </div>
            </div>
          )}

          {activeTab === 'contact' && (
            <div className="space-y-6">
              <h2 className="text-lg font-bold text-slate-800">Contacto</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-slate-800">Teléfono</label>
                  <input type="text" value={config.phone} onChange={e => setConfig({...config, phone: e.target.value})} className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-slate-800" />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-slate-800">Email</label>
                  <input type="email" value={config.email} onChange={e => setConfig({...config, email: e.target.value})} className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-slate-800" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold mb-2 text-slate-800">Dirección</label>
                  <textarea value={config.address} onChange={e => setConfig({...config, address: e.target.value})} rows={2} className="w-full px-4 py-3 rounded-xl resize-none bg-gray-50 border border-gray-200 text-slate-800" />
                </div>
              </div>
            </div>
          )}

          {activeTab === 'social' && (
            <div className="space-y-6">
              <h2 className="text-lg font-bold text-slate-800">Redes Sociales</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-slate-800">Facebook</label>
                  <input type="url" value={config.facebook} onChange={e => setConfig({...config, facebook: e.target.value})} className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-slate-800" />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-slate-800">Instagram</label>
                  <input type="url" value={config.instagram} onChange={e => setConfig({...config, instagram: e.target.value})} className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-slate-800" />
                </div>
              </div>
            </div>
          )}

          {activeTab === 'security' && (
            <div className="space-y-6">
              <h2 className="text-lg font-bold text-slate-800">Seguridad</h2>
              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200">
                <p className="font-semibold text-slate-800">Cambiar Contraseña</p>
                <p className="text-sm text-gray-500">Para cambiar la contraseña, contacta al desarrollador.</p>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 text-slate-800">Usuario Actual</label>
                <input type="text" value="vladimir" disabled className="w-full px-4 py-3 rounded-xl bg-gray-100 border border-gray-200 text-gray-400" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
