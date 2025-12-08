import { cn } from '@/lib/utils'
import { VALUES } from '@/lib/constants'
import {
  Shield,
  Award,
  CheckCircle,
  Rocket,
  Leaf,
  Users,
  Clock,
  ThumbsUp,
} from 'lucide-react'

// ========================================
// ICONOS MAP
// ========================================

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Shield,
  Award,
  CheckCircle,
  Rocket,
  Leaf,
  Users,
  Clock,
  ThumbsUp,
}

// ========================================
// CARACTERÍSTICAS PRINCIPALES
// ========================================

const FEATURES = [
  {
    icon: 'Leaf',
    title: 'Bio-Sustentable',
    description:
      'Construcción con menores procesos contaminantes y huella de carbono reducida.',
  },
  {
    icon: 'Users',
    title: 'Personal Profesional',
    description:
      'Equipo técnico altamente calificado y certificado en su área.',
  },
  {
    icon: 'Clock',
    title: 'Cumplimiento',
    description:
      'Entregamos en tiempo y forma, respetando presupuestos acordados.',
  },
  {
    icon: 'ThumbsUp',
    title: 'Calidad Garantizada',
    description:
      'Materiales de primera y procesos certificados en cada proyecto.',
  },
]

// ========================================
// TIPOS
// ========================================

interface WhyUsSectionProps {
  className?: string
  variant?: 'default' | 'values'
}

// ========================================
// COMPONENTE
// ========================================

function WhyUsSection({ className, variant = 'default' }: WhyUsSectionProps) {
  if (variant === 'values') {
    return (
      <section className={cn('section bg-white', className)}>
        <div className="container-custom">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-block px-4 py-1.5 bg-primary-100 text-secondary-700 text-sm font-medium rounded-full mb-4">
              Nuestros Valores
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-700 mb-4">
              Lo que nos{' '}
              <span className="text-gradient-accent">Define</span>
            </h2>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((value, index) => {
              const IconComponent = iconMap[value.icon] || Shield
              return (
                <div
                  key={index}
                  className={cn(
                    'text-center p-6 rounded-xl',
                    'bg-neutral-50 border border-neutral-100',
                    'hover:border-primary-300 hover:shadow-soft',
                    'transition-all duration-300'
                  )}
                >
                  <div
                    className={cn(
                      'w-16 h-16 mx-auto mb-4 rounded-full',
                      'bg-primary-100 text-secondary-700',
                      'flex items-center justify-center'
                    )}
                  >
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-secondary-700 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-neutral-600 text-sm">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className={cn('section bg-primary-100', className)}>
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <span className="inline-block px-4 py-1.5 bg-white text-secondary-700 text-sm font-medium rounded-full mb-4">
              ¿Por qué Costa G?
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-700 mb-6">
              Construimos con{' '}
              <span className="text-gradient-accent">
                Responsabilidad Ambiental
              </span>
            </h2>
            <p className="text-neutral-700 mb-8 leading-relaxed">
              Somos una empresa constructora comprometida con el medio ambiente y
              la calidad. Nuestra misión es construir con menores procesos
              contaminantes, reduciendo la huella de carbono en cada proyecto.
            </p>

            {/* Features List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {FEATURES.map((feature, index) => {
                const IconComponent = iconMap[feature.icon] || CheckCircle
                return (
                  <div
                    key={index}
                    className={cn(
                      'flex items-start gap-3 p-4 rounded-lg',
                      'bg-white/70 backdrop-blur-sm'
                    )}
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent-100 text-accent-600 flex items-center justify-center">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-secondary-700 mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-sm text-neutral-600">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Image / Stats */}
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-secondary-600 to-secondary-800 p-8 flex items-center justify-center">
              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-20 h-20 rounded-full bg-accent-400/20" />
              <div className="absolute bottom-8 left-8 w-32 h-32 rounded-full bg-primary-300/30" />

              {/* Content */}
              <div className="relative z-10 text-center text-white">
                <div className="mb-6">
                  <Leaf className="w-16 h-16 mx-auto text-accent-400" />
                </div>
                <h3 className="text-2xl font-bold mb-2">
                  Certificación Bio-Sustentable
                </h3>
                <p className="text-primary-100 mb-6">
                  Comprometidos con edificaciones que respetan el medio ambiente
                </p>

                {/* Mini Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <div className="text-3xl font-bold text-accent-400">243+</div>
                    <div className="text-sm text-primary-100">Puentes</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <div className="text-3xl font-bold text-accent-400">100%</div>
                    <div className="text-sm text-primary-100">Eco-responsable</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export { WhyUsSection, type WhyUsSectionProps }
