import React from 'react';
import { Search, MapPin, Download, Wifi, Car, Trees, Home, DollarSign } from 'lucide-react';

export default function Developments() {
  return (
    <div className="pt-20 bg-gray-50 min-h-screen">
      
      {/* 1. Hero */}
      <div className="bg-costa-navy text-white py-12 relative overflow-hidden">
        <div className="absolute right-0 bottom-0 opacity-10 transform translate-x-1/4 translate-y-1/4">
           <div className="w-96 h-96 border-[40px] border-white rounded-full"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
           <h1 className="text-3xl md:text-4xl font-display font-bold mb-2">Desarrollos Inmobiliarios</h1>
           <p className="text-costa-sky text-sm md:text-base">Encuentra tu próximo hogar o inversión con plusvalía garantizada.</p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* 2. Sticky Advanced Search Sidebar */}
          <aside className="lg:w-1/4">
             <div className="sticky top-24 bg-white p-6 rounded-xl shadow-soft border border-gray-100">
                <div className="flex items-center gap-2 mb-6 border-b border-gray-100 pb-4">
                  <Search className="text-costa-gold" size={20} />
                  <h3 className="font-bold text-costa-navy text-lg">Búsqueda Avanzada</h3>
                </div>
                
                <div className="space-y-5">
                   {/* Ubicación */}
                   <div>
                      <label className="text-xs font-bold uppercase text-gray-400 block mb-2">Ubicación</label>
                      <div className="relative">
                         <MapPin size={16} className="absolute left-3 top-3 text-gray-400" />
                         <input type="text" placeholder="Ciudad, Colonia..." className="w-full pl-9 py-2.5 border border-gray-200 rounded-lg text-sm focus:border-costa-sky outline-none bg-gray-50" />
                      </div>
                   </div>

                   {/* Tipo de Propiedad */}
                   <div>
                      <label className="text-xs font-bold uppercase text-gray-400 block mb-2">Tipo de Propiedad</label>
                      <div className="flex gap-2">
                        <button className="flex-1 py-2 text-xs font-bold rounded border border-costa-navy bg-costa-navy text-white">Casa</button>
                        <button className="flex-1 py-2 text-xs font-bold rounded border border-gray-200 text-gray-500 hover:border-costa-navy hover:text-costa-navy">Depto</button>
                        <button className="flex-1 py-2 text-xs font-bold rounded border border-gray-200 text-gray-500 hover:border-costa-navy hover:text-costa-navy">Lote</button>
                      </div>
                   </div>

                   {/* Precio */}
                   <div>
                      <label className="text-xs font-bold uppercase text-gray-400 block mb-2">Rango de Precio</label>
                      <div className="relative">
                         <DollarSign size={16} className="absolute left-3 top-3 text-gray-400" />
                         <select className="w-full pl-9 py-2.5 border border-gray-200 rounded-lg text-sm focus:border-costa-sky outline-none bg-gray-50 text-gray-600 appearance-none">
                            <option>Cualquier Precio</option>
                            <option>$1M - $3M</option>
                            <option>$3M - $6M</option>
                            <option>$6M +</option>
                         </select>
                      </div>
                   </div>

                   {/* Habitaciones */}
                   <div>
                      <label className="text-xs font-bold uppercase text-gray-400 block mb-2">Habitaciones</label>
                      <div className="flex justify-between gap-2">
                         {[1,2,3,4].map(n => (
                           <button key={n} className="w-full py-2 rounded-lg border border-gray-200 text-sm font-bold text-gray-500 hover:bg-costa-sky hover:text-white hover:border-costa-sky transition-colors">{n}+</button>
                         ))}
                      </div>
                   </div>

                   <button className="w-full py-3 bg-costa-gold text-costa-navy font-bold rounded-lg shadow-md hover:bg-costa-navy hover:text-white transition-all mt-4">
                      Ver 12 Resultados
                   </button>
                </div>
             </div>
          </aside>

          {/* 3. Listings Grid */}
          <main className="lg:w-3/4">
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-6">
                {[1, 2, 3, 4].map((dev) => (
                  <div key={dev} className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-soft hover:shadow-floating transition-all group flex flex-col">
                     {/* Image */}
                     <div className="h-64 bg-gray-200 relative overflow-hidden">
                        <img src={`https://picsum.photos/seed/${dev + 200}/600/400`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Development" />
                        <div className="absolute top-4 left-4 bg-costa-navy text-white px-3 py-1 rounded text-xs font-bold tracking-wider uppercase">En Venta</div>
                        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent p-4">
                           <span className="text-white font-bold text-xl drop-shadow-md">$3,500,000 MXN</span>
                        </div>
                     </div>
                     
                     {/* Content */}
                     <div className="p-6 flex-grow flex flex-col">
                        <div className="mb-4">
                           <h2 className="text-xl font-bold text-costa-navy mb-1 group-hover:text-costa-sky transition-colors">Residencial Las Torres {dev}</h2>
                           <p className="text-gray-500 flex items-center gap-1 text-sm"><MapPin size={14} className="text-costa-sky" /> Chilpancingo, Gro.</p>
                        </div>

                        {/* Specs */}
                        <div className="flex items-center justify-between py-4 border-t border-gray-100 mb-4">
                           <div className="flex items-center gap-2 text-gray-600 text-sm">
                              <Home size={16} className="text-gray-400" /> <span className="font-bold">3</span> Rec
                           </div>
                           <div className="w-px h-8 bg-gray-100"></div>
                           <div className="flex items-center gap-2 text-gray-600 text-sm">
                              <Car size={16} className="text-gray-400" /> <span className="font-bold">2</span> Autos
                           </div>
                           <div className="w-px h-8 bg-gray-100"></div>
                           <div className="flex items-center gap-2 text-gray-600 text-sm">
                              <span className="font-bold">180</span> m²
                           </div>
                        </div>

                        {/* Features Pills */}
                        <div className="flex flex-wrap gap-2 mb-6">
                           <span className="px-2 py-1 bg-green-50 text-green-700 text-[10px] font-bold uppercase rounded flex items-center gap-1"><Trees size={10}/> Eco-Friendly</span>
                           <span className="px-2 py-1 bg-blue-50 text-blue-700 text-[10px] font-bold uppercase rounded flex items-center gap-1"><Wifi size={10}/> Smart</span>
                        </div>

                        <div className="mt-auto flex gap-3">
                           <button className="flex-1 py-2.5 bg-costa-navy text-white text-sm font-bold rounded hover:bg-costa-sky hover:text-costa-navy transition-colors">
                              Contactar
                           </button>
                           <button className="px-4 py-2.5 border border-gray-200 text-gray-500 rounded hover:border-costa-navy hover:text-costa-navy transition-colors" title="Descargar Brochure">
                              <Download size={18} />
                           </button>
                        </div>
                     </div>
                  </div>
                ))}
             </div>
          </main>

        </div>
      </div>
    </div>
  );
}