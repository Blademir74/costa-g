'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import {
  FolderKanban,
  Wrench,
  FileText,
  Users,
  Eye,
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
  Calendar,
  Mail,
  Phone,
  Plus,
  ExternalLink,
  Building2,
  CheckCircle2,
  Clock,
  AlertCircle,
} from 'lucide-react'

// ========================================
// DATOS DE EJEMPLO (En producción vienen de la BD)
// ========================================

const stats = [
  {
    label: 'Proyectos',
    value: '17',
    change: '+2',
    trend: 'up',
    icon: FolderKanban,
    color: '#D4AF37',
    href: '/admin/proyectos',
  },
  {
    label: 'Servicios',
    value: '5',
    change: '0',
    trend: 'neutral',
    icon: Wrench,
    color: '#87CEEB',
    href: '/admin/servicios',
  },
  {
    label: 'Posts del Blog',
    value: '6',
    change: '+1',
    trend: 'up',
    icon: FileText,
    color: '#22c55e',
    href: '/admin/blog',
  },
  {
    label: 'Leads',
    value: '24',
    change: '+5',
    trend: 'up',
    icon: Users,
    color: '#8b5cf6',
    href: '/admin/leads',
  },
]

const recentLeads = [
  { id: 1, name: 'Juan Pérez', email: 'juan@email.com', phone: '747 123 4567', service: 'Construcción', status: 'new', date: 'Hace 2 horas' },
  { id: 2, name: 'María García', email: 'maria@email.com', phone: '747 234 5678', service: 'Remodelación', status: 'contacted', date: 'Hace 5 horas' },
  { id: 3, name: 'Carlos López', email: 'carlos@email.com', phone: '747 345 6789', service: 'Consultoría', status: 'new', date: 'Ayer' },
  { id: 4, name: 'Ana Martínez', email: 'ana@email.com', phone: '747 456 7890', service: 'Diseño', status: 'qualified', date: 'Hace 2 días' },
]

const recentProjects = [
  { id: 1, title: 'Puente Vehicular El Naranjo', status: 'published', views: 245, category: 'Puentes' },
  { id: 2, title: 'Camino Crucero Vista Hermosa', status: 'published', views: 189, category: 'Caminos' },
  { id: 3, title: 'Rehabilitación Carretera Coahuayutla', status: 'draft', views: 0, category: 'Carreteras' },
]

const quickActions = [
  { label: 'Nuevo Proyecto', icon: FolderKanban, href: '/admin/proyectos/nuevo', color: '#D4AF37' },
  { label: 'Nuevo Post', icon: FileText, href: '/admin/blog/nuevo', color: '#22c55e' },
  { label: 'Ver Leads', icon: Users, href: '/admin/leads', color: '#8b5cf6' },
  { label: 'Subir Imagen', icon: Plus, href: '/admin/medios', color: '#87CEEB' },
]

// ========================================
// COMPONENTES AUXILIARES
// ========================================

function StatCard({ stat }: { stat: typeof stats[0] }) {
  const Icon = stat.icon
  
  return (
    <Link href={stat.href}>
      <div 
        className="p-6 rounded-2xl transition-all duration-300 hover:shadow-lg cursor-pointer group"
        style={{ 
          background: 'white',
          border: '1px solid #e2e8f0',
        }}
      >
        <div className="flex items-start justify-between mb-4">
          <div 
            className="w-12 h-12 rounded-xl flex items-center justify-center"
            style={{ background: `${stat.color}20` }}
          >
            <span style={{ color: stat.color }}>
              <Icon className="w-6 h-6" />
            </span>
          </div>
          <div className="flex items-center gap-1 text-sm">
            {stat.trend === 'up' ? (
              <>
                <ArrowUpRight className="w-4 h-4 text-green-500" />
                <span className="text-green-500 font-medium">{stat.change}</span>
              </>
            ) : stat.trend === 'down' ? (
              <>
                <ArrowDownRight className="w-4 h-4 text-red-500" />
                <span className="text-red-500 font-medium">{stat.change}</span>
              </>
            ) : (
              <span className="text-gray-400 font-medium">{stat.change}</span>
            )}
          </div>
        </div>
        <div>
          <p className="text-3xl font-black" style={{ color: '#1A3A52' }}>{stat.value}</p>
          <p className="text-sm font-medium" style={{ color: '#64748b' }}>{stat.label}</p>
        </div>
        <div 
          className="mt-4 flex items-center gap-2 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity"
          style={{ color: stat.color }}
        >
          Ver detalles
          <ExternalLink className="w-4 h-4" />
        </div>
      </div>
    </Link>
  )
}

function LeadStatusBadge({ status }: { status: string }) {
  const styles: Record<string, { bg: string; text: string; label: string }> = {
    new: { bg: 'rgba(34,197,94,0.1)', text: '#22c55e', label: 'Nuevo' },
    contacted: { bg: 'rgba(59,130,246,0.1)', text: '#3b82f6', label: 'Contactado' },
    qualified: { bg: 'rgba(139,92,246,0.1)', text: '#8b5cf6', label: 'Calificado' },
    converted: { bg: 'rgba(212,175,55,0.1)', text: '#D4AF37', label: 'Convertido' },
    lost: { bg: 'rgba(239,68,68,0.1)', text: '#ef4444', label: 'Perdido' },
  }

  const style = styles[status] || styles.new

  return (
    <span 
      className="px-2.5 py-1 rounded-full text-xs font-semibold"
      style={{ background: style.bg, color: style.text }}
    >
      {style.label}
    </span>
  )
}

// ========================================
// PÁGINA PRINCIPAL DEL DASHBOARD
// ========================================

