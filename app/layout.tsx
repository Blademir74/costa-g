import React from 'react';
import type { Metadata } from 'next';
import { Montserrat, Open_Sans } from 'next/font/google';
import ClientLayout from '../components/ClientLayout';
import './globals.css';

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

const openSans = Open_Sans({ 
  subsets: ['latin'],
  variable: '--font-open-sans',
  weight: ['300', '400', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'COSTA G | Constructora e Inmobiliaria | Proyectos Nacionales e Internacionales',
  description: 'Constructora e inmobiliaria con 30+ años. Proyectos residenciales, comerciales e industriales. Consultoría en construcción a nivel nacional e internacional.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${montserrat.variable} ${openSans.variable}`}>
      <body className="bg-costa-sky/5 text-costa-charcoal antialiased font-sans flex flex-col min-h-screen selection:bg-costa-gold selection:text-white">
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}