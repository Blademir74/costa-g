'use client'

import Link from 'next/link'

const stats = [
  { label: 'Proyectos', value: '17', change: '+2', href: '/admin/proyectos', color: 'bg-amber-100 text-amber-700' },
  { label: 'Servicios', value: '5', change: '0', href: '/admin/servicios', color: 'bg-sky-100 text-sky-700' },
  { label: 'Posts', value: '6', change: '+1', href: '/admin/blog', color: 'bg-green-100 text-green-700' },
  { label: 'Leads', value: '24', change: '+5', href: '/admin/leads', color: 'bg-purple-100 text-purple-700' },
]

const recentLeads = [
  { name: 'Juan Pérez', service: 'Construcción', status: 'Nuevo', date: 'Hace 2 horas' },
  { name: 'María García', service: 'Remodelación', status: 'Contactado', date: 'Hace 5 horas' },
  { name: 'Carlos López', service: 'Consultoría', status: 'Nuevo', date: 'Ayer' },
]

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-black text-slate-800">¡Bienvenido, Vladimir!</h1>
        <p className="text-sm text-gray-500">Panel de Administración de Costa G</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <Link key={index} href={stat.href}>
            <div className="p-6 rounded-2xl bg-white border border-gray-200 hover:shadow-lg transition-shadow cursor-pointer">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${stat.color}`}>
                <span className="font-bold">{stat.value}</span>
              </div>
              <p className="text-3xl font-black text-slate-800">{stat.value}</p>
              <p className="text-sm text-gray-500">{stat.label}</p>
              <p className="text-xs text-green-500 mt-1">{stat.change} este mes</p>
            </div>
          </Link>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="p-6 rounded-2xl bg-white border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-slate-800">Leads Recientes</h2>
            <Link href="/admin/leads" className="text-sm text-amber-600 font-medium">Ver todos</Link>
          </div>
          <div className="space-y-4">
            {recentLeads.map((lead, index) => (
              <div key={index} className="flex items-center justify-between p-4 rounded-xl bg-gray-50">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-white font-bold">
                    {lead.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800">{lead.name}</p>
                    <p className="text-xs text-gray-500">{lead.service}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-600">{lead.status}</span>
                  <p className="text-xs text-gray-400 mt-1">{lead.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-gray-200">
          <h2 className="text-lg font-bold text-slate-800 mb-6">Acciones Rápidas</h2>
          <div className="grid grid-cols-2 gap-4">
            <Link href="/admin/proyectos">
              <div className="p-4 rounded-xl bg-gray-50 hover:bg-gray-100 text-center cursor-pointer">
                <p className="font-semibold text-slate-800">Nuevo Proyecto</p>
              </div>
            </Link>
            <Link href="/admin/blog">
              <div className="p-4 rounded-xl bg-gray-50 hover:bg-gray-100 text-center cursor-pointer">
                <p className="font-semibold text-slate-800">Nuevo Post</p>
              </div>
            </Link>
            <Link href="/admin/leads">
              <div className="p-4 rounded-xl bg-gray-50 hover:bg-gray-100 text-center cursor-pointer">
                <p className="font-semibold text-slate-800">Ver Leads</p>
              </div>
            </Link>
            <Link href="/admin/medios">
              <div className="p-4 rounded-xl bg-gray-50 hover:bg-gray-100 text-center cursor-pointer">
                <p className="font-semibold text-slate-800">Subir Imagen</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
