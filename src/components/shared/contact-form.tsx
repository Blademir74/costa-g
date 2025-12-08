'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'
import { Button, Input, Textarea, Select } from '@/components/ui'
import { SERVICES } from '@/lib/constants'
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'

// ========================================
// TIPOS
// ========================================

interface ContactFormProps {
  className?: string
  variant?: 'default' | 'compact'
  title?: string
  description?: string
}

interface FormData {
  name: string
  email: string
  phone: string
  service: string
  message: string
  privacy: boolean
}

interface FormErrors {
  name?: string
  email?: string
  phone?: string
  message?: string
  privacy?: string
}

type FormStatus = 'idle' | 'loading' | 'success' | 'error'

// ========================================
// OPCIONES DE SERVICIO
// ========================================

const serviceOptions = [
  { value: '', label: 'Selecciona un servicio' },
  ...SERVICES.map((s) => ({ value: s.id, label: s.title })),
  { value: 'otro', label: 'Otro' },
]

// ========================================
// VALIDACIÓN
// ========================================

const validateForm = (data: FormData): FormErrors => {
  const errors: FormErrors = {}

  if (!data.name || data.name.length < 3) {
    errors.name = 'El nombre debe tener al menos 3 caracteres'
  }

  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Ingresa un correo electrónico válido'
  }

  if (!data.phone || !/^\d{10}$/.test(data.phone.replace(/\D/g, ''))) {
    errors.phone = 'Ingresa un teléfono válido (10 dígitos)'
  }

  if (!data.message || data.message.length < 20) {
    errors.message = 'El mensaje debe tener al menos 20 caracteres'
  }

  if (!data.privacy) {
    errors.privacy = 'Debes aceptar la política de privacidad'
  }

  return errors
}

// ========================================
// COMPONENTE
// ========================================

function ContactForm({
  className,
  variant = 'default',
  title = 'Envíanos un mensaje',
  description = 'Completa el formulario y nos pondremos en contacto contigo pronto.',
}: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    privacy: false,
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<FormStatus>('idle')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))

    // Limpiar error del campo
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validar
    const validationErrors = validateForm(formData)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setStatus('loading')

    try {
      // Simular envío (reemplazar con API real)
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Aquí iría la llamada a la API
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData),
      // })

      setStatus('success')

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
        privacy: false,
      })

      // Reset status después de 5 segundos
      setTimeout(() => setStatus('idle'), 5000)
    } catch (error) {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  if (status === 'success') {
    return (
      <div
        className={cn(
          'p-8 rounded-xl bg-green-50 border border-green-200',
          'text-center',
          className
        )}
      >
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-green-800 mb-2">
          ¡Mensaje enviado!
        </h3>
        <p className="text-green-700">
          Gracias por contactarnos. Nos pondremos en contacto contigo pronto.
        </p>
      </div>
    )
  }

  if (status === 'error') {
    return (
      <div
        className={cn(
          'p-8 rounded-xl bg-red-50 border border-red-200',
          'text-center',
          className
        )}
      >
        <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-red-800 mb-2">
          Error al enviar
        </h3>
        <p className="text-red-700 mb-4">
          Hubo un problema al enviar tu mensaje. Por favor intenta nuevamente.
        </p>
        <Button
          variant="outline"
          onClick={() => setStatus('idle')}
          className="border-red-300 text-red-700 hover:bg-red-100"
        >
          Intentar de nuevo
        </Button>
      </div>
    )
  }

  return (
    <div className={cn('', className)}>
      {/* Header */}
      {variant === 'default' && (
        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-secondary-700 mb-2">
            {title}
          </h3>
          <p className="text-neutral-600">{description}</p>
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Honeypot (anti-spam) */}
        <input
          type="text"
          name="website"
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
        />

        {/* Name */}
        <Input
          label="Nombre completo"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Tu nombre"
          error={errors.name}
          required
          disabled={status === 'loading'}
        />

        {/* Email & Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <Input
            label="Correo electrónico"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="tucorreo@ejemplo.com"
            error={errors.email}
            required
            disabled={status === 'loading'}
          />

          <Input
            label="Teléfono"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="747 123 4567"
            error={errors.phone}
            required
            disabled={status === 'loading'}
          />
        </div>

        {/* Service */}
        <Select
          label="Tipo de servicio"
          name="service"
          value={formData.service}
          onChange={handleChange}
          options={serviceOptions}
          disabled={status === 'loading'}
        />

        {/* Message */}
        <Textarea
          label="Mensaje"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Cuéntanos sobre tu proyecto o consulta..."
          rows={5}
          error={errors.message}
          required
          disabled={status === 'loading'}
        />

        {/* Privacy Checkbox */}
        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            id="privacy"
            name="privacy"
            checked={formData.privacy}
            onChange={handleChange}
            className={cn(
              'mt-1 w-4 h-4 rounded border-neutral-300',
              'text-secondary-700 focus:ring-primary-400',
              errors.privacy && 'border-red-500'
            )}
            disabled={status === 'loading'}
          />
          <label
            htmlFor="privacy"
            className={cn(
              'text-sm text-neutral-600',
              errors.privacy && 'text-red-500'
            )}
          >
            He leído y acepto la{' '}
            <a
              href="/privacidad"
              target="_blank"
              className="text-secondary-700 hover:text-secondary-800 underline"
            >
              política de privacidad
            </a>
          </label>
        </div>
        {errors.privacy && (
          <p className="text-sm text-red-500 -mt-3">{errors.privacy}</p>
        )}

        {/* Submit Button */}
        <Button
          type="submit"
          variant="primary"
          size="lg"
          fullWidth
          isLoading={status === 'loading'}
          leftIcon={status !== 'loading' && <Send className="w-5 h-5" />}
        >
          {status === 'loading' ? 'Enviando...' : 'Enviar mensaje'}
        </Button>
      </form>
    </div>
  )
}

export { ContactForm, type ContactFormProps }
