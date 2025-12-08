import Link from 'next/link'
import { cn } from '@/lib/utils'

// ========================================
// TIPOS
// ========================================

interface LogoProps {
  variant?: 'full' | 'icon' | 'text'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  linkToHome?: boolean
  colorMode?: 'light' | 'dark' | 'auto'
}

// ========================================
// COMPONENTE
// ========================================

function Logo({
  variant = 'full',
  size = 'md',
  className,
  linkToHome = true,
  colorMode = 'auto',
}: LogoProps) {
  const sizeStyles = {
    sm: { icon: 'w-8 h-8', text: 'text-lg' },
    md: { icon: 'w-10 h-10', text: 'text-xl' },
    lg: { icon: 'w-12 h-12', text: 'text-2xl' },
  }

  // Determinar colores basado en colorMode
  const textColor = colorMode === 'dark' ? 'text-white' : 'text-secondary-700'
  const subtextColor = colorMode === 'dark' ? 'text-white/70' : 'text-neutral-500'

  const LogoContent = () => (
    <div className={cn('flex items-center gap-2', className)}>
      {/* Icono del Logo - Representación del logo de Costa G */}
      {(variant === 'full' || variant === 'icon') && (
        <div
          className={cn(
            'relative flex items-center justify-center',
            sizeStyles[size].icon
          )}
        >
          {/* Hexágono con diseño similar al logo original */}
          <svg
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            {/* Fondo hexagonal */}
            <path
              d="M30 3L52.5 16.5V43.5L30 57L7.5 43.5V16.5L30 3Z"
              fill="transparent"
              stroke={colorMode === 'dark' ? '#ffffff40' : '#1A3A52'}
              strokeWidth="1"
            />
            {/* Parte superior verde */}
            <path
              d="M30 3L52.5 16.5L30 25L7.5 16.5L30 3Z"
              fill="#4ADE80"
            />
            {/* Parte izquierda blanca */}
            <path
              d="M7.5 16.5V43.5L30 57V25L7.5 16.5Z"
              fill="#FFFFFF"
              stroke="#E5E5E5"
              strokeWidth="0.5"
            />
            {/* Parte derecha gris */}
            <path
              d="M52.5 16.5V43.5L30 57V25L52.5 16.5Z"
              fill="#9CA3AF"
            />
            {/* Parte inferior negra/azul */}
            <path
              d="M30 35L44 28V40L30 50L16 40V28L30 35Z"
              fill="#1A3A52"
            />
          </svg>
        </div>
      )}

      {/* Texto del Logo */}
      {(variant === 'full' || variant === 'text') && (
        <div className="flex flex-col">
          <span
            className={cn(
              'font-montserrat font-bold leading-none tracking-tight',
              textColor,
              sizeStyles[size].text
            )}
          >
            COSTA G
          </span>
          {size !== 'sm' && (
            <span className={cn('text-[10px] tracking-widest uppercase', subtextColor)}>
              Constructora
            </span>
          )}
        </div>
      )}
    </div>
  )

  if (linkToHome) {
    return (
      <Link
        href="/"
        className="inline-flex focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 rounded-lg"
        aria-label="Costa G - Ir al inicio"
      >
        <LogoContent />
      </Link>
    )
  }

  return <LogoContent />
}

export { Logo, type LogoProps }
