import React from 'react';

export interface NavItem {
  label: string;
  path: string;
}

// Based on Prisma Model: Development
export interface Property {
  id: string;
  title: string; // Mapped from 'name'
  location: string;
  minPrice: number;
  maxPrice: number;
  amenities: string[];
  availability: boolean;
  images: string[];
  type: 'sale' | 'rent'; // Derived or added to schema if needed
  specs: {
    beds?: number;
    baths?: number;
    area: number; // m2
  };
}

// Based on Prisma Model: Project
export interface Project {
  id: string;
  name: string;
  description: string;
  location: string;
  year: number;
  sector: 'Infraestructura' | 'Residencial' | 'Comercial';
  status: 'En Proceso' | 'Entregado';
  images: string[];
}

// Based on Prisma Model: Service
export interface ServiceType {
  id: string;
  title: string; // Mapped from 'name'
  description: string;
  process?: string[];
  clients?: string[];
  icon: string | React.ReactNode;
}

// Based on Prisma Model: BlogPost
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  category: string;
  author: string;
  date: string; // Mapped from publishDate
  imageUrl?: string;
}

// Based on MongoDB Model: Testimonial
export interface Testimonial {
  id: string;
  clientName: string;
  company?: string;
  comment: string;
  rating: number;
  photoUrl?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  imageUrl: string;
}

export type SearchTab = 'buy' | 'rent' | 'build';