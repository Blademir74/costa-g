'use client'

import { useState } from 'react'
import { Save, Building2, Phone, Mail, MapPin, Globe, Facebook, Instagram, Linkedin, Youtube, Shield, Database, Key, AlertCircle } from 'lucide-react'

export default function ConfigurationPage() {
  const [activeTab, setActiveTab] = useState('general')
  const [saving, setSaving] = useState(false)
  const [config, setConfig] = useState({
    siteName: 'Costa G',
    legalName: 'Comercializadora e Inmobiliaria Costa G S.A. de C.V.',
    tagline: 'Constructora Bio-Sustentable',
    description: 'Empresa constructora Bio-Sustentable en Guerrero y Estado de México. +243 puentes conservados desde 2018.',
    phone: '747 273 5934',
    email: 'Inmob.costag@Hotmail.com',
    whatsapp: '527472735934',
    address: 'Galo Soberon y Parra, Edif. C, Depto. #302, Col. Las Torres, C.P. 39076, Chilpancingo, Guerrero',
    facebook: 'https://facebook.com/costag',
    instagram: 'https://instagram.com/costag',
    linkedin: 'https://linkedin.com/company/costag',
    youtube: '',
    website: 'https://costag.mx',
  })

  const handleSave = () => {
    setSaving(true)
    setTimeout(() => {
      alert('Configuración guardada (demo)')
      setSaving(false)
    }, 1000)
  }

  const tabs = [
    { id: 'general', label: 'General', icon: Building2 },
    { id: 'contact', label: 'Contacto', icon: Phone },
    { id: 'social', label: 'Redes Sociales', icon: Globe },
    { id: 'security', label: 'Seguridad', icon: Shield },
    { id: 'database', label: 'Base de Datos', icon: Database },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-black text-[#1A3A52]">Configuración</h1>
          <p className="text-sm text-gray-500">Administra la configuración del sitio</p>
        </div>
        <button onClick={handleSave} disabled={saving} className="flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-white disabled:opacity-50 bg-gradient-to-r from-[#D4AF37] to-[#B8860B]">
          <Save className="w-5 h-5" />
          {saving ? 'Guardando...' : 'Guardar Cambios'}
        </button>
      </div>

      <div className="grid lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1">
          <div className="rounded-2xl p-2 bg-white border border-gray-200">
            {tabs.map(tab => {
              const Icon = tab.icon
              return (
                <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all ${activeTab === tab.id ? 'bg-[#1A3A52] text-white' : 'hover:bg-gray-50 text-gray-500'}`}>
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{tab.label}</span>
                </button>
              )
            })}
          </div>
        </div>

        <div className="lg:col-span-3 rounded-2xl p-6 bg-white border border-gray-200">
          {activeTab === 'general' && (
            <div className="space-y-6">
              <h2 className="text-lg font-bold text-[#1A3A52]">Información General</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-[#1A3A52]">Nombre del Sitio</label>
                  <input type="text" value={config.siteName} onChange={e => setConfig({...config, siteName: e.target.value})} className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-[#1A3A52]" />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-[#1A3A52]">Razón Social</label>
                  <input type="text" value={config.legalName} onChange={e => setConfig({...config, legalName: e.target.value})} className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-[#1A3A52]" />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-[#1A3A52]">Slogan</label>
                  <input type="text" value={config.tagline} onChange={e => setConfig({...config, tagline: e.target.value})} className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-[#1A3A52]" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold mb-2 text-[#1A3A52]">Descripción</label>
                  <textarea value={config.description} onChange={e => setConfig({...config, description: e.target.value})} rows={3} className="w-full px-4 py-3 rounded-xl resize-none bg-gray-50 border border-gray-200 text-[#1A3A52]" />
                </div>
              </div>
            </div>
          )}

          {activeTab === 'contact' && (
            <div className="space-y-6">
              <h2 className="text-lg font-bold text-[#1A3A52]">Información de Contacto</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-[#1A3A52]"><Phone className="w-4 h-4 inline mr-2" />Teléfono</label>
                  <input type="text" value={config.phone} onChange={e => setConfig({...config, phone: e.target.value})} className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-[#1A3A52]" />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-[#1A3A52]"><Mail className="w-4 h-4 inline mr-2" />Email</label>
                  <input type="email" value={config.email} onChange={e => setConfig({...config, email: e.target.value})} className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-[#1A3A52]" />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-[#1A3A52]">WhatsApp</label>
                  <input type="text" value={config.whatsapp} onChange={e => setConfig({...config, whatsapp: e.target.value})} className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-[#1A3A52]" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold mb-2 text-[#1A3A52]"><MapPin className="w-4 h-4 inline mr-2" />Dirección</label>
                  <textarea value={config.address} onChange={e => setConfig({...config, address: e.target.value})} rows={2} className="w-full px-4 py-3 rounded-xl resize-none bg-gray-50 border border-gray-200 text-[#1A3A52]" />
                </div>
              </div>
            </div>
          )}

          {activeTab === 'social' && (
            <div className="space-y-6">
              <h2 className="text-lg font-bold text-[#1A3A52]">Redes Sociales</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-[#1A3A52]"><Facebook className="w-4 h-4 inline mr-2" />Facebook</label>
                  <input type="url" value={config.facebook} onChange={e => setConfig({...config, facebook: e.target.value})} className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-[#1A3A52]" />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-[#1A3A52]"><Instagram className="w-4 h-4 inline mr-2" />Instagram</label>
                  <input type="url" value={config.instagram} onChange={e => setConfig({...config, instagram: e.target.value})} className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-[#1A3A52]" />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-[#1A3A52]"><Linkedin className="w-4 h-4 inline mr-2" />LinkedIn</label>
                  <input type="url" value={config.linkedin} onChange={e => setConfig({...config, linkedin: e.target.value})} className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-[#1A3A52]" />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-[#1A3A52]"><Youtube className="w-4 h-4 inline mr-2" />YouTube</label>
                  <input type="url" value={config.youtube} onChange={e => setConfig({...config, youtube: e.target.value})} className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-[#1A3A52]" />
                </div>
              </div>
            </div>
          )}

          {activeTab === 'security' && (
            <div className="space-y-6">
              <h2 className="text-lg font-bold text-[#1A3A52]">Seguridad</h2>
              <div className="p-4 rounded-xl flex items-start gap-3 bg-amber-50 border border-amber-200">
                <Key className="w-5 h-5 flex-shrink-0 mt-0.5 text-amber-600" />
                <div>
                  <p className="font-semibold text-[#1A3A52]">Cambiar Contraseña</p>
                  <p className="text-sm text-gray-500">Para cambiar la contraseña del administrador, contacta al desarrollador.</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-[#1A3A52]">Usuario Actual</label>
                  <input type="text" value="vladimir" disabled className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-400" />
                </div>
              </div>
            </div>
          )}

          {activeTab === 'database' && (
            <div className="space-y-6">
              <h2 className="text-lg font-bold text-[#1A3A52]">Base de Datos</h2>
              <div className="p-4 rounded-xl flex items-start gap-3 bg-red-50 border border-red-200">
                <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5 text-red-500" />
                <div>
                  <p className="font-semibold text-[#1A3A52]">Configuración Avanzada</p>
                  <p className="text-sm text-gray-500">La configuración de la base de datos requiere acceso técnico. Consulta la documentación.</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-[#1A3A52]">Estado de Conexión</label>
                  <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-gray-50 border border-gray-200">
                    <span className="w-3 h-3 rounded-full bg-green-500"></span>
                    <span className="text-[#1A3A52]">Conectado (Local)</span>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-[#1A3A52]">Proveedor</label>
                  <input type="text" value="PostgreSQL (Supabase)" disabled className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-400" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
