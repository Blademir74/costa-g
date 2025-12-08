'use client'

import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'
import { STATS } from '@/lib/constants'

// ========================================
// TIPOS
// ========================================

interface StatItemProps {
  value: string
  label: string
  suffix?: string
}

// ========================================
// COMPONENTE STAT ITEM
// ========================================

function StatItem({ value, label, suffix = '' }: StatItemProps) {
  const [displayValue, setDisplayValue] = useState('0')
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true)
            animateValue()
          }
        })
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [hasAnimated])

  const animateValue = () => {
    // Extraer número del valor (ej: "243+" -> 243)
    const numericValue = parseInt(value.replace(/\D/g, ''))
    const hasPlus = value.includes('+')
    const hasPercent = value.includes('%')
    const duration = 2000
    const startTime = Date.now()

    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Easing function (ease-out)
      const easeOut = 1 - Math.pow(1 - progress, 3)
      const currentValue = Math.floor(easeOut * numericValue)

      let formattedValue = currentValue.toString()
      if (hasPlus && progress === 1) formattedValue += '+'
      if (hasPercent && progress === 1) formattedValue += '%'

      setDisplayValue(formattedValue)

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }

  return (
    <div ref={ref} className="text-center">
      <div
        className={cn(
          'text-4xl md:text-5xl lg:text-6xl font-bold',
          'text-accent-400 mb-2',
          'font-montserrat'
        )}
      >
        {displayValue}
        {suffix}
      </div>
      <p className="text-primary-100 text-sm md:text-base">{label}</p>
    </div>
  )
}

// ========================================
// COMPONENTE STATS COUNTER
// ========================================

interface StatsCounterProps {
  className?: string
  variant?: 'dark' | 'light'
}

function StatsCounter({ className, variant = 'dark' }: StatsCounterProps) {
  return (
    <section
      className={cn(
        'py-16 md:py-20',
        variant === 'dark'
          ? 'bg-secondary-700'
          : 'bg-primary-100',
        className
      )}
    >
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {STATS.map((stat, index) => (
            <StatItem
              key={index}
              value={stat.value}
              label={stat.label}
              suffix={stat.suffix}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export { StatsCounter, type StatsCounterProps }
