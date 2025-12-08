'use client'

import { useState } from 'react'
import { Search, Mail, Phone, Calendar, Eye, Download } from 'lucide-react'

const leadsData = [
  { id: '1', name: 'Juan Pérez', email: 'juan@email.com', phone: '747 123 4567', service: 'Construcción', message: 'Necesito cotización para construcción de 2 aulas...', status: 'new', date: '2024-12-05 10:30' },
  { id: '2', name: 'María García', email: 'maria@email.com', phone: '747 234 5678', service: 'Remodelación', message: 'Quiero remodelar mi casa, necesito presupuesto...', status: 'contacted', date: '2024-12-04 15:45' },
  { id: '3', name: 'Carlos López', email: 'carlos@email.com', phone: '747 345 6789', service: 'Consultoría', message: 'Requiero asesoría para un proyecto de pavimentación...', status: 'new', date: '2024-12-04 09:15' },
  { id: '4', name: 'Ana Martínez', email: 'ana@email.com', phone: '747 456 7890', service: 'Diseño', message: 'Me interesa el servicio de diseño arquitectónico...', status: 'qualified', date: '2024-12-03 14:20' },
  { id: '5', name: 'Roberto Sánchez', email: 'roberto@email.com', phone: '747 567 8901', service: 'Construcción', message: 'Proyecto de puente peatonal en la comunidad...', status: 'converted', date: '2024-12-02 11:00' },
]

const statusOptions = [
  { value: 'new', label: 'Nuevo', className: 'bg-green-100 text-green-600' },
  { value: 'contacted', label: 'Contactado', className: 'bg-blue-100 text-blue-600' },
  { value: 'qualified', label: 'Calificado', className: 'bg-purple-100 text-purple-600' },
  { value: 'converted', label: 'Convertido', className: 'bg-amber-100 text-amber-600' },
  { value: 'lost', label: 'Perdido', className: 'bg-red-100 text-red-600' },
]

function StatusBadge({ status }: { status: string }) {
  const option = statusOptions.find(s => s.value === status) || statusOptions[0]
  return <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${option.className}`}>{option.label}</span>
}

export default function LeadsPage() {
  const [leads, setLeads] = useState(leadsData)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedLead, setSelectedLead] = useState<typeof leadsData[0] | null>(null)

  const filteredLeads = leads.filter(lead => lead.name.toLowerCase().includes(searchTerm.toLowerCase()) || lead.email.toLowerCase().includes(searchTerm.toLowerCase()))

  const updateStatus = (id: string, status: string) => {
    setLeads(leads.map(lead => lead.id === id ? { ...lead, status } : lead))
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-[#1A3A52]">Leads</h1>
          <p className="text-sm text-gray-500">Gestiona los contactos y solicitudes</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold bg-gray-50 border border-gray-200 text-gray-500">
          <Download className="w-5 h-5" />
          Exportar CSV
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {statusOptions.map(status => {
          const count = leads.filter(l => l.status === status.value).length
          return (
            <div key={status.value} className="p-4 rounded-xl text-center bg-white border border-gray-200">
              <p className={`text-2xl font-black ${status.className.split(' ')[1]}`}>{count}</p>
              <p className="text-sm text-gray-500">{status.label}</p>
            </div>
          )
        })}
      </div>

      <div className="p-4 rounded-2xl bg-white border border-gray-200">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input type="text" placeholder="Buscar por nombre o email..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full pl-12 pr-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-[#1A3A52] outline-none" />
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          {filteredLeads.map(lead => (
            <div key={lead.id} onClick={() => setSelectedLead(lead)} className={`p-4 rounded-xl cursor-pointer transition-all bg-white border border-gray-200 hover:border-amber-300 ${selectedLead?.id === lead.id ? 'ring-2 ring-amber-400' : ''}`}>
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold bg-[#1A3A52]">{lead.name.charAt(0)}</div>
                  <div>
                    <p className="font-semibold text-[#1A3A52]">{lead.name}</p>
                    <p className="text-sm text-gray-500">{lead.service}</p>
                  </div>
                </div>
                <StatusBadge status={lead.status} />
              </div>
              <p className="text-sm line-clamp-2 mb-3 text-gray-500">{lead.message}</p>
              <div className="flex items-center gap-4 text-xs text-gray-400">
                <span className="flex items-center gap-1"><Mail className="w-3 h-3" /> {lead.email}</span>
                <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {lead.date}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="p-6 rounded-xl sticky top-24 bg-white border border-gray-200">
          {selectedLead ? (
            <>
              <div className="text-center mb-6">
                <div className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-3 bg-[#1A3A52]">{selectedLead.name.charAt(0)}</div>
                <h3 className="text-lg font-bold text-[#1A3A52]">{selectedLead.name}</h3>
                <p className="text-sm text-gray-500">{selectedLead.service}</p>
              </div>

              <div className="space-y-4 mb-6">
                <a href={`mailto:${selectedLead.email}`} className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50">
                  <Mail className="w-5 h-5 text-amber-600" />
                  <span className="text-sm text-[#1A3A52]">{selectedLead.email}</span>
                </a>
                <a href={`tel:${selectedLead.phone}`} className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50">
                  <Phone className="w-5 h-5 text-amber-600" />
                  <span className="text-sm text-[#1A3A52]">{selectedLead.phone}</span>
                </a>
              </div>

              <div className="mb-6">
                <p className="text-sm font-semibold mb-2 text-[#1A3A52]">Mensaje:</p>
                <p className="text-sm p-3 rounded-lg bg-gray-50 text-gray-500">{selectedLead.message}</p>
              </div>

              <div>
                <p className="text-sm font-semibold mb-3 text-[#1A3A52]">Cambiar Estado:</p>
                <div className="grid grid-cols-2 gap-2">
                  {statusOptions.map(status => (
                    <button key={status.value} onClick={() => updateStatus(selectedLead.id, status.value)} className={`px-3 py-2 rounded-lg text-sm font-medium transition-all border ${selectedLead.status === status.value ? status.className : 'bg-gray-50 text-gray-500 border-gray-200'}`}>
                      {status.label}
                    </button>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <Eye className="w-12 h-12 mx-auto mb-4 text-gray-400" />
              <p className="font-semibold text-gray-500">Selecciona un lead</p>
              <p className="text-sm text-gray-400">para ver los detalles</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
