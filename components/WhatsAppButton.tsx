import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
  return (
    <a
      href="https://wa.me/527472735934?text=Hola,%20me%20interesa%20más%20información%20sobre%20un%20proyecto."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-floating hover:scale-110 transition-transform duration-300 group flex items-center gap-2 overflow-hidden max-w-[60px] hover:max-w-[200px]"
      aria-label="Chat en WhatsApp"
    >
      <MessageCircle size={28} fill="white" />
      <span className="opacity-0 group-hover:opacity-100 whitespace-nowrap transition-opacity duration-300 font-bold">
        Chat en línea
      </span>
    </a>
  );
};

export default WhatsAppButton;