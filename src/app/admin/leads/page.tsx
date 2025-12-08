'use client'

import { useState } from 'react'
import {
  Search,
  Filter,
  Mail,
  Phone,
  Calendar,
  MoreVertical,
  Eye,
  CheckCircle2,
  Clock,
  XCircle,
  Download,
} from 'lucide-react'

const leadsData = [
  { id: '1', name: 'Juan Pérez', email: 'juan@email.com', phone: '747 123 4567', service: 'Construcción', message: 'Necesito cotización para construcción de 2 aulas...', status: 'new', date: '2024-12-05 10:30' },
  { id: '2', name: 'María García', email: 'maria@email.com', phone: '747 234 5678', service: 'Remodelación', message: 'Quiero remodelar mi casa, necesito presupuesto...', status: 'contacted', date: '2024-12-04 15:45' },
  { id: '3', name: 'Carlos López', email: 'carlos@email.com', phone: '747 345 6789', service: 'Consultoría', message: 'Requiero asesoría para un proyecto de pavimentación...', status: 'new', date: '2024-12-04 09:15' },
  { id: '4', name: 'Ana Martínez', email: 'ana@email.com', phone: '747 456 7890', service: 'Diseño', message: 'Me interesa el servicio de diseño arquitectónico...', status: 'qualified', date: '2024-12-03 14:20' },
  { id: '5', name: 'Roberto Sánchez', email: 'roberto@email.com', phone: '747 567 8901', service: 'Construcción', message: 'Proyecto de puente peatonal en la comunidad...', status: 'converted', date: '2024-12-02 11:00' },
]

const statusOptions = [
  { value: 'new', label: 'Nuevo', color: '#22c55e' },
  { value: 'contacted', label: 'Contactado', color: '#3b82f6' },
  { value: 'qualified', label: 'Calificado', color: '#8b5cf6' },
  { value: 'converted', label: 'Convertido', color: '#D4AF37' },
  { value: 'lost', label: 'Perdido', color: '#ef4444' },
]

function StatusBadge({ status }: { status: string }) {
  const option = statusOptions.find(s => s.value === status) || statusOptions[0]
  return (
    <span 
      className="px-2.5 py-1 rounded-full text-xs font-semibold"
      style={{ background: `${option.color}20`, color: option.color }}
    >
      {option.label}
    </span>
  )
}

export default function LeadsPage() {
  const [leads, setLeads] = useState(leadsData)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedLead, setSelectedLead] = useState<typeof leadsData[0] | null>(null)

  const filteredLeads = leads.filter(lead => 
    lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    lead.email.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const updateStatus = (id: string, status: string) => {
    setLeads(leads.map(lead => 
      lead.id === id ? { ...lead, status } : lead
    ))
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black" style={{ color: '#1A3A52' }}>Leads</h1>
          <p className="text-sm" style={{ color: '#64748b' }}>
            Gestiona los contactos y solicitudes
          </p>
        </div>
        <button 
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold"
          style={{ background: '#f8fafc', border: '1px solid #e2e8f0', color: '#64748b' }}
        >
          <Download className="w-5 h-5" />
          Exportar CSV
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {statusOptions.map(status => {
          const count = leads.filter(l => l.status === status.value).length
          return (
            <div 
              key={status.value}
              className="p-4 rounded-xl text-center"
              style={{ background: 'white', border: '1px solid #e2e8f0' }}
            >
              <p className="text-2xl font-black" style={{ color: status.color }}>{count}</p>
              <p className="text-sm" style={{ color: '#64748b' }}>{status.label}</p>
            </div>
          )
        })}
      </div>

      {/* Búsqueda */}
      <div 
        className="p-4 rounded-2xl"
        style={{ background: 'white', border: '1px solid #e2e8f0' }}
      >
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5" style={{ color: '#94a3b8' }} />
          <input
            type="text"
            placeholder="Buscar por nombre o email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-xl"
            style={{ background: '#f8fafc', border: '1px solid #e2e8f0', color: '#1A3A52', outline: 'none' }}
          />
        </div>
      </div>

      {/* Grid */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Lista de Leads */}
        <div className="lg:col-span-2 space-y-4">
          {filteredLeads.map(lead => (
            <div 
              key={lead.id}
              onClick={() => setSelectedLead(lead)}
              className={`p-4 rounded-xl cursor-pointer transition-all ${selectedLead?.id === lead.id ? 'ring-2 ring-[#D4AF37]' : ''}`}
              style={{ background: 'white', border: '1px solid #e2e8f0' }}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div 
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                    style={{ background: '#1A3A52' }}
                  >
                    {lead.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold" style={{ color: '#1A3A52' }}>{lead.name}</p>
                    <p className="text-sm" style={{ color: '#64748b' }}>{lead.service}</p>
                  </div>
                </div>
                <StatusBadge status={lead.status} />
              </div>
              <p className="text-sm line-clamp-2 mb-3" style={{ color: '#64748b' }}>
                {lead.message}
              </p>
              <div className="flex items-center gap-4 text-xs" style={{ color: '#94a3b8' }}>
                <span className="flex items-center gap-1">
                  <Mail className="w-3 h-3" /> {lead.email}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" /> {lead.date}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Panel de Detalle */}
        <div 
          className="p-6 rounded-xl sticky top-24"
          style={{ background: 'white', border: '1px solid #e2e8f0' }}
        >
          {selectedLead ? (
            <>
              <div className="text-center mb-6">
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-3"
                  style={{ background: '#1A3A52' }}
                >
                  {selectedLead.name.charAt(0)}
                </div>
                <h3 className="text-lg font-bold" style={{ color: '#1A3A52' }}>{selectedLead.name}</h3>
                <p className="text-sm" style={{ color: '#64748b' }}>{selectedLead.service}</p>
              </div>

              <div className="space-y-4 mb-6">
                <a href={`mailto:${selectedLead.email}`} className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50">
                  <Mail className="w-5 h-5" style={{ color: '#D4AF37' }} />
                  <span className="text-sm" style={{ color: '#1A3A52' }}>{selectedLead.email}</span>
                </a>
                <a href={`tel:${selectedLead.phone}`} className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50">
                  <Phone className="w-5 h-5" style={{ color: '#D4AF37' }} />
                  <span className="text-sm" style={{ color: '#1A3A52' }}>{selectedLead.phone}</span>
                </a>
              </div>

              <div className="mb-6">
                <p className="text-sm font-semibold mb-2" style={{ color: '#1A3A52' }}>Mensaje:</p>
                <p className="text-sm p-3 rounded-lg" style={{ background: '#f8fafc', color: '#64748b' }}>
                  {selectedLead.message}
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold mb-3" style={{ color: '#1A3A52' }}>Cambiar Estado:</p>
                <div className="grid grid-cols-2 gap-2">
                  {statusOptions.map(status => (
                    <button
                      key={status.value}
                      onClick={() => updateStatus(selectedLead.id, status.value)}
                      className="px-3 py-2 rounded-lg text-sm font-medium transition-all"
                      style={{
                        background: selectedLead.status === status.value ? status.color : '#f8fafc',
                        color: selectedLead.status === status.value ? 'white' : '#64748b',
                        border: `1px solid ${selectedLead.status === status.value ? status.color : '#e2e8f0'}`,
                      }}
                    >
                      {status.label}
                    </button>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <Eye className="w-12 h-12 mx-auto mb-4" style={{ color: '#94a3b8' }} />
              <p className="font-semibold" style={{ color: '#64748b' }}>Selecciona un lead</p>
              <p className="text-sm" style={{ color: '#94a3b8' }}>para ver los detalles</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
