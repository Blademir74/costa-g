import { Hexagon, Loader2 } from 'lucide-react';

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-white/80 backdrop-blur-sm z-50 flex flex-col items-center justify-center">
      <div className="relative">
        <Hexagon size={64} className="text-costa-lime animate-pulse" />
        <div className="absolute inset-0 flex items-center justify-center">
          <Loader2 size={32} className="text-costa-navy animate-spin" />
        </div>
      </div>
      <p className="mt-4 text-costa-navy font-bold tracking-widest text-sm animate-pulse">CARGANDO...</p>
    </div>
  );
}