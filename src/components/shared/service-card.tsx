import Link from 'next/link'
import { cn } from '@/lib/utils'
import {
  Building2,
  Hammer,
  Package,
  PenTool,
  FileCheck,
  ArrowRight,
} from 'lucide-react'

// ========================================
// TIPOS
// ========================================

interface ServiceCardProps {
  title: string
  description: string
  icon: string
  href: string
  variant?: 'default' | 'compact' | 'featured'
  className?: string
}

// ========================================
// ICONOS MAP
// ========================================

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Building2,
  Hammer,
  Package,
  PenTool,
  FileCheck,
}

// ========================================
// COMPONENTE
// ========================================

function ServiceCard({
  title,
  description,
  icon,
  href,
  variant = 'default',
  className,
}: ServiceCardProps) {
  const IconComponent = iconMap[icon] || Building2

  if (variant === 'compact') {
    return (
      <Link
        href={href}
        className={cn(
          'group flex items-center gap-4 p-4 rounded-xl',
          'bg-white border border-neutral-100',
          'hover:border-primary-300 hover:shadow-soft',
          'transition-all duration-300',
          className
        )}
      >
        <div
          className={cn(
            'w-12 h-12 flex items-center justify-center rounded-lg',
            'bg-primary-100 text-secondary-700',
            'group-hover:bg-primary-300',
            'transition-colors duration-300'
          )}
        >
          <IconComponent className="w-6 h-6" />
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-secondary-700 group-hover:text-secondary-800">
            {title}
          </h4>
          <p className="text-sm text-neutral-500 truncate">{description}</p>
        </div>
        <ArrowRight
          className={cn(
            'w-5 h-5 text-neutral-300',
            'group-hover:text-secondary-700 group-hover:translate-x-1',
            'transition-all duration-300'
          )}
        />
      </Link>
    )
  }

  if (variant === 'featured') {
    return (
      <Link
        href={href}
        className={cn(
          'group relative overflow-hidden rounded-2xl',
          'bg-gradient-to-br from-secondary-700 to-secondary-900',
          'p-8 text-white',
          'hover:shadow-strong',
          'transition-all duration-300',
          className
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

        {/* Content */}
        <div className="relative z-10">
          <div
            className={cn(
              'w-16 h-16 flex items-center justify-center rounded-xl mb-6',
              'bg-accent-400 text-secondary-900',
              'group-hover:scale-110',
              'transition-transform duration-300'
            )}
          >
            <IconComponent className="w-8 h-8" />
          </div>

          <h3 className="text-2xl font-bold mb-3">{title}</h3>
          <p className="text-primary-100 mb-6 line-clamp-3">{description}</p>

          <div className="flex items-center gap-2 text-accent-400 font-semibold">
            <span>Ver más</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
          </div>
        </div>
      </Link>
    )
  }

  // Default variant
  return (
    <Link
      href={href}
      className={cn(
        'group block p-6 rounded-xl',
        'bg-white border border-neutral-100',
        'hover:border-primary-300 hover:shadow-medium hover:-translate-y-1',
        'transition-all duration-300',
        className
      )}
    >
      {/* Icon */}
      <div
        className={cn(
          'w-14 h-14 flex items-center justify-center rounded-xl mb-5',
          'bg-primary-100 text-secondary-700',
          'group-hover:bg-primary-300 group-hover:scale-110',
          'transition-all duration-300'
        )}
      >
        <IconComponent className="w-7 h-7" />
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold text-secondary-700 mb-3 group-hover:text-secondary-800">
        {title}
      </h3>

      {/* Description */}
      <p className="text-neutral-600 mb-4 line-clamp-3">{description}</p>

      {/* CTA */}
      <div className="flex items-center gap-2 text-secondary-700 font-medium">
        <span>Ver más</span>
        <ArrowRight
          className={cn(
            'w-4 h-4',
            'group-hover:translate-x-1',
            'transition-transform duration-300'
          )}
        />
      </div>
    </Link>
  )
}

export { ServiceCard, type ServiceCardProps }
