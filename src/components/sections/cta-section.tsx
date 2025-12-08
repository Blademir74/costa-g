import { cn } from '@/lib/utils'
import { Button } from '@/components/ui'
import { SITE_CONFIG } from '@/lib/constants'
import { Phone, MessageCircle, ArrowRight } from 'lucide-react'

// ========================================
// TIPOS
// ========================================

interface CTASectionProps {
  className?: string
  variant?: 'default' | 'contact' | 'quote'
  title?: string
  description?: string
  primaryButtonText?: string
  primaryButtonHref?: string
  secondaryButtonText?: string
  secondaryButtonHref?: string
}

// ========================================
// COMPONENTE
// ========================================

function CTASection({
  className,
  variant = 'default',
  title = '¿Tienes un proyecto en mente?',
  description = 'Contáctanos para una cotización gratuita. Nuestro equipo está listo para ayudarte a hacer realidad tu proyecto.',
  primaryButtonText = 'Solicitar Cotización',
  primaryButtonHref = '/contacto',
  secondaryButtonText = 'Llamar Ahora',
  secondaryButtonHref,
}: CTASectionProps) {
  const phoneHref = secondaryButtonHref || `tel:${SITE_CONFIG.contact.phoneRaw}`

  if (variant === 'contact') {
    return (
      <section
        className={cn(
          'py-16 md:py-20 bg-accent-400',
          className
        )}
      >
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-2">
                {title}
              </h2>
              <p className="text-secondary-800/80">{description}</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="primary"
                size="lg"
                rightIcon={<ArrowRight className="w-5 h-5" />}
                onClick={() => (window.location.href = primaryButtonHref)}
              >
                {primaryButtonText}
              </Button>
              <Button
                variant="outline"
                size="lg"
                leftIcon={<Phone className="w-5 h-5" />}
                className="border-secondary-900 text-secondary-900 hover:bg-secondary-900 hover:text-white"
                onClick={() => (window.location.href = phoneHref)}
              >
                {secondaryButtonText}
              </Button>
            </div>
          </div>
        </div>
      </section>
    )
  }

  if (variant === 'quote') {
    return (
      <section className={cn('section', className)}>
        <div className="container-custom">
          <div
            className={cn(
              'relative overflow-hidden rounded-2xl',
              'bg-gradient-to-r from-secondary-700 to-secondary-800',
              'p-8 md:p-12 lg:p-16'
            )}
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
              />
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent-400/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary-300/20 rounded-full blur-3xl" />

            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                {title}
              </h2>
              <p className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto">
                {description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="accent"
                  size="lg"
                  rightIcon={<ArrowRight className="w-5 h-5" />}
                  onClick={() => (window.location.href = primaryButtonHref)}
                >
                  {primaryButtonText}
                </Button>
                <Button
                  variant="ghost"
                  size="lg"
                  leftIcon={<MessageCircle className="w-5 h-5" />}
                  className="text-white hover:bg-white/10"
                  onClick={() => {
                    const whatsappUrl = `https://wa.me/${SITE_CONFIG.contact.whatsapp}?text=${encodeURIComponent(
                      SITE_CONFIG.contact.whatsappMessage
                    )}`
                    window.open(whatsappUrl, '_blank')
                  }}
                >
                  WhatsApp
                </Button>
              </div>

              {/* Contact Info */}
              <div className="mt-8 pt-8 border-t border-white/20">
                <p className="text-primary-200 text-sm mb-2">
                  O llámanos directamente
                </p>
                <a
                  href={`tel:${SITE_CONFIG.contact.phoneRaw}`}
                  className="text-2xl font-bold text-accent-400 hover:text-accent-300 transition-colors"
                >
                  {SITE_CONFIG.contact.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  // Default variant
  return (
    <section
      className={cn(
        'py-16 md:py-20',
        'bg-gradient-to-r from-secondary-700 to-secondary-800',
        className
      )}
    >
      <div className="container-custom text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          {title}
        </h2>
        <p className="text-primary-100 max-w-2xl mx-auto mb-8">
          {description}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            variant="accent"
            size="lg"
            rightIcon={<ArrowRight className="w-5 h-5" />}
            onClick={() => (window.location.href = primaryButtonHref)}
          >
            {primaryButtonText}
          </Button>
          <Button
            variant="outline"
            size="lg"
            leftIcon={<Phone className="w-5 h-5" />}
            className="border-white text-white hover:bg-white hover:text-secondary-700"
            onClick={() => (window.location.href = phoneHref)}
          >
            {secondaryButtonText}
          </Button>
        </div>
      </div>
    </section>
  )
}

export { CTASection, type CTASectionProps }
