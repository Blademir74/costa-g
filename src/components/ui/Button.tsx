'use client'

import Link from 'next/link'
import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  href?: string
  onClick?: () => void
  size?: 'sm' | 'md' | 'lg'
  className?: string
  type?: 'button' | 'submit'
}

export default function Button({ 
  children, 
  href, 
  onClick, 
  size = 'md', 
  className = '',
  type = 'button'
}: ButtonProps) {
  
  // Estilos base
  const baseStyles = "inline-flex items-center justify-center font-bold transition-all duration-300 rounded-xl active:scale-95"
  
  // Variantes de tamaño
  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  }

  // Estilos visuales (Primary por defecto)
  const colorStyles = "bg-sky-600 hover:bg-sky-500 text-white shadow-lg hover:shadow-sky-500/30"

  const combinedStyles = `${baseStyles} ${sizeStyles[size]} ${colorStyles} ${className}`

  // Renderizar como Link si hay href
  if (href) {
    return (
      <Link href={href} className={combinedStyles}>
        {children}
      </Link>
    )
  }

  // Renderizar como Botón normal
  return (
    <button 
      type={type}
      onClick={onClick}
      className={combinedStyles}
    >
      {children}
    </button>
  )
}