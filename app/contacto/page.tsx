'use client';
import React, { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle, Loader2, AlertCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    serviceType: '',
    budget: '',
    message: ''
  });
  
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Error al enviar el formulario');
      }

      setStatus('success');
      setFormData({ name: '', phone: '', email: '', serviceType: '', budget: '', message: '' });
    } catch (error: any) {
      setStatus('error');
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="pt-20">
      <div className="bg-costa-navy text-white py-16 text-center">
         <h1 className="text-4xl font-display font-bold">Contáctanos</h1>
         <p className="opacity-80 mt-2">Estamos listos para atender tu próximo proyecto.</p>
      </div>

      <div className="container mx-auto px-6 py-20">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <div>
               <span className="text-costa-lime font-bold uppercase tracking-wider text-sm">Oficinas Centrales</span>
               <h2 className="text-3xl font-display font-bold text-costa-navy mt-2 mb-6">Información de Contacto</h2>
               <p className="text-gray-600 mb-8">
                  Para licitaciones, cotizaciones de obra privada o información sobre desarrollos inmobiliarios, utilice nuestros canales oficiales.
               </p>

               <div className="space-y-6">
                  <div className="flex items-start gap-4 p-4 border border-gray-100 rounded-lg hover:border-costa-lime transition-colors">
                     <div className="w-12 h-12 bg-costa-slate rounded-lg flex items-center justify-center text-costa-navy flex-shrink-0">
                        <MapPin />
                     </div>
                     <div>
                        <h4 className="font-bold text-costa-navy">Ubicación</h4>
                        <p className="text-gray-500 text-sm">Galo Soberon y Parra, Edif. C, Depto. #302, Col. Las Torres, C.P. 39076, Chilpancingo, Guerrero.</p>
                     </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 border border-gray-100 rounded-lg hover:border-costa-lime transition-colors">
                     <div className="w-12 h-12 bg-costa-slate rounded-lg flex items-center justify-center text-costa-navy flex-shrink-0">
                        <Mail />
                     </div>
                     <div>
                        <h4 className="font-bold text-costa-navy">Correo Electrónico</h4>
                        <p className="text-gray-500 text-sm">Inmob.costag@Hotmail.com</p>
                     </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 border border-gray-100 rounded-lg hover:border-costa-lime transition-colors">
                     <div className="w-12 h-12 bg-costa-slate rounded-lg flex items-center justify-center text-costa-navy flex-shrink-0">
                        <Phone />
                     </div>
                     <div>
                        <h4 className="font-bold text-costa-navy">Teléfono</h4>
                        <p className="text-gray-500 text-sm">747 273 5934</p>
                     </div>
                  </div>
               </div>
            </div>

            {/* Lead Qualification Form */}
            <div className="bg-white p-8 shadow-floating rounded-xl border border-gray-100 relative overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-costa-navy via-costa-sky to-costa-lime"></div>
               <h3 className="text-2xl font-bold text-costa-navy mb-2">Solicitar Cotización</h3>
               <p className="text-sm text-gray-500 mb-6">Complete el formulario para recibir asesoría personalizada.</p>
               
               {status === 'success' ? (
                 <div className="bg-green-50 border border-green-200 text-green-800 p-6 rounded-lg text-center animate-fade-in">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle size={32} className="text-green-600" />
                    </div>
                    <h4 className="font-bold text-xl mb-2">¡Mensaje Enviado!</h4>
                    <p className="text-sm">Gracias por contactar a COSTA G. Un asesor se pondrá en contacto contigo en breve.</p>
                    <button onClick={() => setStatus('idle')} className="mt-4 text-sm font-bold underline">Enviar otro mensaje</button>
                 </div>
               ) : (
                 <form className="space-y-5" onSubmit={handleSubmit}>
                    {/* Field 1: Name */}
                    <div>
                       <label className="block text-xs font-bold text-costa-navy uppercase mb-1">Nombre Completo <span className="text-red-500">*</span></label>
                       <input 
                         type="text" 
                         name="name"
                         value={formData.name}
                         onChange={handleChange}
                         className="w-full p-3 bg-gray-50 border border-gray-200 rounded focus:border-costa-lime focus:bg-white outline-none transition-all" 
                         placeholder="Ej. Arq. Juan Pérez" 
                         required 
                       />
                    </div>

                    {/* Field 2: Contact (Email/Phone) */}
                    <div className="grid grid-cols-2 gap-4">
                       <div>
                          <label className="block text-xs font-bold text-costa-navy uppercase mb-1">Teléfono <span className="text-red-500">*</span></label>
                          <input 
                            type="tel" 
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full p-3 bg-gray-50 border border-gray-200 rounded focus:border-costa-lime focus:bg-white outline-none transition-all" 
                            placeholder="10 dígitos" 
                            required 
                          />
                       </div>
                       <div>
                           <label className="block text-xs font-bold text-costa-navy uppercase mb-1">Email <span className="text-red-500">*</span></label>
                           <input 
                             type="email" 
                             name="email"
                             value={formData.email}
                             onChange={handleChange}
                             className="w-full p-3 bg-gray-50 border border-gray-200 rounded focus:border-costa-lime focus:bg-white outline-none transition-all" 
                             placeholder="contacto@empresa.com" 
                             required 
                           />
                       </div>
                    </div>

                    {/* Field 3: Service Type (Segmentation) */}
                    <div>
                       <label className="block text-xs font-bold text-costa-navy uppercase mb-1">Tipo de Servicio <span className="text-red-500">*</span></label>
                       <select 
                         name="serviceType"
                         value={formData.serviceType}
                         onChange={handleChange}
                         className="w-full p-3 bg-gray-50 border border-gray-200 rounded focus:border-costa-lime focus:bg-white outline-none transition-all text-gray-700"
                         required
                       >
                          <option value="">Seleccione una opción...</option>
                          <option value="obra_publica">Licitación / Obra Pública</option>
                          <option value="desarrollo">Compra de Propiedad</option>
                          <option value="construccion">Construcción Privada</option>
                          <option value="maquinaria">Renta de Maquinaria</option>
                          <option value="remodelacion">Remodelación</option>
                          <option value="diseno">Diseño Arquitectónico</option>
                       </select>
                    </div>

                    {/* Field 4: Budget Range (Qualification) */}
                    <div>
                       <label className="block text-xs font-bold text-costa-navy uppercase mb-1">Presupuesto Estimado</label>
                       <select 
                         name="budget"
                         value={formData.budget}
                         onChange={handleChange}
                         className="w-full p-3 bg-gray-50 border border-gray-200 rounded focus:border-costa-lime focus:bg-white outline-none transition-all text-gray-700"
                       >
                          <option value="">Seleccione rango...</option>
                          <option value="low">Menos de $1 MDP</option>
                          <option value="mid">$1 MDP - $5 MDP</option>
                          <option value="high">$5 MDP - $20 MDP</option>
                          <option value="institutional">Mayor a $20 MDP</option>
                       </select>
                    </div>

                    {/* Field 5: Message (Details) */}
                    <div>
                       <label className="block text-xs font-bold text-costa-navy uppercase mb-1">Detalles del Proyecto</label>
                       <textarea 
                         name="message"
                         value={formData.message}
                         onChange={handleChange}
                         rows={3} 
                         className="w-full p-3 bg-gray-50 border border-gray-200 rounded focus:border-costa-lime focus:bg-white outline-none transition-all" 
                         placeholder="Ubicación, metros cuadrados, requerimientos especiales..."
                       ></textarea>
                    </div>

                    {status === 'error' && (
                      <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 p-3 rounded">
                        <AlertCircle size={16} />
                        <span>{errorMessage}</span>
                      </div>
                    )}

                    <button 
                      type="submit" 
                      disabled={status === 'submitting'}
                      className="w-full py-4 bg-costa-navy text-white font-bold rounded shadow-lg hover:bg-costa-lime hover:text-costa-navy transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                       {status === 'submitting' ? (
                         <> <Loader2 size={20} className="animate-spin" /> Enviando... </>
                       ) : (
                         <> <CheckCircle size={20} /> Enviar Solicitud </>
                       )}
                    </button>
                    <p className="text-xs text-center text-gray-400 mt-4">
                       Sus datos están protegidos conforme a nuestro Aviso de Privacidad.
                    </p>
                 </form>
               )}
            </div>

         </div>
      </div>
    </div>
  );
}