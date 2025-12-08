'use client'

import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

// ========================================
// TIPOS
// ========================================

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  hint?: string
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

// ========================================
// COMPONENTE
// ========================================

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type = 'text',
      label,
      error,
      hint,
      leftIcon,
      rightIcon,
      disabled,
      id,
      ...props
    },
    ref
  ) => {
    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`

    return (
      <div className="w-full">
        {/* Label */}
        {label && (
          <label
            htmlFor={inputId}
            className="block text-sm font-medium text-secondary-700 mb-2"
          >
            {label}
            {props.required && (
              <span className="text-red-500 ml-1">*</span>
            )}
          </label>
        )}

        {/* Input Container */}
        <div className="relative">
          {/* Left Icon */}
          {leftIcon && (
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400">
              {leftIcon}
            </div>
          )}

          {/* Input */}
          <input
            ref={ref}
            id={inputId}
            type={type}
            disabled={disabled}
            className={cn(
              // Base styles
              'w-full px-4 py-3 bg-white border rounded-lg',
              'text-secondary-700 placeholder:text-neutral-400',
              'transition-all duration-200',
              
              // Focus styles
              'focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary-400',
              
              // Border styles
              error
                ? 'border-red-500 focus:ring-red-200 focus:border-red-500'
                : 'border-neutral-200 hover:border-neutral-300',
              
              // Disabled styles
              disabled && 'bg-neutral-100 cursor-not-allowed opacity-60',
              
              // Icon padding
              leftIcon && 'pl-12',
              rightIcon && 'pr-12',
              
              className
            )}
            aria-invalid={error ? 'true' : 'false'}
            aria-describedby={error ? `${inputId}-error` : hint ? `${inputId}-hint` : undefined}
            {...props}
          />

          {/* Right Icon */}
          {rightIcon && (
            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400">
              {rightIcon}
            </div>
          )}
        </div>

        {/* Error Message */}
        {error && (
          <p
            id={`${inputId}-error`}
            className="mt-2 text-sm text-red-500 flex items-center gap-1"
            role="alert"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
            {error}
          </p>
        )}

        {/* Hint */}
        {hint && !error && (
          <p
            id={`${inputId}-hint`}
            className="mt-2 text-sm text-neutral-500"
          >
            {hint}
          </p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'

export { Input, type InputProps }
