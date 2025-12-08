'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Badge } from '@/components/ui'
import { MapPin, Calendar, Eye, Play } from 'lucide-react'

// ========================================
// TIPOS
// ========================================

interface ProjectCardProps {
  id: string
  title: string
  slug: string
  image: string
  location: string
  municipality: string
  year: number
  sector: string
  client?: string
  hasTour360?: boolean
  hasVideo?: boolean
  className?: string
  onClick?: () => void
}

// ========================================
// SECTOR COLORS
// ========================================

const sectorColors: Record<string, string> = {
  puentes: 'primary',
  escuelas: 'accent',
  caminos: 'success',
  pavimentacion: 'warning',
  canchas: 'primary',
  muros: 'default',
}

// ========================================
// COMPONENTE
// ========================================

function ProjectCard({
  id,
  title,
  slug,
  image,
  location,
  municipality,
  year,
  sector,
  client,
  hasTour360 = false,
  hasVideo = false,
  className,
  onClick,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [imageError, setImageError] = useState(false)

  const sectorColor = sectorColors[sector.toLowerCase()] || 'default'

  const CardWrapper = onClick ? 'div' : Link
  const cardProps = onClick
    ? { onClick, role: 'button', tabIndex: 0 }
    : { href: `/proyectos/${slug}` }

  return (
    <CardWrapper
      {...(cardProps as React.HTMLAttributes<HTMLDivElement>)}
      className={cn(
        'group relative block overflow-hidden rounded-xl',
        'bg-white shadow-soft',
        'hover:shadow-medium',
        'transition-all duration-300',
        'cursor-pointer',
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        {/* Image */}
        {!imageError ? (
          <Image
            src={image}
            alt={title}
            fill
            className={cn(
              'object-cover',
              'transition-transform duration-500',
              'group-hover:scale-110'
            )}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary-200 to-primary-300 flex items-center justify-center">
            <span className="text-secondary-700 font-medium">{title}</span>
          </div>
        )}

        {/* Overlay */}
        <div
          className={cn(
            'absolute inset-0',
            'bg-gradient-to-t from-secondary-900/80 via-secondary-900/20 to-transparent',
            'transition-opacity duration-300',
            isHovered ? 'opacity-100' : 'opacity-70'
          )}
        />

        {/* Sector Badge */}
        <div className="absolute top-4 left-4">
          <Badge
            variant={sectorColor as 'primary' | 'accent' | 'success' | 'warning' | 'default'}
            size="sm"
          >
            {sector}
          </Badge>
        </div>

        {/* Media Icons */}
        {(hasTour360 || hasVideo) && (
          <div className="absolute top-4 right-4 flex gap-2">
            {hasTour360 && (
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white/90 text-secondary-700">
                <Eye className="w-4 h-4" />
              </div>
            )}
            {hasVideo && (
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white/90 text-secondary-700">
                <Play className="w-4 h-4" />
              </div>
            )}
          </div>
        )}

        {/* Hover Content */}
        <div
          className={cn(
            'absolute inset-x-0 bottom-0 p-5',
            'transform transition-all duration-300',
            isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          )}
        >
          {/* View Button */}
          <div className="flex items-center justify-center gap-2 px-4 py-2 bg-accent-400 rounded-lg text-secondary-900 font-medium">
            <Eye className="w-4 h-4" />
            <span>Ver Proyecto</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Title */}
        <h3 className="font-semibold text-secondary-700 mb-2 line-clamp-2 group-hover:text-secondary-800 transition-colors">
          {title}
        </h3>

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-neutral-500">
          <div className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-primary-500" />
            <span>{municipality}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4 text-primary-500" />
            <span>{year}</span>
          </div>
        </div>

        {/* Client */}
        {client && (
          <p className="mt-2 text-xs text-neutral-400 truncate">
            Cliente: {client}
          </p>
        )}
      </div>
    </CardWrapper>
  )
}

export { ProjectCard, type ProjectCardProps }
