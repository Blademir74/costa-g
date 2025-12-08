import React from 'react';
import { Rotate3D } from 'lucide-react';
import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  category: string;
  image: string;
  year?: string;
  has360?: boolean;
  onClick?: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, category, image, year, has360, onClick }) => {
  return (
    <div 
      className="group cursor-pointer relative flex flex-col h-full" 
      onClick={onClick}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden rounded-lg aspect-[4/3] bg-gray-200 mb-4 shadow-soft group-hover:shadow-floating transition-all duration-500">
        <Image
          src={image} 
          alt={title} 
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Overlay Gradient (Navy) */}
        <div className="absolute inset-0 bg-gradient-to-t from-costa-navy/90 via-costa-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {/* 360 Badge */}
        {has360 && (
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-costa-navy p-2 rounded-full shadow-lg z-20">
            <Rotate3D size={20} />
          </div>
        )}

        {/* Hover Content */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
          <span className="bg-white text-costa-navy font-bold px-6 py-2 rounded uppercase tracking-widest text-xs shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            Ver Proyecto
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="flex justify-between items-start mt-auto">
        <div>
          <span className="block text-xs font-bold text-costa-sky uppercase tracking-wider mb-1">
            {category}
          </span>
          <h3 className="font-display font-bold text-costa-navy text-lg leading-tight group-hover:text-costa-gold transition-colors">
            {title}
          </h3>
        </div>
        {year && (
          <span className="text-xs font-bold text-gray-400 border border-gray-200 px-2 py-1 rounded">
            {year}
          </span>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;