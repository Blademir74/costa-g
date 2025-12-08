'use client'

import { useState } from 'react'

const mediaData = [
  { id: '1', name: 'puente-naranjo-1.jpg', size: '2.4 MB', folder: 'proyectos' },
  { id: '2', name: 'puente-naranjo-2.jpg', size: '1.8 MB', folder: 'proyectos' },
  { id: '3', name: 'camino-vista-hermosa.jpg', size: '3.1 MB', folder: 'proyectos' },
  { id: '4', name: 'construccion-sustentable.jpg', size: '1.2 MB', folder: 'blog' },
  { id: '5', name: 'logo-costa-g.png', size: '156 KB', folder: 'general' },
  { id: '6', name: 'hero-background.jpg', size: '4.5 MB', folder: 'general' },
]

export default function MediaPage() {
  const [media, setMedia] = useState(mediaData)
  const [selected, setSelected] = useState<string[]>([])

  const toggleSelect = (id: string) => {
    setSelected(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id])
  }

  const deleteSelected = () => {
    if (confirm(`¿Eliminar ${selected.length} archivo(s)?`)) {
      setMedia(media.filter(m => !selected.includes(m.id)))
      setSelected([])
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-black text-slate-800">Medios</h1>
          <p className="text-sm text-gray-500">Gestiona las imágenes y archivos</p>
        </div>
        <div className="flex gap-3">
          {selected.length > 0 && (
            <button onClick={deleteSelected} className="px-4 py-2.5 rounded-xl font-semibold bg-red-100 text-red-600">
              Eliminar ({selected.length})
            </button>
          )}
          <button className="px-4 py-2.5 rounded-xl font-semibold text-white bg-gradient-to-r from-amber-500 to-amber-600">
            Subir Archivos
          </button>
        </div>
      </div>

      <div className="border-2 border-dashed rounded-xl p-8 text-center border-gray-300 bg-gray-50">
        <p className="font-semibold text-slate-800 mb-1">Arrastra archivos aquí</p>
        <p className="text-sm text-gray-400">o haz clic en "Subir Archivos"</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {media.map(item => (
          <div 
            key={item.id} 
            onClick={() => toggleSelect(item.id)}
            className={`rounded-xl overflow-hidden cursor-pointer bg-white border ${selected.includes(item.id) ? 'border-amber-400 ring-2 ring-amber-200' : 'border-gray-200'}`}
          >
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
