import React from 'react';
import Link from 'next/link';
import { Search, ChevronRight, Calendar, User, Tag } from 'lucide-react';
import Hero from '../../components/Hero';

// Content Strategy: 8 Pillar Articles
const blogPosts = [
  // PILARES CONSTRUCCIÓN
  {
    id: 1,
    slug: '10-tendencias-construccion-2025',
    title: '10 Tendencias en Construcción para 2025',
    category: 'Construcción',
    date: '2024-10-20',
    author: 'Ing. Carlos Costa',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=800',
    excerpt: 'Descubre las tecnologías emergentes, desde el concreto autorreparable hasta la robótica en obra, que definirán el futuro de la edificación.'
  },
  {
    id: 2,
    slug: 'como-elegir-constructor-profesional',
    title: 'Cómo elegir un constructor profesional sin riesgos',
    category: 'Construcción',
    date: '2024-10-15',
    author: 'Arq. Ana Ruiz',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800',
    excerpt: 'Guía práctica para validar certificaciones, revisar contratos y asegurar que tu inversión esté en manos expertas.'
  },
  {
    id: 3,
    slug: 'fases-proyecto-construccion',
    title: 'Las 5 Fases críticas de un proyecto de construcción',
    category: 'Construcción',
    date: '2024-10-10',
    author: 'Ing. Carlos Costa',
    image: 'https://images.unsplash.com/photo-1581094794329-cd1361dca687?q=80&w=800',
    excerpt: 'Desde la factibilidad y permisos hasta la entrega llave en mano. Entiende el ciclo de vida completo de tu obra.'
  },
  {
    id: 4,
    slug: 'presupuesto-construccion-guia',
    title: 'Presupuesto en construcción: Guía completa para evitar sobrecostos',
    category: 'Construcción',
    date: '2024-10-05',
    author: 'Lic. Roberto M.',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800',
    excerpt: 'Aprende a desglosar costos directos e indirectos y descubre dónde puedes optimizar sin sacrificar calidad.'
  },
  {
    id: 5,
    slug: 'materiales-eco-amigables',
    title: 'Top Materiales Eco-Amigables y Bio-Sustentables',
    category: 'Construcción',
    date: '2024-09-28',
    author: 'Ing. Carlos Costa',
    image: 'https://images.unsplash.com/photo-1518544806308-54f683865464?q=80&w=800',
    excerpt: 'El bambú, el adobe reforzado y los ladrillos de PET reciclado están revolucionando la arquitectura sostenible en México.'
  },
  // PILARES INMOBILIARIA
  {
    id: 6,
    slug: 'guia-compra-primer-departamento',
    title: 'Guía de compra: Tu primer departamento paso a paso',
    category: 'Inmobiliaria',
    date: '2024-10-18',
    author: 'Lic. Sofia G.',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=800',
    excerpt: 'Todo lo que necesitas saber antes de firmar: ubicación, plusvalía, enganche y trámites notariales.'
  },
  {
    id: 7,
    slug: 'financiamiento-inmobiliario-2025',
    title: 'Opciones de Financiamiento Inmobiliario en 2025',
    category: 'Inmobiliaria',
    date: '2024-10-12',
    author: 'Lic. Sofia G.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=800',
    excerpt: 'Comparativa de tasas de interés, créditos Infonavit, Fovissste y bancarios para tomar la mejor decisión financiera.'
  },
  {
    id: 8,
    slug: 'como-invertir-bienes-raices',
    title: 'Cómo invertir en Bienes Raíces y generar rentas pasivas',
    category: 'Inmobiliaria',
    date: '2024-10-01',
    author: 'Ing. Carlos Costa',
    image: 'https://images.unsplash.com/photo-1460472178825-e5240623afd5?q=80&w=800',
    excerpt: 'Estrategias para inversionistas: Flipping, rentas vacacionales y preventas inmobiliarias de alta plusvalía.'
  }
];

