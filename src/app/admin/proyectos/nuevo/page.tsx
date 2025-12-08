'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import {
  ArrowLeft,
  Save,
  Upload,
  X,
  Plus,
  Image as ImageIcon,
  Building2,
} from 'lucide-react'

const categories = [
  'Puentes',
  'Caminos',
  'Carreteras',
  'Pavimentación',
  'Escuelas',
  'Canchas',
  'Muros',
  'Otro',
]

const municipalities = [
  'Chilpancingo',
  'Tlapa de Comonfort',
  'Coahuayutla',
  'Ometepec',
  'Xochihuehuetlan',
  'Tlacoachistlahuaca',
  'Benito Juárez',
  'Texcoco',
  'Toluca',
  'Otro',
]

export default function NewProjectPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    category: '',
    year: new Date().getFullYear(),
    location: '',
    municipality: '',
    client: '',
    dependency: '',
    contract: '',
    description: '',
    scope: '',
    featured: false,
    published: false,
  })
  const [images, setImages] = useState<string[]>([])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    const newValue = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    
    setFormData(prev => ({
      ...prev,
      [name]: newValue,
    }))

    // Auto-generar slug
    if (name === 'title') {
      const slug = value
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '')
      setFormData(prev => ({ ...prev, slug }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simular guardado
    await new Promise(resolve => setTimeout(resolve, 1000))

    alert('Proyecto guardado correctamente (demo)')
    router.push('/admin/proyectos')
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <Link 
            href="/admin/proyectos"
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" style={{ color: '#64748b' }} />
          </Link>
          <div>
            <h1 className="text-2xl font-black" style={{ color: '#1A3A52' }}>
              Nuevo Proyecto
            </h1>
            <p className="text-sm" style={{ color: '#64748b' }}>
              Agrega un nuevo proyecto al portafolio
            </p>
          </div>
        </div>
        <div className="flex gap-3">
          <button 
            onClick={() => setFormData({ ...formData, published: false })}
            className="px-4 py-2.5 rounded-xl font-semibold transition-all"
            style={{ background: '#f8fafc', border: '1px solid #e2e8f0', color: '#64748b' }}
          >
            Guardar Borrador
          </button>
          <button 
            onClick={handleSubmit}
            disabled={loading}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-white transition-all disabled:opacity-50"
            style={{
              background: 'linear-gradient(135deg, #D4AF37 0%, #B8860B 100%)',
            }}
          >
            <Save className="w-5 h-5" />
            {loading ? 'Guardando...' : 'Publicar'}
          </button>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Información Principal */}
        <div 
          className="p-6 rounded-2xl"
          style={{ background: 'white', border: '1px solid #e2e8f0' }}
        >
          <h2 className="text-lg font-bold mb-6" style={{ color: '#1A3A52' }}>
            Información Principal
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Título */}
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold mb-2" style={{ color: '#1A3A52' }}>
                Título del Proyecto *
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                placeholder="Ej: Puente Vehicular El Naranjo"
                className="w-full px-4 py-3 rounded-xl"
                style={{
                  background: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  color: '#1A3A52',
                  outline: 'none',
                }}
              />
            </div>

            {/* Slug */}
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold mb-2" style={{ color: '#1A3A52' }}>
                URL Amigable (slug)
              </label>
              <input
                type="text"
                name="slug"
                value={formData.slug}
                onChange={handleChange}
                placeholder="puente-vehicular-el-naranjo"
                className="w-full px-4 py-3 rounded-xl"
                style={{
                  background: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  color: '#1A3A52',
                  outline: 'none',
                }}
              />
              <p className="text-xs mt-1" style={{ color: '#94a3b8' }}>
                Se genera automáticamente del título
              </p>
            </div>

            {/* Categoría */}
            <div>
              <label className="block text-sm font-semibold mb-2" style={{ color: '#1A3A52' }}>
                Categoría *
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl"
                style={{
                  background: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  color: '#1A3A52',
                  outline: 'none',
                }}
              >
                <option value="">Seleccionar categoría</option>
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            {/* Año */}
            <div>
              <label className="block text-sm font-semibold mb-2" style={{ color: '#1A3A52' }}>
                Año *
              </label>
              <input
                type="number"
                name="year"
                value={formData.year}
                onChange={handleChange}
                required
                min="2018"
                max={new Date().getFullYear()}
                className="w-full px-4 py-3 rounded-xl"
                style={{
                  background: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  color: '#1A3A52',
                  outline: 'none',
                }}
              />
            </div>

            {/* Ubicación */}
            <div>
              <label className="block text-sm font-semibold mb-2" style={{ color: '#1A3A52' }}>
                Ubicación
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Ej: Localidad El Naranjo"
                className="w-full px-4 py-3 rounded-xl"
                style={{
                  background: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  color: '#1A3A52',
                  outline: 'none',
                }}
              />
            </div>

            {/* Municipio */}
            <div>
              <label className="block text-sm font-semibold mb-2" style={{ color: '#1A3A52' }}>
                Municipio
              </label>
              <select
                name="municipality"
                value={formData.municipality}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl"
                style={{
                  background: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  color: '#1A3A52',
                  outline: 'none',
                }}
              >
                <option value="">Seleccionar municipio</option>
                {municipalities.map(mun => (
                  <option key={mun} value={mun}>{mun}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Información del Cliente */}
        <div 
          className="p-6 rounded-2xl"
          style={{ background: 'white', border: '1px solid #e2e8f0' }}
        >
          <h2 className="text-lg font-bold mb-6" style={{ color: '#1A3A52' }}>
            Información del Cliente
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Cliente */}
            <div>
              <label className="block text-sm font-semibold mb-2" style={{ color: '#1A3A52' }}>
                Cliente
              </label>
              <input
                type="text"
                name="client"
                value={formData.client}
                onChange={handleChange}
                placeholder="Ej: H. Ayuntamiento de Coahuayutla"
                className="w-full px-4 py-3 rounded-xl"
                style={{
                  background: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  color: '#1A3A52',
                  outline: 'none',
                }}
              />
            </div>

            {/* Dependencia */}
            <div>
              <label className="block text-sm font-semibold mb-2" style={{ color: '#1A3A52' }}>
                Dependencia
              </label>
              <input
                type="text"
                name="dependency"
                value={formData.dependency}
                onChange={handleChange}
                placeholder="Ej: SDUOPOT"
                className="w-full px-4 py-3 rounded-xl"
                style={{
                  background: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  color: '#1A3A52',
                  outline: 'none',
                }}
              />
            </div>

            {/* Contrato */}
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold mb-2" style={{ color: '#1A3A52' }}>
                Número de Contrato
              </label>
              <input
                type="text"
                name="contract"
                value={formData.contract}
                onChange={handleChange}
                placeholder="Ej: MCJMI/2021-2024/OP/AD/035/2024"
                className="w-full px-4 py-3 rounded-xl"
                style={{
                  background: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  color: '#1A3A52',
                  outline: 'none',
                }}
              />
            </div>
          </div>
        </div>

        {/* Descripción */}
        <div 
          className="p-6 rounded-2xl"
          style={{ background: 'white', border: '1px solid #e2e8f0' }}
        >
          <h2 className="text-lg font-bold mb-6" style={{ color: '#1A3A52' }}>
            Descripción
          </h2>
          
          <div className="space-y-6">
            {/* Descripción corta */}
            <div>
              <label className="block text-sm font-semibold mb-2" style={{ color: '#1A3A52' }}>
                Descripción Corta
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={3}
                placeholder="Breve descripción del proyecto..."
                className="w-full px-4 py-3 rounded-xl resize-none"
                style={{
                  background: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  color: '#1A3A52',
                  outline: 'none',
                }}
              />
            </div>

            {/* Alcance */}
            <div>
              <label className="block text-sm font-semibold mb-2" style={{ color: '#1A3A52' }}>
                Alcance del Proyecto
              </label>
              <textarea
                name="scope"
                value={formData.scope}
                onChange={handleChange}
                rows={4}
                placeholder="Detalle del alcance y trabajos realizados..."
                className="w-full px-4 py-3 rounded-xl resize-none"
                style={{
                  background: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  color: '#1A3A52',
                  outline: 'none',
                }}
              />
            </div>
          </div>
        </div>

        {/* Imágenes */}
        <div 
          className="p-6 rounded-2xl"
          style={{ background: 'white', border: '1px solid #e2e8f0' }}
        >
          <h2 className="text-lg font-bold mb-6" style={{ color: '#1A3A52' }}>
            Imágenes
          </h2>
          
          <div 
            className="border-2 border-dashed rounded-xl p-8 text-center"
            style={{ borderColor: '#e2e8f0' }}
          >
            <ImageIcon className="w-12 h-12 mx-auto mb-4" style={{ color: '#94a3b8' }} />
            <p className="font-semibold mb-2" style={{ color: '#1A3A52' }}>
              Arrastra imágenes aquí o haz clic para seleccionar
            </p>
            <p className="text-sm mb-4" style={{ color: '#94a3b8' }}>
              PNG, JPG, WEBP hasta 10MB cada una
            </p>
            <button 
              type="button"
              className="px-4 py-2 rounded-lg font-medium"
              style={{ background: '#f8fafc', border: '1px solid #e2e8f0', color: '#64748b' }}
            >
              <Upload className="w-4 h-4 inline mr-2" />
              Seleccionar Archivos
            </button>
          </div>

          {images.length > 0 && (
            <div className="grid grid-cols-3 gap-4 mt-4">
              {images.map((img, i) => (
                <div key={i} className="relative aspect-video bg-gray-100 rounded-lg">
                  <button 
                    className="absolute top-2 right-2 p-1 rounded-full bg-red-500 text-white"
                    onClick={() => setImages(images.filter((_, idx) => idx !== i))}
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Opciones */}
        <div 
          className="p-6 rounded-2xl"
          style={{ background: 'white', border: '1px solid #e2e8f0' }}
        >
          <h2 className="text-lg font-bold mb-6" style={{ color: '#1A3A52' }}>
            Opciones
          </h2>
          
          <div className="space-y-4">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                name="featured"
                checked={formData.featured}
                onChange={handleChange}
                className="w-5 h-5 rounded"
              />
              <div>
                <p className="font-medium" style={{ color: '#1A3A52' }}>Proyecto Destacado</p>
                <p className="text-sm" style={{ color: '#64748b' }}>
                  Aparecerá en la sección principal del sitio
                </p>
              </div>
            </label>

            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                name="published"
                checked={formData.published}
                onChange={handleChange}
                className="w-5 h-5 rounded"
              />
              <div>
                <p className="font-medium" style={{ color: '#1A3A52' }}>Publicar Inmediatamente</p>
                <p className="text-sm" style={{ color: '#64748b' }}>
                  El proyecto será visible en el sitio web
                </p>
              </div>
            </label>
          </div>
        </div>
      </form>
    </div>
  )
}
