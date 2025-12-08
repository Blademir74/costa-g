'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Edit, Trash2, Plus, Building2, Hammer, Package, PenTool, FileCheck, GripVertical, Eye } from 'lucide-react'

const servicesData = [
  { id: '1', title: 'Construcción', slug: 'construccion', icon: 'Building2', order: 1, published: true },
  { id: '2', title: 'Remodelación', slug: 'remodelacion', icon: 'Hammer', order: 2, published: true },
  { id: '3', title: 'Venta de Materiales', slug: 'venta-materiales', icon: 'Package', order: 3, published: true },
  { id: '4', title: 'Diseño Arquitectónico', slug: 'diseno', icon: 'PenTool', order: 4, published: true },
  { id: '5', title: 'Consultoría', slug: 'consultoria', icon: 'FileCheck', order: 5, published: true },
]

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Building2, Hammer, Package, PenTool, FileCheck,
}

export default function ServicesAdminPage() {
  const [services, setServices] = useState(servicesData)

  const togglePublished = (id: string) => {
    setServices(services.map(s => 
      s.id === id ? { ...s, published: !s.published } : s
    ))
  }

  const deleteService = (id: string) => {
    if (confirm('¿Eliminar este servicio?')) {
      setServices(services.filter(s => s.id !== id))
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-black text-[#1A3A52]">Servicios</h1>
          <p className="text-sm text-gray-500">Gestiona los servicios de Costa G</p>
        </div>
        <Link href="/admin/servicios/nuevo">
          <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-white bg-gradient-to-r from-[#D4AF37] to-[#B8860B]">
            <Plus className="w-5 h-5" />
            Nuevo Servicio
          </button>
        </Link>
      </div>

      <div className="rounded-2xl overflow-hidden bg-white border border-gray-200">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="w-12 px-4 py-4"></th>
              <th className="text-left px-6 py-4 text-sm font-semibold text-gray-500">Servicio</th>
              <th className="text-left px-6 py-4 text-sm font-semibold text-gray-500">Slug</th>
              <th className="text-left px-6 py-4 text-sm font-semibold text-gray-500">Estado</th>
              <th className="text-right px-6 py-4 text-sm font-semibold text-gray-500">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {services.map((service, index) => {
              const Icon = iconMap[service.icon] || Building2
              return (
                <tr 
                  key={service.id} 
                  className={`hover:bg-gray-50 ${index < services.length - 1 ? 'border-b border-gray-200' : ''}`}
                >
                  <td className="px-4 py-4">
                    <GripVertical className="w-5 h-5 cursor-grab text-gray-400" />
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-amber-50">
                        <Icon className="w-5 h-5 text-amber-600" />
                      </div>
                      <span className="font-semibold text-[#1A3A52]">{service.title}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <code className="px-2 py-1 rounded text-sm bg-gray-100 text-gray-600">/servicios/{service.slug}</code>
                  </td>
                  <td className="px-6 py-4">
                    <button 
                      onClick={() => togglePublished(service.id)} 
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${service.published ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-500'}`}
                    >
                      {service.published ? 'Publicado' : 'Borrador'}
                    </button>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-2">
                      <Link href={`/servicios/${service.slug}`} target="_blank" className="p-2 rounded-lg hover:bg-gray-100">
                        <Eye className="w-4 h-4 text-gray-500" />
                      </Link>
                      <Link href={`/admin/servicios/${service.id}`} className="p-2 rounded-lg hover:bg-gray-100">
                        <Edit className="w-4 h-4 text-gray-500" />
                      </Link>
                      <button onClick={() => deleteService(service.id)} className="p-2 rounded-lg hover:bg-red-50">
                        <Trash2 className="w-4 h-4 text-red-500" />
                      </button>
                    </div>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
