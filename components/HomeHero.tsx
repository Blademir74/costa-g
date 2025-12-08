import React, { useState } from 'react';
import { Search, MapPin, Home, Hammer, ArrowRight, Hexagon } from 'lucide-react';
import { SearchTab } from '../types';

const HomeHero: React.FC = () => {
  const [activeTab, setActiveTab] = useState<SearchTab>('buy');
  const [location, setLocation] = useState('');

  return (
    <section className="relative w-full h-[100vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop"
          alt="Luxury Architecture"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay using Brand Colors - Coast Sky to Navy */}
        <div className="absolute inset-0 bg-gradient-to-r from-costa-navy/95 via-costa-navy/70 to-costa-sky/10 mix-blend-multiply"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Brand & Value Proposition (Mobile: Stack Vertical) */}
          <div className="lg:col-span-7 text-white space-y-8 animate-fade-in-up">
            {/* Logo Brand in Hero Content as requested */}
            <div className="flex items-center gap-3 mb-4 opacity-90">
               <Hexagon className="text-costa-gold animate-pulse" size={40} strokeWidth={1.5} />
               <div className="flex flex-col">
                 <span className="text-3xl font-display font-bold tracking-[0.2em] leading-none">COSTA G</span>
                 <span className="text-xs uppercase tracking-[0.4em] text-costa-sky">Constructora</span>
               </div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold leading-tight">
              Diseñamos el <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-costa-sky to-white">Futuro que Habitas</span>
            </h1>
            
            <p className="text-lg text-gray-200 font-light leading-relaxed max-w-xl border-l-4 border-costa-gold pl-6">
              Líderes en construcción Bio-Sustentable y desarrollo inmobiliario de alto nivel en México.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="px-10 py-4 bg-costa-gold text-costa-navy font-bold rounded hover:bg-white hover:text-costa-navy transition-all duration-300 shadow-lg flex items-center justify-center gap-2 group">
                Explorar Proyectos <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column: Smart Search Widget (Mobile: Simplified) */}
          <div className="lg:col-span-5 w-full bg-white/95 backdrop-blur-md rounded-2xl shadow-floating overflow-hidden animate-fade-in-up delay-150 border border-white/20">
            
            {/* Tabs */}
            <div className="flex border-b border-gray-100">
              <button
                onClick={() => setActiveTab('buy')}
                className={`flex-1 py-4 text-xs md:text-sm font-bold uppercase tracking-wider flex justify-center items-center gap-2 transition-colors
                  ${activeTab === 'buy' ? 'bg-costa-navy text-white' : 'bg-gray-50 text-gray-400 hover:text-costa-navy'}`}
              >
                <Home size={16} /> <span className="hidden sm:inline">Comprar</span>
              </button>
              <button
                onClick={() => setActiveTab('rent')}
                className={`flex-1 py-4 text-xs md:text-sm font-bold uppercase tracking-wider flex justify-center items-center gap-2 transition-colors
                  ${activeTab === 'rent' ? 'bg-costa-navy text-white' : 'bg-gray-50 text-gray-400 hover:text-costa-navy'}`}
              >
                <Search size={16} /> <span className="hidden sm:inline">Rentar</span>
              </button>
              <button
                onClick={() => setActiveTab('build')}
                className={`flex-1 py-4 text-xs md:text-sm font-bold uppercase tracking-wider flex justify-center items-center gap-2 transition-colors
                  ${activeTab === 'build' ? 'bg-costa-navy text-white' : 'bg-gray-50 text-gray-400 hover:text-costa-navy'}`}
              >
                <Hammer size={16} /> <span className="hidden sm:inline">Construir</span>
              </button>
            </div>

            {/* Smart Search Form (3 Filters) */}
            <div className="p-6 md:p-8 space-y-5">
              {activeTab === 'build' ? (
                <div className="text-center py-2 space-y-4">
                   <h3 className="text-costa-navy font-display font-bold text-lg">Cotizador de Obra</h3>
                   <div className="space-y-4 text-left">
                      {/* Filter 1 */}
                      <div>
                        <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1 block">Tipo de Proyecto</label>
                        <select className="w-full p-3 border border-gray-200 rounded text-gray-700 focus:outline-none focus:border-costa-sky bg-gray-50">
                          <option>Residencial</option>
                          <option>Comercial</option>
                          <option>Industrial</option>
                        </select>
                      </div>
                      {/* Filter 2 */}
                      <div>
                        <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1 block">Metros Cuadrados</label>
                        <select className="w-full p-3 border border-gray-200 rounded text-gray-700 focus:outline-none focus:border-costa-sky bg-gray-50">
                          <option>0 - 100 m²</option>
                          <option>100 - 300 m²</option>
                          <option>300m² +</option>
                        </select>
                      </div>
                   </div>
                </div>
              ) : (
                <>
                  {/* Filter 1: Ubicación */}
                  <div>
                    <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1 block">Ubicación</label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3.5 text-costa-gold" size={18} />
                      <input
                        type="text"
                        placeholder="Ciudad, Zona o Código Postal"
                        className="w-full pl-10 p-3 border border-gray-200 rounded text-gray-700 focus:outline-none focus:border-costa-sky transition-colors bg-gray-50"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {/* Filter 2: Tipo Propiedad */}
                    <div>
                      <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1 block">Tipo</label>
                      <select className="w-full p-3 border border-gray-200 rounded text-gray-700 focus:outline-none focus:border-costa-sky bg-gray-50">
                        <option>Casa</option>
                        <option>Depto</option>
                        <option>Terreno</option>
                        <option>Oficina</option>
                      </select>
                    </div>
                    {/* Filter 3: Presupuesto */}
                    <div>
                      <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1 block">Presupuesto</label>
                      <select className="w-full p-3 border border-gray-200 rounded text-gray-700 focus:outline-none focus:border-costa-sky bg-gray-50">
                        <option>Cualquiera</option>
                        <option>$1M - $3M</option>
                        <option>$3M - $6M</option>
                        <option>$6M +</option>
                      </select>
                    </div>
                  </div>
                </>
              )}

              <button className="w-full py-4 bg-costa-navy text-white font-bold rounded uppercase tracking-widest hover:bg-costa-sky hover:text-costa-navy transition-colors duration-300 shadow-lg mt-2 flex justify-center items-center gap-2">
                <Search size={18} />
                {activeTab === 'build' ? 'Solicitar Asesoría' : 'Buscar Inmuebles'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;