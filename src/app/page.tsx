import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getProjects } from '@/services/projectService'
import { getSiteConfig } from '@/services/configService'
// 👇 AQUÍ IMPORTAMOS EL FOOTER
import { Hero, CTASection, Footer } from '@/components/ui'

// Forzamos que la página se regenere en cada visita para ver cambios al instante
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export const metadata: Metadata = {
  title: 'Costa G | Infraestructura que Transforma México',
  description: 'Constructora líder en infraestructura carretera, puentes y edificación sustentable.',
}

export default async function HomePage() {
  // 1. Cargar datos (Proyectos + Configuración)
  const [allProjects, heroConfigRaw, statsConfigRaw] = await Promise.all([
    getProjects(),
    getSiteConfig('home_hero'),
    getSiteConfig('home_stats')
  ]);
  
  // 2. Lógica del Hero (Imagen y Textos)
  const bridgeHeroProject = allProjects.find(p => p.slug === 'puente-vehicular-hero');
  const heroImage = heroConfigRaw?.bg_image || bridgeHeroProject?.main_image_url || allProjects[0]?.main_image_url || '/images/hero-fallback.jpg';
  const heroTitle = heroConfigRaw?.title || "Infraestructura que transforma a México";
  const heroSubtitle = heroConfigRaw?.subtitle || "Ejecución técnica de puentes, caminos y edificación pública con cumplimiento normativo.";

  // 3. Stats
  const stats = (statsConfigRaw as any) || [
    { label: "Obras Entregadas", value: "17", icon: "helmet" },
    { label: "Puentes", value: "243+", icon: "bridge" },
    { label: "Años", value: "7+", icon: "badge" },
    { label: "Calidad", value: "100%", icon: "check" }
  ];

  const recentProjects = allProjects.slice(0, 3);

  return (
    <main className="flex min-h-screen flex-col bg-slate-50">
      
      <Hero 
        title={heroTitle}
        subtitle={heroSubtitle}
        image={heroImage}
        primaryCta={heroConfigRaw?.cta_primary}
        secondaryCta={heroConfigRaw?.cta_secondary}
      />

      {/* STATS */}
      <section className="relative z-20 -mt-20 pb-24 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat: any, index: number) => (
              <div 
                key={index}
                className="group p-8 rounded-3xl bg-white border border-slate-100 shadow-xl shadow-slate-200/50 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center"
              >
                <div className="text-4xl md:text-5xl font-display font-bold text-slate-900 group-hover:text-sky-600 transition-colors mb-2">
                  {stat.value}
                </div>
                <div className="text-2xl mb-3 opacity-80">
                   {stat.icon === 'bridge' || index === 1 ? '🌉' : 
                    stat.icon === 'badge' || index === 2 ? '🥇' : 
                    stat.icon === 'helmet' || index === 0 ? '🏗️' : '✅'}
                </div>
                <h3 className="font-bold text-slate-600 text-xs uppercase tracking-widest">
                  {stat.label}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OBRAS RECIENTES */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <span className="text-sky-600 font-bold uppercase tracking-widest text-sm mb-2 block">Portafolio Destacado</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 leading-tight">
                Últimas Obras Entregadas
              </h2>
            </div>
            <Link 
              href="/proyectos"
              className="group flex items-center gap-2 text-slate-600 font-bold hover:text-sky-600 transition-colors border-b-2 border-transparent hover:border-sky-600 pb-1"
            >
              Ver catálogo completo
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentProjects.map((p) => (
              <Link 
                key={p.id} 
                href={`/proyectos/${p.slug}`}
                className="group relative h-[28rem] rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 block"
              >
                <Image
                  src={p.main_image_url}
                  alt={p.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-70 transition-opacity" />
                
                <div className="absolute bottom-0 left-0 w-full p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md text-white text-[10px] font-black uppercase rounded-full mb-4 border border-white/30">
                    {p.category?.name || 'Proyecto'}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-2 leading-tight">
                    {p.title}
                  </h3>
                  <p className="text-slate-300 text-sm flex items-center gap-2 font-medium">
                    <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                    {p.location}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Construyendo el futuro de México"
        description="Comprometidos con la calidad en cada proyecto."
        primaryButtonText="Solicitar Presupuesto"
      />
      
      {/* 👇 AQUÍ SE AGREGA EL FOOTER */}
      <Footer 
        facebook={heroConfigRaw?.facebook_url}
        instagram={heroConfigRaw?.instagram_url}
        linkedin={heroConfigRaw?.linkedin_url}
      />
    </main>
  )
}