import Link from 'next/link';
import Button from '../components/Button';
import { Home, AlertCircle } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-6 text-center">
      <div className="bg-costa-sky/10 p-6 rounded-full mb-6">
        <AlertCircle size={64} className="text-costa-navy" />
      </div>
      <h1 className="text-4xl md:text-6xl font-display font-bold text-costa-navy mb-4">404</h1>
      <h2 className="text-xl md:text-2xl font-bold text-gray-600 mb-6">Página no encontrada</h2>
      <p className="text-gray-500 max-w-md mb-8">
        Lo sentimos, la página que estás buscando no existe o ha sido movida.
      </p>
      <Link href="/">
        <Button variant="primary" withIcon>
          <Home size={18} className="mr-2" /> Volver al Inicio
        </Button>
      </Link>
    </div>
  );
}