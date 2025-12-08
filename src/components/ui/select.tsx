'use client'

import { forwardRef } from 'react'
import { cn } from '@/lib/utils'
import { ChevronDown } from 'lucide-react'

// ========================================
// TIPOS
// ========================================

interface SelectOption {
  value: string
  label: string
  disabled?: boolean
}

interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'children'> {
  label?: string
  error?: string
  hint?: string
  options: SelectOption[]
  placeholder?: string
}

// ========================================
// COMPONENTE
// ========================================

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      className,
      label,
      error,
      hint,
      options,
      placeholder = 'Selecciona una opción',
      disabled,
      id,
      ...props
    },
    ref
  ) => {
    const selectId = id || `select-${Math.random().toString(36).substr(2, 9)}`

    return (
      <div className="w-full">
        {/* Label */}
        {label && (
          <label
            htmlFor={selectId}
            className="block text-sm font-medium text-secondary-700 mb-2"
          >
            {label}
            {props.required && (
              <span className="text-red-500 ml-1">*</span>
            )}
          </label>
        )}

        {/* Select Container */}
        <div className="relative">
          <select
            ref={ref}
            id={selectId}
            disabled={disabled}
            className={cn(
              // Base styles
              'w-full px-4 py-3 bg-white border rounded-lg appearance-none',
              'text-secondary-700 cursor-pointer',
              'transition-all duration-200',
              'pr-12',
              
              // Focus styles
              'focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary-400',
              
              // Border styles
              error
                ? 'border-red-500 focus:ring-red-200 focus:border-red-500'
                : 'border-neutral-200 hover:border-neutral-300',
              
              // Disabled styles
              disabled && 'bg-neutral-100 cursor-not-allowed opacity-60',
              
              className
            )}
            aria-invalid={error ? 'true' : 'false'}
            aria-describedby={error ? `${selectId}-error` : hint ? `${selectId}-hint` : undefined}
            {...props}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((option) => (
              <option
                key={option.value}
                value={option.value}
                disabled={option.disabled}
              >
                {option.label}
              </option>
            ))}
          </select>

          {/* Chevron Icon */}
          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-400">
            <ChevronDown className="w-5 h-5" />
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <p
            id={`${selectId}-error`}
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
            id={`${selectId}-hint`}
            className="mt-2 text-sm text-neutral-500"
          >
            {hint}
          </p>
        )}
      </div>
    )
  }
)

Select.displayName = 'Select'

export { Select, type SelectProps, type SelectOption }
