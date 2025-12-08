'use client'

import { forwardRef } from 'react'
import { cn } from '@/lib/utils'
import { Loader2 } from 'lucide-react'

// ========================================
// TIPOS
// ========================================

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'accent' | 'danger'
type ButtonSize = 'sm' | 'md' | 'lg' | 'xl'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  isLoading?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  fullWidth?: boolean
}

// ========================================
// ESTILOS
// ========================================

const baseStyles = `
  inline-flex items-center justify-center gap-2
  font-semibold rounded-lg
  transition-all duration-300 ease-out
  focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
  disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none
  active:scale-[0.98]
`

const variantStyles: Record<ButtonVariant, string> = {
  primary: `
    bg-secondary-700 text-white
    hover:bg-secondary-800 hover:shadow-lg
    focus-visible:ring-secondary-500
  `,
  secondary: `
    bg-primary-300 text-secondary-700
    hover:bg-primary-400 hover:shadow-md
    focus-visible:ring-primary-400
  `,
  outline: `
    bg-transparent border-2 border-secondary-700 text-secondary-700
    hover:bg-secondary-700 hover:text-white
    focus-visible:ring-secondary-500
  `,
  ghost: `
    bg-transparent text-secondary-700
    hover:bg-secondary-50
    focus-visible:ring-secondary-500
  `,
  accent: `
    bg-accent-400 text-secondary-900
    hover:bg-accent-500 hover:shadow-lg hover:shadow-accent-400/25
    focus-visible:ring-accent-400
  `,
  danger: `
    bg-red-500 text-white
    hover:bg-red-600 hover:shadow-lg
    focus-visible:ring-red-500
  `,
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'text-sm px-4 py-2 min-h-[36px]',
  md: 'text-base px-6 py-2.5 min-h-[44px]',
  lg: 'text-lg px-8 py-3 min-h-[52px]',
  xl: 'text-xl px-10 py-4 min-h-[60px]',
}

// ========================================
// COMPONENTE
// ========================================

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      isLoading = false,
      leftIcon,
      rightIcon,
      fullWidth = false,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
          baseStyles,
          variantStyles[variant],
          sizeStyles[size],
          fullWidth && 'w-full',
          className
        )}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            <span>Cargando...</span>
          </>
        ) : (
          <>
            {leftIcon && <span className="flex-shrink-0">{leftIcon}</span>}
            {children}
            {rightIcon && <span className="flex-shrink-0">{rightIcon}</span>}
          </>
        )}
      </button>
    )
  }
)

Button.displayName = 'Button'

export { Button, type ButtonProps, type ButtonVariant, type ButtonSize }
