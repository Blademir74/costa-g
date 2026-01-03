import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  category: string;
  imageUrl: string;
  slug: string;
  location?: string | null;
}

export default function ProjectCard({ 
  title, 
  category, 
  imageUrl, 
  slug,
  location 
}: ProjectCardProps) {
  return (
    <Link href={`/proyectos/${slug}`} className="group block h-full">
      <div className="relative overflow-hidden rounded-xl shadow-lg h-full bg-white transition-transform duration-300 hover:-translate-y-2">
        {/* Contenedor de Imagen con Aspect Ratio fijo */}
        <div className="relative h-64 w-full overflow-hidden">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            // Importante: Asegúrate de agregar tu dominio de supabase en next.config.js
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
          
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 text-xs font-semibold tracking-wide text-white bg-blue-600 rounded-full shadow-sm">
              {category}
            </span>
          </div>
        </div>

        {/* Contenido */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            {title}
          </h3>
          {location && (
            <p className="mt-2 text-sm text-gray-500 flex items-center">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {location}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
}