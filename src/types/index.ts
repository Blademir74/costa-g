// ========================================
// TIPOS GLOBALES - COSTA G
// ========================================

// ========================================
// NAVEGACIÓN
// ========================================

export interface NavItem {
  label: string
  href: string
  children?: NavChild[]
}

export interface NavChild {
  label: string
  href: string
  icon?: string
  description?: string
}

// ========================================
// PROYECTO
// ========================================

export interface Project {
  id: string
  title: string
  slug: string
  description: string
  shortDescription: string
  mainImage: string
  gallery: string[]
  location: {
    municipality: string
    state: string
    address?: string
  }
  year: number
  sector: string
  client: string
  clientType: 'gobierno' | 'privado'
  contractNumber?: string
  dependency?: string
  servicesProvided: string[]
  hasTour360: boolean
  tour360Url?: string
  featured: boolean
  status: 'completado' | 'en-proceso'
}

// ========================================
// PROPIEDAD INMOBILIARIA
// ========================================

export interface Property {
  id: string
  title: string
  slug: string
  description: string
  mainImage: string
  gallery: string[]
  price: number
  priceFormatted: string
  type: 'residencial' | 'comercial' | 'industrial' | 'mixto'
  status: 'disponible' | 'construccion' | 'preventa' | 'vendido'
  bedrooms?: number
  bathrooms?: number
  constructionArea: number
  landArea?: number
  parkingSpaces?: number
  location: {
    address: string
    colony: string
    municipality: string
    state: string
    coordinates: {
      lat: number
      lng: number
    }
  }
  amenities: string[]
  features: string[]
  hasTour360: boolean
  tour360Url?: string
  featured: boolean
}

// ========================================
// SERVICIO
// ========================================

export interface Service {
  id: string
  title: string
  slug: string
  icon: string
  shortDescription: string
  description: string
  features: string[]
  image: string
}

// ========================================
// BLOG
// ========================================

export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  featuredImage: string
  category: string
  tags: string[]
  author: {
    name: string
    avatar: string
    bio: string
  }
  publishedAt: Date
  updatedAt: Date
  readingTime: number
  views: number
  relatedPosts?: string[]
}

// ========================================
// LEAD / CONTACTO
// ========================================

export interface Lead {
  id: string
  email: string
  firstName: string
  lastName: string
  phone: string
  serviceInterest?: string
  message: string
  source: string
  utmSource?: string
  utmMedium?: string
  utmCampaign?: string
  status: 'nuevo' | 'contactado' | 'calificado' | 'convertido' | 'perdido'
  createdAt: Date
}

// ========================================
// TESTIMONIAL
// ========================================

export interface Testimonial {
  id: string
  name: string
  position: string
  company: string
  avatar?: string
  content: string
  rating: number
  projectId?: string
  featured: boolean
}

// ========================================
// TEAM MEMBER
// ========================================

export interface TeamMember {
  id: string
  name: string
  position: string
  photo: string
  bio: string
  linkedIn?: string
  email?: string
  order: number
}

// ========================================
// FAQ
// ========================================

export interface FAQ {
  id: string
  question: string
  answer: string
  category: string
  order: number
}

// ========================================
// TIMELINE
// ========================================

export interface TimelineItem {
  year: number
  title: string
  description: string
  icon?: string
}

// ========================================
// UTILITY TYPES
// ========================================

export type SortOrder = 'asc' | 'desc'

export interface PaginationParams {
  page: number
  limit: number
  total: number
  totalPages: number
}

export interface FilterParams {
  search?: string
  category?: string
  year?: number
  location?: string
  status?: string
  [key: string]: string | number | undefined
}

// ========================================
// API RESPONSE TYPES
// ========================================

export interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: PaginationParams
}
