'use client'

import { useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { Button, Input } from '@/components/ui'
import { Search, ChevronDown, Play } from 'lucide-react'

// ========================================
// TIPOS
// ========================================

interface HeroProps {
  title: string
  subtitle?: string
  description?: string
  backgroundImage?: string
  backgroundVideo?: string
  showSearch?: boolean
  searchPlaceholder?: string
  primaryCTA?: {
    label: string
    href: string
  }
  secondaryCTA?: {
    label: string
    href: string
  }
  overlay?: 'dark' | 'gradient' | 'light'
  height?: 'full' | 'large' | 'medium'
  alignment?: 'left' | 'center'
  showScrollIndicator?: boolean
  className?: string
}

// ========================================
// COMPONENTE
// ========================================

function Hero({
  title,
  subtitle,
  description,
  backgroundImage,
  backgroundVideo,
  showSearch = false,
  searchPlaceholder = 'Buscar proyecto, ubicación...',
  primaryCTA,
  secondaryCTA,
  overlay = 'gradient',
  height = 'full',
  alignment = 'center',
  showScrollIndicator = true,
  className,
}: HeroProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [isVideoPlaying, setIsVideoPlaying] = useState(true)

  const heightStyles = {
    full: 'min-h-screen',
    large: 'min-h-[80vh]',
    medium: 'min-h-[60vh]',
  }

  const overlayStyles = {
    dark: 'bg-secondary-900/70',
    gradient:
      'bg-gradient-to-b from-secondary-900/80 via-secondary-900/50 to-secondary-900/80',
    light: 'bg-white/30 backdrop-blur-sm',
  }

  const alignmentStyles = {
    left: 'text-left items-start',
    center: 'text-center items-center',
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      window.location.href = `/buscar?q=${encodeURIComponent(searchQuery)}`
    }
  }

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    })
  }

  return (
    <section
      className={cn(
        'relative flex items-center justify-center overflow-hidden',
        heightStyles[height],
        className
      )}
    >
      {/* Background Video */}
      {backgroundVideo && (
        <video
          autoPlay
          muted
          loop
          playsInline
          className={cn(
            'absolute inset-0 w-full h-full object-cover',
            !isVideoPlaying && 'hidden'
          )}
          onCanPlay={() => setIsVideoPlaying(true)}
          onError={() => setIsVideoPlaying(false)}
        >
          <source src={backgroundVideo} type="video/mp4" />
        </video>
      )}

      {/* Background Image */}
      {backgroundImage && (!backgroundVideo || !isVideoPlaying) && (
        <Image
          src={backgroundImage}
          alt=""
          fill
          className="object-cover"
          priority
          quality={90}
        />
      )}

      {/* Fallback Gradient Background */}
      {!backgroundImage && !backgroundVideo && (
        <div className="absolute inset-0 bg-gradient-to-br from-primary-300 via-primary-400 to-secondary-600" />
      )}

      {/* Overlay */}
      <div className={cn('absolute inset-0', overlayStyles[overlay])} />

      {/* Content Container */}
      <div className="relative z-10 container-custom py-20">
        <div
          className={cn(
            'flex flex-col max-w-4xl mx-auto',
            alignmentStyles[alignment]
          )}
        >
          {/* Subtitle */}
          {subtitle && (
            <span
              className={cn(
                'inline-flex items-center gap-2 px-4 py-2 mb-6',
                'bg-accent-400/20 backdrop-blur-sm rounded-full',
                'text-accent-300 text-sm font-medium',
                'animate-fade-in'
              )}
            >
              {subtitle}
            </span>
          )}

          {/* Title */}
          <h1
            className={cn(
              'text-4xl md:text-5xl lg:text-6xl font-bold',
              overlay === 'light' ? 'text-secondary-700' : 'text-white',
              'leading-tight mb-6',
              'animate-fade-in-up'
            )}
          >
            {title}
          </h1>

          {/* Description */}
          {description && (
            <p
              className={cn(
                'text-lg md:text-xl max-w-2xl',
                overlay === 'light'
                  ? 'text-neutral-600'
                  : 'text-primary-100',
                'mb-8',
                'animate-fade-in-up animate-in-delay-1'
              )}
            >
              {description}
            </p>
          )}

          {/* Search Bar */}
          {showSearch && (
            <form
              onSubmit={handleSearch}
              className={cn(
                'w-full max-w-xl mb-8',
                'animate-fade-in-up animate-in-delay-2'
              )}
            >
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={searchPlaceholder}
                  className={cn(
                    'w-full pl-12 pr-4 py-4',
                    'bg-white/95 backdrop-blur-sm',
                    'border-0 rounded-xl',
                    'text-secondary-700 placeholder:text-neutral-400',
                    'shadow-lg',
                    'focus:outline-none focus:ring-2 focus:ring-accent-400',
                    'transition-all duration-200'
                  )}
                />
                <button
                  type="submit"
                  className={cn(
                    'absolute right-2 top-1/2 -translate-y-1/2',
                    'px-6 py-2 rounded-lg',
                    'bg-secondary-700 text-white font-medium',
                    'hover:bg-secondary-800',
                    'transition-colors duration-200'
                  )}
                >
                  Buscar
                </button>
              </div>
            </form>
          )}

          {/* CTAs */}
          {(primaryCTA || secondaryCTA) && (
            <div
              className={cn(
                'flex flex-col sm:flex-row gap-4',
                alignment === 'center' && 'justify-center',
                'animate-fade-in-up animate-in-delay-3'
              )}
            >
              {primaryCTA && (
                <Button
                  variant="accent"
                  size="lg"
                  onClick={() => (window.location.href = primaryCTA.href)}
                >
                  {primaryCTA.label}
                </Button>
              )}
              {secondaryCTA && (
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-secondary-700"
                  onClick={() => (window.location.href = secondaryCTA.href)}
                >
                  {secondaryCTA.label}
                </Button>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Scroll Indicator */}
      {showScrollIndicator && (
        <button
          onClick={scrollToContent}
          className={cn(
            'absolute bottom-8 left-1/2 -translate-x-1/2',
            'flex flex-col items-center gap-2',
            'text-white/70 hover:text-white',
            'transition-colors duration-200',
            'animate-bounce-slow'
          )}
          aria-label="Desplazar hacia abajo"
        >
          <span className="text-sm">Descubre más</span>
          <ChevronDown className="w-6 h-6" />
        </button>
      )}
    </section>
  )
}

// ========================================
// HERO PAGE (Para páginas internas)
// ========================================

interface HeroPageProps {
  title: string
  description?: string
  backgroundImage?: string
  breadcrumbItems?: { label: string; href?: string }[]
  className?: string
}

function HeroPage({
  title,
  description,
  backgroundImage,
  breadcrumbItems,
  className,
}: HeroPageProps) {
  return (
    <section
      className={cn(
        'relative py-24 md:py-32 bg-secondary-700 overflow-hidden',
        className
      )}
    >
      {/* Background */}
      {backgroundImage && (
        <>
          <Image
            src={backgroundImage}
            alt=""
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-secondary-700/80" />
        </>
      )}

      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom">
        {/* Breadcrumb - se añadirá como componente separado */}

        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {title}
          </h1>
          {description && (
            <p className="text-lg text-primary-100">{description}</p>
          )}
        </div>
      </div>
    </section>
  )
}

export { Hero, HeroPage, type HeroProps, type HeroPageProps }