export default function DashboardPage() {
  const [currentTime, setCurrentTime] = useState('')

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setCurrentTime(now.toLocaleString('es-MX', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }))
    }
    updateTime()
    const interval = setInterval(updateTime, 60000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black" style={{ color: '#1A3A52' }}>
            ¡Bienvenido, Vladimir!
          </h1>
          <p className="text-sm capitalize" style={{ color: '#64748b' }}>
            <Calendar className="w-4 h-4 inline mr-2" />
            {currentTime}
          </p>
        </div>
        <div className="flex gap-3">
          <Link href="/admin/proyectos/nuevo">
            <button 
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-white transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, #D4AF37 0%, #B8860B 100%)',
              }}
            >
              <Plus className="w-5 h-5" />
              Nuevo Proyecto
            </button>
          </Link>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <StatCard key={index} stat={stat} />
        ))}
      </div>

      {/* Acciones Rápidas */}
      <div 
        className="p-6 rounded-2xl"
        style={{ background: 'white', border: '1px solid #e2e8f0' }}
      >
        <h2 className="text-lg font-bold mb-4" style={{ color: '#1A3A52' }}>
          Acciones Rápidas
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {quickActions.map((action, index) => {
            const Icon = action.icon
            return (
              <Link key={index} href={action.href}>
                <div 
                  className="p-4 rounded-xl text-center hover:shadow-md transition-all duration-300 cursor-pointer"
                  style={{ background: '#f8fafc' }}
                >
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3"
                    style={{ background: `${action.color}20` }}
                  >
                    <span style={{ color: action.color }}>
                      <Icon className="w-6 h-6" />
                    </span>
                  </div>
                  <p className="text-sm font-semibold" style={{ color: '#1A3A52' }}>
                    {action.label}
                  </p>
                </div>
              </Link>
            )
          })}
        </div>
      </div>

      {/* Grid de 2 columnas */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Leads Recientes */}
        <div 
          className="p-6 rounded-2xl"
          style={{ background: 'white', border: '1px solid #e2e8f0' }}
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold" style={{ color: '#1A3A52' }}>
              Leads Recientes
            </h2>
            <Link 
              href="/admin/leads"
              className="text-sm font-medium flex items-center gap-1"
              style={{ color: '#D4AF37' }}
            >
              Ver todos
              <ExternalLink className="w-4 h-4" />
            </Link>
          </div>
          <div className="space-y-4">
            {recentLeads.map((lead) => (
              <div 
                key={lead.id}
                className="flex items-center justify-between p-4 rounded-xl"
                style={{ background: '#f8fafc' }}
              >
                <div className="flex items-center gap-4">
                  <div 
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm"
                    style={{ background: '#1A3A52' }}
                  >
                    {lead.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold" style={{ color: '#1A3A52' }}>{lead.name}</p>
                    <p className="text-xs" style={{ color: '#64748b' }}>{lead.service}</p>
                  </div>
                </div>
                <div className="text-right">
                  <LeadStatusBadge status={lead.status} />
                  <p className="text-xs mt-1" style={{ color: '#94a3b8' }}>{lead.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Proyectos Recientes */}
        <div 
          className="p-6 rounded-2xl"
          style={{ background: 'white', border: '1px solid #e2e8f0' }}
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold" style={{ color: '#1A3A52' }}>
              Proyectos Recientes
            </h2>
            <Link 
              href="/admin/proyectos"
              className="text-sm font-medium flex items-center gap-1"
              style={{ color: '#D4AF37' }}
            >
              Ver todos
              <ExternalLink className="w-4 h-4" />
            </Link>
          </div>
          <div className="space-y-4">
            {recentProjects.map((project) => (
              <div 
                key={project.id}
                className="flex items-center justify-between p-4 rounded-xl"
                style={{ background: '#f8fafc' }}
              >
                <div className="flex items-center gap-4">
                  <div 
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: 'rgba(212,175,55,0.1)' }}
                  >
                    <Building2 className="w-5 h-5" style={{ color: '#D4AF37' }} />
                  </div>
                  <div>
                    <p className="font-semibold" style={{ color: '#1A3A52' }}>{project.title}</p>
                    <p className="text-xs" style={{ color: '#64748b' }}>{project.category}</p>
                  </div>
                </div>
                <div className="text-right">
                  {project.status === 'published' ? (
                    <span className="flex items-center gap-1 text-xs font-medium text-green-500">
                      <CheckCircle2 className="w-4 h-4" />
                      Publicado
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 text-xs font-medium text-amber-500">
                      <Clock className="w-4 h-4" />
                      Borrador
                    </span>
                  )}
                  <p className="text-xs mt-1" style={{ color: '#94a3b8' }}>
                    <Eye className="w-3 h-3 inline mr-1" />
                    {project.views} vistas
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Información del Sistema */}
      <div 
        className="p-6 rounded-2xl"
        style={{ 
          background: 'linear-gradient(135deg, #1A3A52 0%, #0f2439 100%)',
        }}
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h3 className="text-white font-bold text-lg mb-1">Costa G - Panel de Administración</h3>
            <p className="text-white/60 text-sm">
              Versión 1.0.0 | Desarrollado con Next.js 14
            </p>
          </div>
          <div className="flex gap-3">
            <Link 
              href="/"
              className="px-4 py-2 rounded-lg text-sm font-medium bg-white/10 text-white hover:bg-white/20 transition-colors"
            >
              Ver Sitio Web
            </Link>
            <Link 
              href="/admin/configuracion"
              className="px-4 py-2 rounded-lg text-sm font-medium bg-white text-[#1A3A52] hover:bg-white/90 transition-colors"
            >
              Configuración
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
