'use client'

import Link from 'next/link'

interface LogoProps {
  variant?: 'primary' | 'inverse' | 'light' | 'mono'
  showText?: boolean
  showDescriptor?: boolean
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

/**
 * LOGO PREMIUM - COSTA G
 * 
 * Monograma "CG" con:
 * - Tipografía: Playfair Display 700
 * - Acento: Punto dorado (#D4AF37)
 * - Descriptor: Poppins 300, tracking 0.2em
 * 
 * Variantes: primary | inverse | light | mono
 */
export default function Logo({ 
  variant = 'primary', 
  showText = true, 
  showDescriptor = true,
  size = 'md',
  className = '' 
}: LogoProps) {
  const sizes = {
    sm: { 
      icon: 'w-10 h-10', 
      monogram: 'text-lg',
      name: 'text-sm',
      descriptor: 'text-[8px]',
      dot: 'w-1 h-1',
    },
    md: { 
      icon: 'w-12 h-12', 
      monogram: 'text-xl',
      name: 'text-base',
      descriptor: 'text-[10px]',
      dot: 'w-1.5 h-1.5',
    },
    lg: { 
      icon: 'w-16 h-16', 
      monogram: 'text-2xl',
      name: 'text-lg',
      descriptor: 'text-xs',
      dot: 'w-2 h-2',
    },
  }

  const colors = {
    primary: {
      iconBg: 'bg-navy-500',
      iconText: 'text-white',
      dot: 'bg-gold-500',
      name: 'text-navy-500',
      descriptor: 'text-charcoal-400',
    },
    inverse: {
      iconBg: 'bg-white/10 backdrop-blur-sm border border-white/20',
      iconText: 'text-white',
      dot: 'bg-gold-400',
      name: 'text-white',
      descriptor: 'text-white/60',
    },
    light: {
      iconBg: 'bg-white border border-navy-100',
      iconText: 'text-navy-500',
      dot: 'bg-gold-500',
      name: 'text-navy-500',
      descriptor: 'text-charcoal-400',
    },
    mono: {
      iconBg: 'bg-navy-500',
      iconText: 'text-white',
      dot: 'bg-white',
      name: 'text-navy-500',
      descriptor: 'text-charcoal-400',
    },
  }

  const s = sizes[size]
  const c = colors[variant]

  return (
    <Link 
      href="/" 
      className={`group inline-flex items-center gap-3 transition-all duration-300 hover:opacity-90 ${className}`}
      aria-label="Costa G - Ir al inicio"
    >
      {/* Monograma CG */}
      <div 
        className={`${s.icon} rounded-xl flex items-center justify-center relative
                    shadow-luxury transition-all duration-300 
                    group-hover:shadow-luxury-lg group-hover:-translate-y-0.5
                    ${c.iconBg}`}
      >
        <span className={`font-display font-bold ${s.monogram} ${c.iconText} tracking-wide`}>
          CG
        </span>
        
        {/* Punto dorado de acento */}
        <span 
          className={`absolute bottom-2 left-1/2 -translate-x-1/2 ${s.dot} rounded-full ${c.dot}
                     shadow-sm transition-transform duration-300 group-hover:scale-125`}
          aria-hidden="true"
        />
      </div>

      {/* Texto del Logo */}
      {showText && (
        <div className="flex flex-col">
          <span 
            className={`font-display font-semibold ${s.name} ${c.name} 
                       leading-tight tracking-[0.05em]`}
          >
            COSTA G
          </span>
          
          {showDescriptor && (
            <span 
              className={`${s.descriptor} ${c.descriptor} uppercase tracking-[0.2em] font-light`}
            >
              Inmobiliaria
            </span>
          )}
        </div>
      )}
    </Link>
  )
}

/**
 * Logo SVG para favicon y exportación
 */
export function LogoSVG({ className = 'w-12 h-12' }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 48 48" 
      fill="none" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="10" fill="#1A3A52"/>
      <text x="10" y="32" fontFamily="serif" fontSize="18" fontWeight="700" fill="white">CG</text>
      <circle cx="24" cy="38" r="2.5" fill="#D4AF37"/>
    </svg>
  )
}

/**
 * Logo completo para Footer
 */
export function LogoFull({ variant = 'primary' }: { variant?: 'primary' | 'inverse' }) {
  const c = variant === 'inverse' 
    ? { name: 'text-white', legal: 'text-white/50', dot: 'bg-gold-400' }
    : { name: 'text-navy-500', legal: 'text-charcoal-400', dot: 'bg-gold-500' }

  return (
    <Link href="/" className="group inline-block">
      <div className="flex items-center gap-2 mb-1">
        <span className={`font-display font-bold text-2xl ${c.name} tracking-[0.02em]`}>
          COSTA
        </span>
        <span className={`w-2 h-2 rounded-full ${c.dot}`} aria-hidden="true" />
        <span className={`font-display font-bold text-2xl ${c.name} tracking-[0.02em]`}>
          G
        </span>
      </div>
      <span className={`block text-[10px] ${c.legal} tracking-[0.2em] uppercase font-light`}>
        Comercializadora e Inmobiliaria
      </span>
    </Link>
  )
}
