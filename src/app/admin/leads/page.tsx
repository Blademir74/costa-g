'use client'

import { useState } from 'react'

const leadsData = [
  { id: 1, name: 'Juan Pérez', email: 'juan@email.com', service: 'Construcción', status: 'new', date: '2024-12-05' },
  { id: 2, name: 'María García', email: 'maria@email.com', service: 'Remodelación', status: 'contacted', date: '2024-12-04' },
  { id: 3, name: 'Carlos López', email: 'carlos@email.com', service: 'Consultoría', status: 'new', date: '2024-12-04' },
  { id: 4, name: 'Ana Martínez', email: 'ana@email.com', service: 'Diseño', status: 'qualified', date: '2024-12-03' },
]

const statusLabels: Record<string, string> = { new: 'Nuevo', contacted: 'Contactado', qualified: 'Calificado' }
const statusColors: Record<string, string> = { new: 'bg-green-100 text-green-600', contacted: 'bg-blue-100 text-blue-600', qualified: 'bg-purple-100 text-purple-600' }

export default function LeadsPage() {
  const [leads] = useState(leadsData)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-black text-slate-800">Leads</h1>
          <p className="text-sm text-gray-500">Gestiona los contactos</p>
        </div>
        <button className="px-4 py-2.5 rounded-xl font-semibold bg-gray-100 text-gray-600">
          Exportar CSV
        </button>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="p-4 rounded-xl bg-white border border-gray-200 text-center">
          <p className="text-2xl font-black text-green-500">{leads.filter(l => l.status === 'new').length}</p>
          <p className="text-sm text-gray-500">Nuevos</p>
        </div>
        <div className="p-4 rounded-xl bg-white border border-gray-200 text-center">
          <p className="text-2xl font-black text-blue-500">{leads.filter(l => l.status === 'contacted').length}</p>
          <p className="text-sm text-gray-500">Contactados</p>
        </div>
        <div className="p-4 rounded-xl bg-white border border-gray-200 text-center">
          <p className="text-2xl font-black text-purple-500">{leads.filter(l => l.status === 'qualified').length}</p>
          <p className="text-sm text-gray-500">Calificados</p>
        </div>
      </div>

      <div className="space-y-4">
        {leads.map(lead => (
          <div key={lead.id} className="p-4 rounded-xl bg-white border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-white font-bold">{lead.name.charAt(0)}</div>
                <div>
                  <p className="font-semibold text-slate-800">{lead.name}</p>
                  <p className="text-sm text-gray-500">{lead.email}</p>
                </div>
              </div>
              <span className={`px-3 py-1 text-xs rounded-full ${statusColors[lead.status]}`}>{statusLabels[lead.status]}</span>
            </div>
            <div className="flex items-center justify-between text-sm text-gray-400">
              <span>Servicio: {lead.service}</span>
              <span>{lead.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