export default function Blog() {
  return (
    <div className="pt-20">
      <Hero 
        title="Blog & Noticias" 
        description="Consejos expertos sobre construcción, tendencias inmobiliarias y sustentabilidad."
        image="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2000"
      />

      <div className="container mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
           
           {/* Main Content: Grid */}
           <div className="lg:w-2/3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 {blogPosts.map((post) => (
                    <Link href={`/blog/${post.slug}`} key={post.id} className="flex flex-col group bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-floating transition-all duration-300">
                       <div className="h-48 bg-gray-200 overflow-hidden relative">
                          <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                          <div className="absolute top-4 left-4 bg-costa-navy/90 text-white px-3 py-1 text-xs font-bold rounded uppercase tracking-wider">
                            {post.category}
                          </div>
                       </div>
                       
                       <div className="p-6 flex flex-col flex-grow">
                          <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                            <span className="flex items-center gap-1"><Calendar size={12}/> {post.date}</span>
                            <span className="flex items-center gap-1"><User size={12}/> {post.author}</span>
                          </div>
                          
                          <h3 className="text-xl font-bold text-costa-navy mb-3 group-hover:text-costa-sky transition-colors leading-tight">
                             {post.title}
                          </h3>
                          <p className="text-gray-500 text-sm mb-4 line-clamp-3 flex-grow leading-relaxed">
                             {post.excerpt}
                          </p>
                          <span className="text-costa-gold font-bold text-xs uppercase tracking-widest flex items-center gap-1 group-hover:gap-2 transition-all">
                             Leer Artículo <ChevronRight size={14} />
                          </span>
                       </div>
                    </Link>
                 ))}
              </div>
              
              {/* Pagination */}
              <div className="flex gap-2 mt-12 justify-center lg:justify-start">
                 <button className="px-4 py-2 bg-costa-navy text-white rounded font-bold shadow-lg">1</button>
                 <button className="px-4 py-2 hover:bg-gray-100 rounded text-gray-600 font-bold transition-colors">2</button>
                 <button className="px-4 py-2 hover:bg-gray-100 rounded text-gray-600 font-bold transition-colors">3</button>
              </div>
           </div>

           {/* Sidebar */}
           <div className="lg:w-1/3 space-y-8">
              {/* Search Widget */}
              <div className="bg-costa-slate p-6 rounded-xl border border-gray-100 shadow-soft">
                 <h4 className="font-bold text-costa-navy mb-4 text-lg">Buscar en el Blog</h4>
                 <div className="relative">
                    <input type="text" className="w-full pl-4 pr-10 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-costa-sky transition-colors text-sm" placeholder="Palabras clave..." />
                    <Search className="absolute right-3 top-3.5 text-gray-400" size={18} />
                 </div>
              </div>

              {/* Categories */}
              <div className="bg-white border border-gray-100 p-6 rounded-xl shadow-soft">
                 <h4 className="font-bold text-costa-navy mb-4 text-lg border-b border-gray-100 pb-2">Categorías</h4>
                 <ul className="space-y-3">
                    {['Construcción', 'Inmobiliaria', 'Sustentabilidad', 'Tecnología', 'Noticias COSTA G'].map(cat => (
                       <li key={cat} className="flex items-center justify-between text-gray-600 hover:text-costa-sky cursor-pointer group transition-colors text-sm font-medium">
                          <span className="flex items-center gap-2"><Tag size={14} className="text-gray-300 group-hover:text-costa-sky" /> {cat}</span>
                          <ChevronRight size={16} className="text-gray-300 group-hover:text-costa-sky" />
                       </li>
                    ))}
                 </ul>
              </div>

              {/* Trending */}
              <div className="bg-white border border-gray-100 p-6 rounded-xl shadow-soft">
                 <h4 className="font-bold text-costa-navy mb-4 text-lg border-b border-gray-100 pb-2">Más Leídos</h4>
                 <ul className="space-y-4">
                    {blogPosts.slice(0, 3).map(item => (
                       <Link href={`/blog/${item.slug}`} key={item.id} className="flex gap-4 items-start group">
                          <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                            <img src={item.image} alt="thumb" className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                          </div>
                          <div>
                             <h5 className="font-bold text-sm text-costa-navy leading-tight group-hover:text-costa-sky transition-colors mb-1 line-clamp-2">
                                {item.title}
                             </h5>
                             <span className="text-xs text-gray-400">{item.date}</span>
                          </div>
                       </Link>
                    ))}
                 </ul>
              </div>
              
              {/* CTA Widget */}
              <div className="bg-costa-navy text-white p-8 rounded-xl text-center relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-24 h-24 bg-costa-sky/20 rounded-full blur-2xl -mr-10 -mt-10"></div>
                 <h4 className="font-bold text-xl mb-3 relative z-10">¿Tienes un proyecto en mente?</h4>
                 <p className="text-sm text-gray-300 mb-6 relative z-10">Contáctanos hoy para una asesoría gratuita.</p>
                 <Link href="/contacto" className="inline-block w-full py-3 bg-costa-gold text-costa-navy font-bold rounded hover:bg-white transition-colors relative z-10 shadow-lg">
                   Cotizar Ahora
                 </Link>
              </div>
           </div>

        </div>
      </div>
    </div>
  );
}