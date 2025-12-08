'use client'

import { useState } from 'react'

const leadsData = [
  { id: '1', name: 'Juan Pérez', email: 'juan@email.com', phone: '747 123 4567', service: 'Construcción', message: 'Necesito cotización para construcción...', status: 'new', date: '2024-12-05' },
  { id: '2', name: 'María García', email: 'maria@email.com', phone: '747 234 5678', service: 'Remodelación', message: 'Quiero remodelar mi casa...', status: 'contacted', date: '2024-12-04' },
  { id: '3', name: 'Carlos López', email: 'carlos@email.com', phone: '747 345 6789', service: 'Consultoría', message: 'Requiero asesoría para pavimentación...', status: 'new', date: '2024-12-04' },
  { id: '4', name: 'Ana Martínez', email: 'ana@email.com', phone: '747 456 7890', service: 'Diseño', message: 'Me interesa el diseño arquitectónico...', status: 'qualified', date: '2024-12-03' },
]

const statusLabels: Record<string, string> = { new: 'Nuevo', contacted: 'Contactado', qualified: 'Calificado', converted: 'Convertido', lost: 'Perdido' }
const statusColors: Record<string, string> = { new: 'bg-green-100 text-green-600', contacted: 'bg-blue-100 text-blue-600', qualified: 'bg-purple-100 text-purple-600', converted: 'bg-amber-100 text-amber-600', lost: 'bg-red-100 text-red-600' }

export default function LeadsPage() {
  const [leads, setLeads] = useState(leadsData)
  const [selected, setSelected] = useState<string | null>(null)

  const selectedLead = leads.find(l => l.id === selected)

  const updateStatus = (id: string, status: string) => {
    setLeads(leads.map(lead => lead.id === id ? { ...lead, status } : lead))
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-black text-slate-800">Leads</h1>
        <p className="text-sm text-gray-500">Gestiona los contactos y solicitudes</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          {leads.map(lead => (
            <div 
              key={lead.id} 
              onClick={() => setSelected(lead.id)}
              className={`p-4 rounded-xl cursor-pointer bg-white border ${selected === lead.id ? 'border-amber-400 ring-2 ring-amber-200' : 'border-gray-200'}`}
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-white font-bold">{lead.name.charAt(0)}</div>
                  <div>
                    <p className="font-semibold text-slate-800">{lead.name}</p>
                    <p className="text-sm text-gray-500">{lead.service}</p>
                  </div>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${statusColors[lead.status]}`}>{statusLabels[lead.status]}</span>
              </div>
              <p className="text-sm text-gray-500 line-clamp-2">{lead.message}</p>
              <p className="text-xs text-gray-400 mt-2">{lead.date}</p>
            </div>
          ))}
        </div>

        <div className="p-6 rounded-xl bg-white border border-gray-200 sticky top-6">
          {selectedLead ? (
            <>
              <div className="text-center mb-6">
                <div className="w-16 h-16 rounded-full bg-slate-700 flex items-center justify-center text-white font-bold text-2xl mx-auto mb-3">{selectedLead.name.charAt(0)}</div>
                <h3 className="text-lg font-bold text-slate-800">{selectedLead.name}</h3>
                <p className="text-sm text-gray-500">{selectedLead.service}</p>
              </div>
              <div className="space-y-3 mb-6">
                <p className="text-sm"><span className="font-medium">Email:</span> {selectedLead.email}</p>
                <p className="text-sm"><span className="font-medium">Teléfono:</span> {selectedLead.phone}</p>
                <p className="text-sm"><span className="font-medium">Mensaje:</span> {selectedLead.message}</p>
              </div>
              <div>
                <p className="text-sm font-semibold mb-3 text-slate-800">Cambiar Estado:</p>
                <div className="grid grid-cols-2 gap-2">
                  {Object.entries(statusLabels).map(([key, label]) => (
                    <button key={key} onClick={() => updateStatus(selectedLead.id, key)} className={`px-3 py-2 rounded-lg text-xs font-medium ${selectedLead.status === key ? statusColors[key] : 'bg-gray-100 text-gray-500'}`}>
                      {label}
                    </button>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <div className="text-center py-12 text-gray-400">
              <p>Selecciona un lead</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
