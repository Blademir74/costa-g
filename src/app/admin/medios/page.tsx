'use client'

import { useState } from 'react'

const mediaData = [
  { id: 1, name: 'puente-naranjo.jpg', size: '2.4 MB' },
  { id: 2, name: 'camino-vista.jpg', size: '1.8 MB' },
  { id: 3, name: 'construccion.jpg', size: '3.1 MB' },
  { id: 4, name: 'logo.png', size: '156 KB' },
  { id: 5, name: 'hero-bg.jpg', size: '4.5 MB' },
  { id: 6, name: 'equipo.jpg', size: '2.2 MB' },
]

export default function MediaPage() {
  const [media] = useState(mediaData)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-black text-slate-800">Medios</h1>
          <p className="text-sm text-gray-500">Gestiona las imágenes</p>
        </div>
        <button className="px-4 py-2.5 rounded-xl font-semibold text-white bg-amber-500 hover:bg-amber-600">
          Subir Archivos
        </button>
      </div>

      <div className="border-2 border-dashed rounded-xl p-8 text-center border-gray-300 bg-gray-50">
        <p className="font-semibold text-slate-800 mb-1">Arrastra archivos aquí</p>
        <p className="text-sm text-gray-400">o haz clic en Subir Archivos</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {media.map(item => (
          <div key={item.id} className="rounded-xl overflow-hidden bg-white border border-gray-200">
            <div className="aspect-square bg-gray-100 flex items-center justify-center text-gray-400 text-4xl">
              📷
            </div>
            <div className="p-3">
              <p className="text-sm font-medium truncate text-slate-800">{item.name}</p>
              <p className="text-xs text-gray-400">{item.size}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
