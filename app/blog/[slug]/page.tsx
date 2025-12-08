import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Hero from '../../../components/Hero';
import JsonLd from '../../../components/JsonLd';
import { Calendar, User, Tag, ArrowLeft, Share2 } from 'lucide-react';

const getPostBySlug = (slug: string) => {
  const allPosts = [
    {
        slug: '10-tendencias-construccion-2025',
        title: '10 Tendencias en Construcción para 2025',
        category: 'Construcción',
        date: '2024-10-20',
        author: 'Ing. Carlos Costa',
        image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2000',
        content: 'La industria de la construcción está en el umbral de una transformación masiva. Para el 2025, tecnologías como el concreto autorreparable y la impresión 3D a gran escala dejarán de ser experimentales para convertirse en estándares de la industria. En este artículo analizamos cómo COSTA G está adoptando estas innovaciones...'
    },
    {
        slug: 'como-elegir-constructor-profesional',
        title: 'Cómo elegir un constructor profesional sin riesgos',
        category: 'Construcción',
        date: '2024-10-15',
        author: 'Arq. Ana Ruiz',
        image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2000',
        content: 'Elegir a la empresa constructora adecuada es la decisión más importante de tu proyecto. Un error aquí puede costar millones y años de retraso. Aquí te presentamos una checklist de 10 puntos para auditar a tu futuro contratista, desde la revisión de la constancia de situación fiscal hasta la visita a obras previas...'
    },
    {
        slug: 'fases-proyecto-construccion',
        title: 'Las 5 Fases críticas de un proyecto de construcción',
        category: 'Construcción',
        date: '2024-10-10',
        author: 'Ing. Carlos Costa',
        image: 'https://images.unsplash.com/photo-1581094794329-cd1361dca687?q=80&w=2000',
        content: 'Todo proyecto exitoso pasa por 5 etapas ineludibles: 1. Prefactibilidad y diseño conceptual. 2. Ingenierías y Proyecto Ejecutivo. 3. Trámites y Licencias. 4. Construcción y Supervisión. 5. Cierre y Entrega. Saltarse una de estas fases es la receta para sobrecostos...'
    },
    {
        slug: 'presupuesto-construccion-guia',
        title: 'Presupuesto en construcción: Guía completa',
        category: 'Construcción',
        date: '2024-10-05',
        author: 'Lic. Roberto M.',
        image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000',
        content: '¿Sabías que el 80% de las obras privadas terminan costando más de lo planeado? Esto se debe a presupuestos mal elaborados que no contemplan indirectos, imprevistos o inflación de materiales. Aprende a leer un catálogo de conceptos...'
    },
    {
        slug: 'materiales-eco-amigables',
        title: 'Materiales Eco-Amigables y Bio-Sustentables',
        category: 'Construcción',
        date: '2024-09-28',
        author: 'Ing. Carlos Costa',
        image: 'https://images.unsplash.com/photo-1518544806308-54f683865464?q=80&w=2000',
        content: 'El futuro es verde. Exploramos el uso de ladrillos de cáñamo, pinturas fotocatalíticas que limpian el aire y acero reciclado. En COSTA G, priorizamos materiales que reducen la huella de carbono de tu edificación...'
    },
    {
        slug: 'guia-compra-primer-departamento',
        title: 'Guía de compra: Primer departamento',
        category: 'Inmobiliaria',
        date: '2024-10-18',
        author: 'Lic. Sofia G.',
        image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2000',
        content: 'Comprar tu primer hogar es emocionante pero abrumador. Esta guía te lleva de la mano: ¿Cuánto debo ahorrar para el enganche? ¿Qué es el avalúo? ¿Cómo elegir la mejor notaría? Desmitificamos el proceso de compra...'
    },
    {
        slug: 'financiamiento-inmobiliario-2025',
        title: 'Financiamiento Inmobiliario: Opciones 2025',
        category: 'Inmobiliaria',
        date: '2024-10-12',
        author: 'Lic. Sofia G.',
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=2000',
        content: 'Con las tasas de interés fluctuando, elegir el crédito correcto es vital. Analizamos las nuevas propuestas de Infonavit, los cofinavit y las tasas bancarias preferenciales para desarrollos sustentables...'
    },
    {
        slug: 'como-invertir-bienes-raices',
        title: 'Cómo invertir en Bienes Raíces',
        category: 'Inmobiliaria',
        date: '2024-10-01',
        author: 'Ing. Carlos Costa',
        image: 'https://images.unsplash.com/photo-1460472178825-e5240623afd5?q=80&w=2000',
        content: 'Los bienes raíces siguen siendo el refugio más seguro contra la inflación. Descubre estrategias como el "House Hacking", la compra en preventa (Friend & Family) y los Fideicomisos de Inversión en Bienes Raíces (FIBRAs)...'
    }
  ];

  const found = allPosts.find(p => p.slug === slug);
  if (found) return found;

  // Fallback for demo
  return {
    slug,
    title: slug.replace(/-/g, ' ').toUpperCase(),
    category: 'General',
    date: '2024-01-01',
    author: 'Redacción COSTA G',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2000',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  };
};

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  return {
    title: `${post.title} | Blog COSTA G`,
    description: post.content.substring(0, 160),
    openGraph: {
        title: post.title,
        description: post.content.substring(0, 160),
        images: [post.image],
        type: 'article',
        publishedTime: post.date,
        authors: [post.author]
    }
  };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
      notFound();
  }

  // Schema: BlogPosting
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "image": post.image,
    "datePublished": post.date,
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "COSTA G",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.costag.com/logo.png"
      }
    },
    "description": post.content.substring(0, 160),
    "articleBody": post.content
  };

  // Schema: BreadcrumbList
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [{
      "@type": "ListItem",
      "position": 1,
      "name": "Inicio",
      "item": "https://www.costag.com"
    },{
      "@type": "ListItem",
      "position": 2,
      "name": "Blog",
      "item": "https://www.costag.com/blog"
    },{
      "@type": "ListItem",
      "position": 3,
      "name": post.title
    }]
  };

  return (
    <div className="pt-20">
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />
      
      <Hero 
        title={post.title} 
        description={`${post.category} • Por ${post.author}`}
        image={post.image}
      />

      <div className="container mx-auto px-6 py-12 max-w-4xl">
         {/* Navigation / Meta */}
         <div className="flex justify-between items-center mb-8 border-b border-gray-100 pb-4">
            <Link href="/blog" className="flex items-center gap-2 text-costa-navy font-bold text-sm hover:text-costa-sky transition-colors">
               <ArrowLeft size={16} /> Volver al Blog
            </Link>
            <div className="flex gap-4">
               <button className="text-gray-400 hover:text-costa-navy transition-colors"><Share2 size={18} /></button>
            </div>
         </div>

         {/* Article Content */}
         <article className="prose lg:prose-xl text-gray-600 mx-auto">
            <div className="flex gap-4 mb-8 text-sm font-medium text-costa-gold uppercase tracking-wider">
               <span className="flex items-center gap-1"><Calendar size={16}/> {post.date}</span>
               <span className="flex items-center gap-1"><Tag size={16}/> {post.category}</span>
            </div>
            
            <p className="lead text-xl text-gray-700 font-medium mb-8">
               {post.content.split('.')[0]}.
            </p>
            <p className="mb-6">
               {post.content.substring(post.content.indexOf('.') + 1)}
            </p>
            <p>
               Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
            </p>
            <h3 className="text-2xl font-bold text-costa-navy mt-8 mb-4">Puntos Clave</h3>
            <ul className="list-disc pl-5 space-y-2 mb-8">
               <li>Innovación constante en procesos constructivos.</li>
               <li>Seguridad financiera antes de iniciar la obra.</li>
               <li>Importancia de la supervisión técnica certificada.</li>
            </ul>
            <p>
               Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula ut id elit.
            </p>
         </article>

         {/* Author Bio */}
         <div className="mt-16 bg-gray-50 p-8 rounded-xl flex items-center gap-6 border border-gray-100">
            <div className="w-16 h-16 bg-costa-navy rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
               {post.author.charAt(0)}
            </div>
            <div>
               <h4 className="font-bold text-costa-navy text-lg">Sobre el Autor: {post.author}</h4>
               <p className="text-sm text-gray-500">Especialista en proyectos {post.category === 'Construcción' ? 'de infraestructura y edificación sustentable' : 'inmobiliarios y finanzas personales'}. Comprometido con la calidad y la innovación en COSTA G.</p>
            </div>
         </div>
      </div>
    </div>
  );
}