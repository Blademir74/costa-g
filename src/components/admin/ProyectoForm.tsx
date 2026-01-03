'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import { 
  Proyecto, 
  ProyectoInsert, 
  ProyectoUpdate,
  CategoriaProyecto,
  CATEGORIAS_CONFIG,
  CATEGORIAS_LIST,
  AÑOS_DISPONIBLES 
} from '@/types/database'
import { uploadImage } from '@/lib/supabase'

interface ProyectoFormProps {
  proyecto?: Proyecto
  onSubmit: (data: ProyectoInsert | ProyectoUpdate) => Promise<void>
  isLoading?: boolean
}

export default function ProyectoForm({ proyecto, onSubmit, isLoading }: ProyectoFormProps) {
  const [formData, setFormData] = useState({
    titulo: proyecto?.titulo || '',
    titulo_corto: proyecto?.titulo_corto || '',
    descripcion: proyecto?.descripcion || '',
    descripcion_larga: proyecto?.descripcion_larga || '',
    ubicacion: proyecto?.ubicacion || '',
    municipio: proyecto?.municipio || '',
    año: proyecto?.año || new Date().getFullYear(),
    categoria: proyecto?.categoria || 'Puentes' as CategoriaProyecto,
    cliente: proyecto?.cliente || '',
    dependencia: proyecto?.dependencia || '',
    contrato: proyecto?.contrato || '',
    destacado: proyecto?.destacado || false,
    activo: proyecto?.activo ?? true,
    imagen_principal: proyecto?.imagen_principal || '',
  })

  const [imagePreview, setImagePreview] = useState<string | null>(proyecto?.imagen_principal || null)
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target
    const newValue = type === 'checkbox' 
      ? (e.target as HTMLInputElement).checked 
      : type === 'number' 
        ? parseInt(value) 
        : value
    
    setFormData(prev => ({ ...prev, [name]: newValue }))
  }

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    // Validar tipo de archivo
    if (!file.type.startsWith('image/')) {
      setError('Por favor selecciona un archivo de imagen válido')
      return
    }

    // Validar tamaño (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      setError('La imagen no debe superar 5MB')
      return
    }

    setUploading(true)
    setError(null)

    try {
      // Preview local
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result as string)
      }
      reader.readAsDataURL(file)

      // Subir a Supabase Storage
      const path = `proyectos/${formData.categoria.toLowerCase()}`
      const { url, error: uploadError } = await uploadImage(file, path)

      if (uploadError) {
        throw new Error(uploadError)
      }

      if (url) {
        setFormData(prev => ({ ...prev, imagen_principal: url }))
      }
    } catch (err: any) {
      setError(err.message || 'Error al subir la imagen')
      setImagePreview(proyecto?.imagen_principal || null)
    } finally {
      setUploading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    // Validaciones
    if (!formData.titulo.trim()) {
      setError('El título es requerido')
      return
    }
    if (!formData.categoria) {
      setError('La categoría es requerida')
      return
    }
    if (!formData.año) {
      setError('El año es requerido')
      return
    }

    try {
      await onSubmit(formData)
    } catch (err: any) {
      setError(err.message || 'Error al guardar el proyecto')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Error message */}
      {error && (
        <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm">
          {error}
        </div>
      )}

      {/* Información Principal */}
      <div className="bg-white rounded-2xl p-6 shadow-luxury">
        <h3 className="font-display text-lg font-semibold text-navy-500 mb-6 flex items-center gap-2">
          <svg className="w-5 h-5 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Información Principal
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Título */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-charcoal-600 mb-2">
              Título del Proyecto *
            </label>
            <input
              type="text"
              name="titulo"
              value={formData.titulo}
              onChange={handleChange}
              placeholder="Ej: Rehabilitación de Puente Vehicular El Naranjo"
              className="w-full px-4 py-3 rounded-xl border border-navy-100 
                       focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 
                       outline-none transition-all duration-300"
              required
            />
          </div>

          {/* Título Corto */}
          <div>
            <label className="block text-sm font-medium text-charcoal-600 mb-2">
              Título Corto
            </label>
            <input
              type="text"
              name="titulo_corto"
              value={formData.titulo_corto}
              onChange={handleChange}
              placeholder="Ej: Puente El Naranjo"
              className="w-full px-4 py-3 rounded-xl border border-navy-100 
                       focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 
                       outline-none transition-all duration-300"
            />
          </div>

          {/* Categoría */}
          <div>
            <label className="block text-sm font-medium text-charcoal-600 mb-2">
              Categoría *
            </label>
            <select
              name="categoria"
              value={formData.categoria}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-navy-100 
                       focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 
                       outline-none transition-all duration-300 bg-white"
              required
            >
              {CATEGORIAS_LIST.map((cat) => (
                <option key={cat} value={cat}>
                  {CATEGORIAS_CONFIG[cat].icon} {CATEGORIAS_CONFIG[cat].label}
                </option>
              ))}
            </select>
          </div>

          {/* Descripción */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-charcoal-600 mb-2">
              Descripción Breve
            </label>
            <textarea
              name="descripcion"
              value={formData.descripcion}
              onChange={handleChange}
              rows={3}
              placeholder="Descripción corta para tarjetas y previews..."
              className="w-full px-4 py-3 rounded-xl border border-navy-100 
                       focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 
                       outline-none transition-all duration-300 resize-none"
            />
          </div>

          {/* Descripción Larga */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-charcoal-600 mb-2">
              Descripción Detallada
            </label>
            <textarea
              name="descripcion_larga"
              value={formData.descripcion_larga}
              onChange={handleChange}
              rows={5}
              placeholder="Descripción completa del proyecto, especificaciones técnicas..."
              className="w-full px-4 py-3 rounded-xl border border-navy-100 
                       focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 
                       outline-none transition-all duration-300 resize-none"
            />
          </div>
        </div>
      </div>

      {/* Ubicación y Tiempo */}
      <div className="bg-white rounded-2xl p-6 shadow-luxury">
        <h3 className="font-display text-lg font-semibold text-navy-500 mb-6 flex items-center gap-2">
          <svg className="w-5 h-5 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          </svg>
          Ubicación y Tiempo
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Año */}
          <div>
            <label className="block text-sm font-medium text-charcoal-600 mb-2">
              Año *
            </label>
            <select
              name="año"
              value={formData.año}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-navy-100 
                       focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 
                       outline-none transition-all duration-300 bg-white"
              required
            >
              {AÑOS_DISPONIBLES.map((año) => (
                <option key={año} value={año}>{año}</option>
              ))}
            </select>
          </div>

          {/* Municipio */}
          <div>
            <label className="block text-sm font-medium text-charcoal-600 mb-2">
              Municipio
            </label>
            <input
              type="text"
              name="municipio"
              value={formData.municipio}
              onChange={handleChange}
              placeholder="Ej: Chilpancingo"
              className="w-full px-4 py-3 rounded-xl border border-navy-100 
                       focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 
                       outline-none transition-all duration-300"
            />
          </div>

          {/* Ubicación */}
          <div>
            <label className="block text-sm font-medium text-charcoal-600 mb-2">
              Ubicación Específica
            </label>
            <input
              type="text"
              name="ubicacion"
              value={formData.ubicacion}
              onChange={handleChange}
              placeholder="Ej: Km 45+200 Carretera Federal"
              className="w-full px-4 py-3 rounded-xl border border-navy-100 
                       focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 
                       outline-none transition-all duration-300"
            />
          </div>
        </div>
      </div>

      {/* Cliente y Contrato */}
      <div className="bg-white rounded-2xl p-6 shadow-luxury">
        <h3 className="font-display text-lg font-semibold text-navy-500 mb-6 flex items-center gap-2">
          <svg className="w-5 h-5 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
          Cliente y Contrato
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Cliente */}
          <div>
            <label className="block text-sm font-medium text-charcoal-600 mb-2">
              Cliente
            </label>
            <input
              type="text"
              name="cliente"
              value={formData.cliente}
              onChange={handleChange}
              placeholder="Ej: H. Ayuntamiento de..."
              className="w-full px-4 py-3 rounded-xl border border-navy-100 
                       focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 
                       outline-none transition-all duration-300"
            />
          </div>

          {/* Dependencia */}
          <div>
            <label className="block text-sm font-medium text-charcoal-600 mb-2">
              Dependencia
            </label>
            <input
              type="text"
              name="dependencia"
              value={formData.dependencia}
              onChange={handleChange}
              placeholder="Ej: SDUOPOT, CICAEG"
              className="w-full px-4 py-3 rounded-xl border border-navy-100 
                       focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 
                       outline-none transition-all duration-300"
            />
          </div>

          {/* Contrato */}
          <div>
            <label className="block text-sm font-medium text-charcoal-600 mb-2">
              Número de Contrato
            </label>
            <input
              type="text"
              name="contrato"
              value={formData.contrato}
              onChange={handleChange}
              placeholder="Ej: CONT-2024-001"
              className="w-full px-4 py-3 rounded-xl border border-navy-100 
                       focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 
                       outline-none transition-all duration-300"
            />
          </div>
        </div>
      </div>

      {/* Imagen Principal */}
      <div className="bg-white rounded-2xl p-6 shadow-luxury">
        <h3 className="font-display text-lg font-semibold text-navy-500 mb-6 flex items-center gap-2">
          <svg className="w-5 h-5 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          Imagen Principal
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Upload zone */}
          <div>
            <div 
              onClick={() => fileInputRef.current?.click()}
              className={`relative border-2 border-dashed rounded-xl p-8 text-center cursor-pointer
                        transition-all duration-300 ${
                          uploading 
                            ? 'border-gold-400 bg-gold-50' 
                            : 'border-navy-200 hover:border-gold-400 hover:bg-gold-50/50'
                        }`}
            >
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
              
              {uploading ? (
                <div className="flex flex-col items-center gap-3">
                  <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-gold-500"></div>
                  <span className="text-gold-600 font-medium">Subiendo imagen...</span>
                </div>
              ) : (
                <>
                  <svg className="w-12 h-12 mx-auto text-navy-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                  <p className="text-charcoal-600 font-medium mb-1">
                    Haz clic para subir una imagen
                  </p>
                  <p className="text-charcoal-400 text-sm">
                    PNG, JPG, WebP hasta 5MB
                  </p>
                </>
              )}
            </div>
          </div>

          {/* Preview */}
          <div>
            {imagePreview ? (
              <div className="relative aspect-video rounded-xl overflow-hidden border border-navy-100">
                <Image
                  src={imagePreview}
                  alt="Preview"
                  fill
                  className="object-cover"
                />
                <button
                  type="button"
                  onClick={() => {
                    setImagePreview(null)
                    setFormData(prev => ({ ...prev, imagen_principal: '' }))
                  }}
                  className="absolute top-2 right-2 w-8 h-8 bg-red-500 text-white rounded-lg
                           flex items-center justify-center hover:bg-red-600 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            ) : (
              <div className="aspect-video rounded-xl bg-navy-50 border border-navy-100 flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-12 h-12 mx-auto text-navy-200 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-navy-300 text-sm">Sin imagen</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Estado y Visibilidad */}
      <div className="bg-white rounded-2xl p-6 shadow-luxury">
        <h3 className="font-display text-lg font-semibold text-navy-500 mb-6 flex items-center gap-2">
          <svg className="w-5 h-5 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          Estado y Visibilidad
        </h3>

        <div className="flex flex-wrap gap-6">
          {/* Destacado */}
          <label className="flex items-center gap-3 cursor-pointer group">
            <input
              type="checkbox"
              name="destacado"
              checked={formData.destacado}
              onChange={handleChange}
              className="sr-only peer"
            />
            <div className="w-12 h-6 rounded-full bg-navy-100 peer-checked:bg-gold-500 
                          relative transition-colors duration-300">
              <div className="absolute top-1 left-1 w-4 h-4 rounded-full bg-white shadow
                            peer-checked:translate-x-6 transition-transform duration-300"></div>
            </div>
            <span className="text-charcoal-600 group-hover:text-navy-500 transition-colors">
              Proyecto Destacado
            </span>
          </label>

          {/* Activo */}
          <label className="flex items-center gap-3 cursor-pointer group">
            <input
              type="checkbox"
              name="activo"
              checked={formData.activo}
              onChange={handleChange}
              className="sr-only peer"
            />
            <div className="w-12 h-6 rounded-full bg-navy-100 peer-checked:bg-green-500 
                          relative transition-colors duration-300">
              <div className="absolute top-1 left-1 w-4 h-4 rounded-full bg-white shadow
                            peer-checked:translate-x-6 transition-transform duration-300"></div>
            </div>
            <span className="text-charcoal-600 group-hover:text-navy-500 transition-colors">
              Visible en el Sitio
            </span>
          </label>
        </div>
      </div>

      {/* Submit Button */}
      <div className="flex justify-end gap-4">
        <button
          type="button"
          onClick={() => window.history.back()}
          className="px-6 py-3 rounded-xl border border-navy-200 text-charcoal-600
                   hover:bg-navy-50 transition-all duration-300"
        >
          Cancelar
        </button>
        <button
          type="submit"
          disabled={isLoading || uploading}
          className="px-8 py-3 rounded-xl bg-gradient-to-r from-navy-500 to-navy-400 
                   text-white font-semibold shadow-luxury-button
                   hover:shadow-luxury-button-hover hover:-translate-y-0.5
                   disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
                   transition-all duration-300"
        >
          {isLoading ? (
            <span className="flex items-center gap-2">
              <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Guardando...
            </span>
          ) : proyecto ? (
            'Actualizar Proyecto'
          ) : (
            'Crear Proyecto'
          )}
        </button>
      </div>
    </form>
  )
}
