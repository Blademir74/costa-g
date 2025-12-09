'use client'

import { useState } from 'react'

const servicesData = [
  { id: 1, title: 'Construcción', slug: 'construccion', published: true },
  { id: 2, title: 'Remodelación', slug: 'remodelacion', published: true },
  { id: 3, title: 'Venta de Materiales', slug: 'venta-materiales', published: true },
  { id: 4, title: 'Diseño Arquitectónico', slug: 'diseno', published: true },
  { id: 5, title: 'Consultoría', slug: 'consultoria', published: true },
]

export default function ServicesAdminPage() {
  const [services, setServices] = useState(servicesData)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-black text-slate-800">Servicios</h1>
          <p className="text-sm text-gray-500">Gestiona los servicios</p>
        </div>
        <button className="px-4 py-2.5 rounded-xl font-semibold text-white bg-amber-500 hover:bg-amber-600">
          + Nuevo Servicio
        </button>
      </div>

      <div className="rounded-2xl overflow-hidden bg-white border border-gray-200">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="text-left px-6 py-4 text-sm font-semibold text-gray-500">Servicio</th>
              <th className="text-left px-6 py-4 text-sm font-semibold text-gray-500">Slug</th>
              <th className="text-left px-6 py-4 text-sm font-semibold text-gray-500">Estado</th>
              <th className="text-right px-6 py-4 text-sm font-semibold text-gray-500">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {services.map((service, i) => (
              <tr key={service.id} className={`hover:bg-gray-50 ${i < services.length - 1 ? 'border-b border-gray-200' : ''}`}>
                <td className="px-6 py-4 font-semibold text-slate-800">{service.title}</td>
                <td className="px-6 py-4"><code className="px-2 py-1 bg-gray-100 text-gray-600 text-sm rounded">/servicios/{service.slug}</code></td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 text-xs rounded-full ${service.published ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-500'}`}>
                    {service.published ? 'Publicado' : 'Borrador'}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded-lg mr-2">Editar</button>
                  <button className="px-3 py-1 text-sm bg-red-100 hover:bg-red-200 text-red-600 rounded-lg">Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
