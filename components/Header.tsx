'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, Hexagon, Search } from 'lucide-react';
import { NavItem } from '../types';
import Button from './Button';

const NAV_ITEMS: NavItem[] = [
  { label: 'Inicio', path: '/' },
  { label: 'Servicios', path: '/servicios' },
  { label: 'Proyectos', path: '/proyectos' },
  { label: 'Desarrollos', path: '/desarrollos' },
  { label: 'Nosotros', path: '/nosotros' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contacto', path: '/contacto' },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = pathname === '/';
  // If we are on Home and not scrolled, transparent. Else solid white.
  const headerClass = isHome && !isScrolled
    ? 'bg-transparent text-white border-b border-white/10'
    : 'bg-white text-costa-navy shadow-md py-2';

  const logoColor = isHome && !isScrolled ? 'text-white' : 'text-costa-navy';
  const navLinkHover = isHome && !isScrolled ? 'hover:text-costa-sky' : 'hover:text-costa-sky';
  const iconColor = isHome && !isScrolled ? 'text-white' : 'text-costa-navy';

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${headerClass}`}>
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative">
              <Hexagon size={32} className={`text-costa-lime fill-current opacity-20 absolute -left-1 -top-1`} />
              <Hexagon size={32} className={`${logoColor} relative z-10`} strokeWidth={2.5} />
            </div>
            <div className="flex flex-col">
              <span className={`text-2xl font-display font-bold tracking-widest leading-none ${logoColor}`}>
                COSTA G
              </span>
              <span className={`text-[0.6rem] font-sans tracking-[0.2em] uppercase opacity-90 ${logoColor}`}>
                Constructora & Inmobiliaria
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`text-xs xl:text-sm font-bold tracking-wide uppercase transition-colors ${navLinkHover}`}
              >
                {item.label}
              </Link>
            ))}
            
            <div className="h-6 w-px bg-current opacity-20 mx-2"></div>

            {/* Search Trigger */}
            <button 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className={`${iconColor} hover:text-costa-lime transition-colors`}
              aria-label="Buscar"
            >
              <Search size={20} />
            </button>

            {/* CTA Button */}
            <Link href="/contacto">
              <Button variant="primary" className="!py-2 !px-5 !text-xs xl:!text-sm shadow-none border border-transparent" withIcon={false}>
                Solicitar Cotización
              </Button>
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X size={28} className={logoColor} />
            ) : (
              <Menu size={28} className={logoColor} />
            )}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="absolute top-20 left-0 w-full bg-white shadow-xl lg:hidden flex flex-col p-6 animate-fade-in h-screen border-t border-gray-100">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-4 text-costa-navy font-display font-bold text-lg border-b border-gray-100 hover:text-costa-sky"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-6 flex flex-col gap-4">
              <button className="flex justify-center items-center gap-2 w-full py-4 border border-costa-navy text-costa-navy font-bold rounded">
                 <Search size={18} /> Buscar
              </button>
              <Link href="/contacto" onClick={() => setIsMobileMenuOpen(false)}>
                <Button variant="primary" className="w-full" withIcon>
                   Solicitar Cotización
                </Button>
              </Link>
            </div>
          </div>
        )}

        {/* Search Bar Overlay */}
        {isSearchOpen && (
          <div className="absolute top-20 left-0 w-full bg-white shadow-xl p-4 animate-fade-in border-t border-gray-100 hidden lg:block">
            <div className="container mx-auto max-w-3xl relative">
              <input 
                type="text" 
                placeholder="Buscar proyectos, propiedades o servicios..." 
                className="w-full p-4 pl-12 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-costa-sky text-lg text-costa-navy"
                autoFocus
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={24} />
              <button 
                onClick={() => setIsSearchOpen(false)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-costa-navy"
              >
                <X size={20} />
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;