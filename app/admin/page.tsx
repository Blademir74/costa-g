import React from 'react';
import { Users, Building, TrendingUp, DollarSign } from 'lucide-react';

export default function AdminDashboard() {
  const stats = [
    { title: 'Leads Totales', value: '128', icon: <Users size={24} />, color: 'bg-blue-500' },
    { title: 'Proyectos Activos', value: '12', icon: <Building size={24} />, color: 'bg-green-500' },
    { title: 'Visitas Mensuales', value: '4.5k', icon: <TrendingUp size={24} />, color: 'bg-purple-500' },
    { title: 'Ventas (Q1)', value: '$12M', icon: <DollarSign size={24} />, color: 'bg-costa-gold' },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold text-costa-navy mb-8">Dashboard General</h1>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white p-6 rounded-xl shadow-soft border border-gray-100 flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 font-medium">{stat.title}</p>
              <p className="text-2xl font-bold text-costa-navy mt-1">{stat.value}</p>
            </div>
            <div className={`p-3 rounded-lg text-white ${stat.color} shadow-lg`}>
              {stat.icon}
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity Section (Placeholder) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-xl shadow-soft border border-gray-100">
          <h2 className="font-bold text-costa-navy mb-4">Últimos Leads (HubSpot Sync)</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((lead) => (
              <div key={lead} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-bold text-sm text-costa-navy">Arq. Juan Pérez</p>
                  <p className="text-xs text-gray-500">juan@email.com</p>
                </div>
                <span className="text-xs font-bold bg-green-100 text-green-700 px-2 py-1 rounded">Nuevo</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-soft border border-gray-100">
           <h2 className="font-bold text-costa-navy mb-4">Estado del Sistema</h2>
           <div className="flex items-center gap-3 mb-2 text-sm text-gray-600">
              <div className="w-2 h-2 rounded-full bg-green-500"></div> Database: Conectado
           </div>
           <div className="flex items-center gap-3 mb-2 text-sm text-gray-600">
              <div className="w-2 h-2 rounded-full bg-green-500"></div> HubSpot CRM: Sincronizado
           </div>
           <div className="flex items-center gap-3 text-sm text-gray-600">
              <div className="w-2 h-2 rounded-full bg-green-500"></div> NextAuth: Activo
           </div>
        </div>
      </div>
    </div>
  );
}