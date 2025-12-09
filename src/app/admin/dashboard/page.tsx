import Link from 'next/link'

export default function DashboardPage() {
  const stats = [
    { label: 'Proyectos', value: '17', href: '/admin/proyectos' },
    { label: 'Servicios', value: '5', href: '/admin/servicios' },
    { label: 'Posts', value: '6', href: '/admin/blog' },
    { label: 'Leads', value: '24', href: '/admin/leads' },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-black text-slate-800">¡Bienvenido, Vladimir!</h1>
        <p className="text-sm text-gray-500">Panel de Administración de Costa G</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <Link key={i} href={stat.href}>
            <div className="p-6 rounded-2xl bg-white border border-gray-200 hover:shadow-lg cursor-pointer">
              <p className="text-3xl font-black text-amber-500">{stat.value}</p>
              <p className="text-sm text-gray-500">{stat.label}</p>
            </div>
          </Link>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="p-6 rounded-2xl bg-white border border-gray-200">
          <h2 className="text-lg font-bold text-slate-800 mb-4">Leads Recientes</h2>
          <div className="space-y-3">
            {['Juan Pérez - Construcción', 'María García - Remodelación', 'Carlos López - Consultoría'].map((lead, i) => (
              <div key={i} className="p-3 rounded-xl bg-gray-50 flex justify-between items-center">
                <span className="text-slate-700">{lead}</span>
                <span className="px-2 py-1 bg-green-100 text-green-600 text-xs rounded-full">Nuevo</span>
              </div>
            ))}
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-gray-200">
          <h2 className="text-lg font-bold text-slate-800 mb-4">Acciones Rápidas</h2>
          <div className="grid grid-cols-2 gap-3">
            <Link href="/admin/proyectos" className="p-4 rounded-xl bg-gray-50 hover:bg-gray-100 text-center">
              <span className="font-semibold text-slate-800">+ Proyecto</span>
            </Link>
            <Link href="/admin/blog" className="p-4 rounded-xl bg-gray-50 hover:bg-gray-100 text-center">
              <span className="font-semibold text-slate-800">+ Post</span>
            </Link>
            <Link href="/admin/leads" className="p-4 rounded-xl bg-gray-50 hover:bg-gray-100 text-center">
              <span className="font-semibold text-slate-800">Ver Leads</span>
            </Link>
            <Link href="/admin/medios" className="p-4 rounded-xl bg-gray-50 hover:bg-gray-100 text-center">
              <span className="font-semibold text-slate-800">Subir Imagen</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
