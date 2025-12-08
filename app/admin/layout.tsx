'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { signOut } from 'next-auth/react';
import { 
  LayoutDashboard, 
  Briefcase, 
  Building2, 
  Users, 
  FileText, 
  LogOut, 
  Hexagon, 
  Menu,
  X 
} from 'lucide-react';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isSidebarOpen, setSidebarOpen] = React.useState(false);

  const menuItems = [
    { label: 'Dashboard', path: '/admin', icon: <LayoutDashboard size={20} /> },
    { label: 'Proyectos', path: '/admin/proyectos', icon: <Briefcase size={20} /> },
    { label: 'Desarrollos', path: '/admin/desarrollos', icon: <Building2 size={20} /> },
    { label: 'Leads (CRM)', path: '/admin/leads', icon: <Users size={20} /> },
    { label: 'Blog', path: '/admin/blog', icon: <FileText size={20} /> },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-20 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed lg:static inset-y-0 left-0 z-30 w-64 bg-costa-navy text-white transform transition-transform duration-300 ease-in-out flex flex-col
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        {/* Logo */}
        <div className="h-20 flex items-center gap-3 px-6 border-b border-white/10">
          <Hexagon className="text-costa-lime" size={28} />
          <div>
            <h1 className="font-display font-bold tracking-widest">COSTA G</h1>
            <span className="text-[10px] uppercase text-costa-sky tracking-wider">Admin Panel</span>
          </div>
          <button className="ml-auto lg:hidden" onClick={() => setSidebarOpen(false)}>
            <X size={20} />
          </button>
        </div>

        {/* Nav */}
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {menuItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link 
                key={item.path} 
                href={item.path}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors
                  ${isActive 
                    ? 'bg-costa-sky text-costa-navy shadow-lg font-bold' 
                    : 'text-gray-300 hover:bg-white/10 hover:text-white'
                  }`}
              >
                {item.icon}
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* User / Logout */}
        <div className="p-4 border-t border-white/10">
          <button 
            onClick={() => signOut({ callbackUrl: '/login' })}
            className="flex items-center gap-3 px-4 py-3 w-full text-left rounded-lg text-sm font-medium text-red-300 hover:bg-red-500/10 hover:text-red-200 transition-colors"
          >
            <LogOut size={20} />
            Cerrar Sesión
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Top Header Mobile */}
        <header className="h-16 bg-white shadow-sm flex items-center justify-between px-6 lg:hidden">
          <div className="flex items-center gap-2 font-display font-bold text-costa-navy">
            COSTA G Admin
          </div>
          <button onClick={() => setSidebarOpen(true)} className="text-costa-navy">
            <Menu size={24} />
          </button>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
          {children}
        </main>
      </div>
    </div>
  );
}