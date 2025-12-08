import React, { ReactNode } from 'react';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  linkTo?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, linkTo = '/servicios' }) => {
  return (
    <div className="group relative bg-white p-8 rounded-xl border border-gray-100 shadow-soft hover:shadow-floating transition-all duration-300 overflow-hidden">
      {/* Background Hover Effect - Sky Blue */}
      <div className="absolute inset-0 bg-costa-sky/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Icon */}
      <div className="relative z-10 w-14 h-14 bg-costa-sky/10 text-costa-navy rounded-lg flex items-center justify-center mb-6 group-hover:bg-costa-navy group-hover:text-costa-gold transition-colors duration-300">
        {icon}
      </div>

      {/* Content */}
      <h3 className="relative z-10 text-xl font-display font-bold text-costa-navy mb-3 group-hover:text-costa-sky transition-colors">
        {title}
      </h3>
      <p className="relative z-10 text-gray-500 text-sm leading-relaxed mb-6 group-hover:text-costa-charcoal">
        {description}
      </p>

      {/* Action */}
      <Link 
        href={linkTo} 
        className="relative z-10 inline-flex items-center text-xs font-bold uppercase tracking-widest text-costa-gold group-hover:text-costa-navy transition-colors"
      >
        Detalles <ArrowUpRight size={16} className="ml-1" />
      </Link>
    </div>
  );
};

export default ServiceCard;