'use client'

import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

// ========================================
// TIPOS
// ========================================

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
  hint?: string
}

// ========================================
// COMPONENTE
// ========================================

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      className,
      label,
      error,
      hint,
      disabled,
      id,
      rows = 4,
      ...props
    },
    ref
  ) => {
    const textareaId = id || `textarea-${Math.random().toString(36).substr(2, 9)}`

    return (
      <div className="w-full">
        {/* Label */}
        {label && (
          <label
            htmlFor={textareaId}
            className="block text-sm font-medium text-secondary-700 mb-2"
          >
            {label}
            {props.required && (
              <span className="text-red-500 ml-1">*</span>
            )}
          </label>
        )}

        {/* Textarea */}
        <textarea
          ref={ref}
          id={textareaId}
          rows={rows}
          disabled={disabled}
          className={cn(
            // Base styles
            'w-full px-4 py-3 bg-white border rounded-lg resize-y',
            'text-secondary-700 placeholder:text-neutral-400',
            'transition-all duration-200',
            'min-h-[120px]',
            
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
          aria-describedby={error ? `${textareaId}-error` : hint ? `${textareaId}-hint` : undefined}
          {...props}
        />

        {/* Error Message */}
        {error && (
          <p
            id={`${textareaId}-error`}
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
            id={`${textareaId}-hint`}
            className="mt-2 text-sm text-neutral-500"
          >
            {hint}
          </p>
        )}
      </div>
    )
  }
)

Textarea.displayName = 'Textarea'

export { Textarea, type TextareaProps }
