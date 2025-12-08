import { cn } from '@/lib/utils'
import { SERVICES } from '@/lib/constants'
import { ServiceCard } from '@/components/shared'
import { Button } from '@/components/ui'
import { ArrowRight } from 'lucide-react'

// ========================================
// TIPOS
// ========================================

interface ServicesSectionProps {
  className?: string
  showAll?: boolean
  limit?: number
}

// ========================================
// COMPONENTE
// ========================================

function ServicesSection({
  className,
  showAll = false,
  limit = 4,
}: ServicesSectionProps) {
  const displayServices = showAll ? SERVICES : SERVICES.slice(0, limit)

  return (
    <section className={cn('section bg-neutral-50', className)}>
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary-100 text-secondary-700 text-sm font-medium rounded-full mb-4">
            Nuestros Servicios
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-700 mb-4">
            Soluciones Integrales en{' '}
            <span className="text-gradient-accent">Construcción</span>
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Ofrecemos servicios completos de construcción, remodelación, venta de
            materiales y diseño arquitectónico con enfoque Bio-Sustentable.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayServices.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.shortDescription}
              icon={service.icon}
              href={`/servicios/${service.slug}`}
            />
          ))}
        </div>

        {/* CTA */}
        {!showAll && (
          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              rightIcon={<ArrowRight className="w-5 h-5" />}
              onClick={() => (window.location.href = '/servicios')}
            >
              Ver Todos los Servicios
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}

export { ServicesSection, type ServicesSectionProps }
