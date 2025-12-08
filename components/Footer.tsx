import React from 'react';
import { Facebook, Instagram, Linkedin, Hexagon, Mail, MapPin, Phone, ArrowRight } from 'lucide-react';
import Button from './Button';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-costa-navy text-white pt-20 pb-10 border-t-8 border-costa-sky">
      <div className="container mx-auto px-6">
        
        {/* Newsletter Section */}
        <div className="bg-costa-charcoal/30 rounded-2xl p-8 md:p-12 mb-16 flex flex-col md:flex-row items-center justify-between gap-8 border border-white/5">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-display font-bold mb-2">Suscríbete a nuestro Newsletter</h3>
            <p className="text-gray-300 font-light">Recibe actualizaciones sobre nuevos desarrollos y avances de obra.</p>
          </div>
          <div className="md:w-1/2 w-full flex gap-2">
             <input 
               type="email" 
               placeholder="Tu correo electrónico" 
               className="flex-1 bg-white/10 border border-white/20 rounded px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-costa-sky focus:bg-white/20 transition-all"
             />
             <Button variant="accent" className="!py-3 !px-6">
               Suscribir
             </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12 border-b border-white/10 pb-12">
          
          {/* Brand & Social (Column 1 - Wide) */}
          <div className="lg:col-span-1">
             <div className="flex items-center gap-2 mb-6">
              <Hexagon size={28} className="text-costa-lime fill-costa-lime/20" />
              <div className="flex flex-col">
                <span className="text-xl font-display font-bold tracking-widest leading-none">COSTA G</span>
                <span className="text-[0.5rem] uppercase tracking-[0.2em] text-costa-sky">Constructora</span>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-6 font-light">
              Líderes en construcción Bio-Sustentable y desarrollo inmobiliario de alto nivel en el sureste mexicano.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-costa-sky hover:text-costa-navy transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-costa-sky hover:text-costa-navy transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-costa-sky hover:text-costa-navy transition-all">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Col 2: Empresa */}
          <div>
            <h4 className="text-costa-sky font-bold uppercase tracking-widest text-xs mb-6">Empresa</h4>
            <ul className="space-y-3 text-sm text-gray-300 font-light">
              <li><Link href="/nosotros" className="hover:text-costa-sky transition-colors">Nosotros</Link></li>
              <li><Link href="/nosotros" className="hover:text-costa-sky transition-colors">Nuestro Equipo</Link></li>
              <li><Link href="/blog" className="hover:text-costa-sky transition-colors">Blog & Noticias</Link></li>
              <li><Link href="/contacto" className="hover:text-costa-sky transition-colors">Contacto</Link></li>
            </ul>
          </div>

          {/* Col 3: Servicios */}
          <div>
            <h4 className="text-costa-sky font-bold uppercase tracking-widest text-xs mb-6">Servicios</h4>
            <ul className="space-y-3 text-sm text-gray-300 font-light">
              <li><Link href="/servicios" className="hover:text-costa-sky transition-colors">Obra Pública</Link></li>
              <li><Link href="/servicios" className="hover:text-costa-sky transition-colors">Residencial</Link></li>
              <li><Link href="/servicios" className="hover:text-costa-sky transition-colors">Maquinaria</Link></li>
              <li><Link href="/servicios" className="hover:text-costa-sky transition-colors">Proyecto Ejecutivo</Link></li>
            </ul>
          </div>

          {/* Col 4: Desarrollos */}
          <div>
            <h4 className="text-costa-sky font-bold uppercase tracking-widest text-xs mb-6">Desarrollos</h4>
            <ul className="space-y-3 text-sm text-gray-300 font-light">
              <li><Link href="/desarrollos" className="hover:text-costa-sky transition-colors">En Venta</Link></li>
              <li><Link href="/desarrollos" className="hover:text-costa-sky transition-colors">Preventa</Link></li>
              <li><Link href="/desarrollos" className="hover:text-costa-sky transition-colors">Lotes Residenciales</Link></li>
              <li><Link href="/proyectos" className="hover:text-costa-sky transition-colors">Portafolio Entregado</Link></li>
            </ul>
          </div>

          {/* Col 5: Legal */}
          <div>
            <h4 className="text-costa-sky font-bold uppercase tracking-widest text-xs mb-6">Legal</h4>
            <ul className="space-y-3 text-sm text-gray-300 font-light">
              <li><a href="#" className="hover:text-costa-sky transition-colors">Aviso de Privacidad</a></li>
              <li><a href="#" className="hover:text-costa-sky transition-colors">Términos y Condiciones</a></li>
              <li><a href="#" className="hover:text-costa-sky transition-colors">Mapa del Sitio</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 font-light">
          <p>&copy; {new Date().getFullYear()} Comercializadora e Inmobiliaria Costa G S.A. de C.V.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <span>Diseño Clean Luxury</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;