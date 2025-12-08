'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import {
  FolderKanban,
  Wrench,
  FileText,
  Users,
  Eye,
  ArrowUpRight,
  ArrowDownRight,
  Calendar,
  Plus,
  ExternalLink,
  Building2,
  CheckCircle2,
  Clock,
} from 'lucide-react'

const stats = [
  { label: 'Proyectos', value: '17', change: '+2', trend: 'up', icon: FolderKanban, href: '/admin/proyectos' },
  { label: 'Servicios', value: '5', change: '0', trend: 'neutral', icon: Wrench, href: '/admin/servicios' },
  { label: 'Posts del Blog', value: '6', change: '+1', trend: 'up', icon: FileText, href: '/admin/blog' },
  { label: 'Leads', value: '24', change: '+5', trend: 'up', icon: Users, href: '/admin/leads' },
]

const recentLeads = [
  { id: 1, name: 'Juan Pérez', service: 'Construcción', status: 'new', date: 'Hace 2 horas' },
  { id: 2, name: 'María García', service: 'Remodelación', status: 'contacted', date: 'Hace 5 horas' },
  { id: 3, name: 'Carlos López', service: 'Consultoría', status: 'new', date: 'Ayer' },
  { id: 4, name: 'Ana Martínez', service: 'Diseño', status: 'qualified', date: 'Hace 2 días' },
]

const recentProjects = [
  { id: 1, title: 'Puente Vehicular El Naranjo', status: 'published', views: 245, category: 'Puentes' },
  { id: 2, title: 'Camino Crucero Vista Hermosa', status: 'published', views: 189, category: 'Caminos' },
  { id: 3, title: 'Rehabilitación Carretera Coahuayutla', status: 'draft', views: 0, category: 'Carreteras' },
]

const quickActions = [
  { label: 'Nuevo Proyecto', icon: FolderKanban, href: '/admin/proyectos/nuevo' },
  { label: 'Nuevo Post', icon: FileText, href: '/admin/blog/nuevo' },
  { label: 'Ver Leads', icon: Users, href: '/admin/leads' },
  { label: 'Subir Imagen', icon: Plus, href: '/admin/medios' },
]

function StatCard({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const Icon = stat.icon
  const colors = ['text-amber-600 bg-amber-50', 'text-sky-600 bg-sky-50', 'text-green-600 bg-green-50', 'text-purple-600 bg-purple-50']
  const colorClass = colors[index % colors.length]
  
  return (
    <Link href={stat.href}>
      <div className="p-6 rounded-2xl transition-all duration-300 hover:shadow-lg cursor-pointer group bg-white border border-gray-200">
        <div className="flex items-start justify-between mb-4">
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${colorClass}`}>
            <Icon className="w-6 h-6" />
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
          <p className="text-3xl font-black text-[#1A3A52]">{stat.value}</p>
          <p className="text-sm font-medium text-gray-500">{stat.label}</p>
        </div>
      </div>
    </Link>
  )
}

function LeadStatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    new: 'bg-green-100 text-green-600',
    contacted: 'bg-blue-100 text-blue-600',
    qualified: 'bg-purple-100 text-purple-600',
    converted: 'bg-amber-100 text-amber-600',
    lost: 'bg-red-100 text-red-600',
  }
  const labels: Record<string, string> = {
    new: 'Nuevo',
    contacted: 'Contactado',
    qualified: 'Calificado',
    converted: 'Convertido',
    lost: 'Perdido',
  }
  return (
    <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${styles[status] || styles.new}`}>
      {labels[status] || 'Nuevo'}
    </span>
  )
}

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
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-[#1A3A52]">¡Bienvenido, Vladimir!</h1>
          <p className="text-sm capitalize text-gray-500">
            <Calendar className="w-4 h-4 inline mr-2" />
            {currentTime}
          </p>
        </div>
        <div className="flex gap-3">
          <Link href="/admin/proyectos/nuevo">
            <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-white bg-gradient-to-r from-[#D4AF37] to-[#B8860B]">
              <Plus className="w-5 h-5" />
              Nuevo Proyecto
            </button>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <StatCard key={index} stat={stat} index={index} />
        ))}
      </div>

      <div className="p-6 rounded-2xl bg-white border border-gray-200">
        <h2 className="text-lg font-bold mb-4 text-[#1A3A52]">Acciones Rápidas</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {quickActions.map((action, index) => {
            const Icon = action.icon
            const colors = ['text-amber-600 bg-amber-50', 'text-green-600 bg-green-50', 'text-purple-600 bg-purple-50', 'text-sky-600 bg-sky-50']
            return (
              <Link key={index} href={action.href}>
                <div className="p-4 rounded-xl text-center hover:shadow-md transition-all duration-300 cursor-pointer bg-gray-50">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3 ${colors[index % colors.length]}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <p className="text-sm font-semibold text-[#1A3A52]">{action.label}</p>
                </div>
              </Link>
            )
          })}
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="p-6 rounded-2xl bg-white border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-[#1A3A52]">Leads Recientes</h2>
            <Link href="/admin/leads" className="text-sm font-medium flex items-center gap-1 text-amber-600">
              Ver todos
              <ExternalLink className="w-4 h-4" />
            </Link>
          </div>
          <div className="space-y-4">
            {recentLeads.map((lead) => (
              <div key={lead.id} className="flex items-center justify-between p-4 rounded-xl bg-gray-50">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm bg-[#1A3A52]">
                    {lead.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-[#1A3A52]">{lead.name}</p>
                    <p className="text-xs text-gray-500">{lead.service}</p>
                  </div>
                </div>
                <div className="text-right">
                  <LeadStatusBadge status={lead.status} />
                  <p className="text-xs mt-1 text-gray-400">{lead.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-[#1A3A52]">Proyectos Recientes</h2>
            <Link href="/admin/proyectos" className="text-sm font-medium flex items-center gap-1 text-amber-600">
              Ver todos
              <ExternalLink className="w-4 h-4" />
            </Link>
          </div>
          <div className="space-y-4">
            {recentProjects.map((project) => (
              <div key={project.id} className="flex items-center justify-between p-4 rounded-xl bg-gray-50">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-amber-50">
                    <Building2 className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#1A3A52]">{project.title}</p>
                    <p className="text-xs text-gray-500">{project.category}</p>
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
                  <p className="text-xs mt-1 text-gray-400">
                    <Eye className="w-3 h-3 inline mr-1" />
                    {project.views} vistas
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="p-6 rounded-2xl bg-gradient-to-r from-[#1A3A52] to-[#0f2439]">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h3 className="text-white font-bold text-lg mb-1">Costa G - Panel de Administración</h3>
            <p className="text-white/60 text-sm">Versión 1.0.0 | Desarrollado con Next.js 14</p>
          </div>
          <div className="flex gap-3">
            <Link href="/" className="px-4 py-2 rounded-lg text-sm font-medium bg-white/10 text-white hover:bg-white/20 transition-colors">
              Ver Sitio Web
            </Link>
            <Link href="/admin/configuracion" className="px-4 py-2 rounded-lg text-sm font-medium bg-white text-[#1A3A52] hover:bg-white/90 transition-colors">
              Configuración
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
