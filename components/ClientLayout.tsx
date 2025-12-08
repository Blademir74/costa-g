'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import Header from './Header';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';

interface ClientLayoutProps {
  children?: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  const pathname = usePathname();
  // Check if we are in admin section or login page
  const isAdmin = pathname?.startsWith('/admin') || pathname === '/login';

  return (
    <>
      {!isAdmin && <Header />}
      
      <main className={`flex-grow flex flex-col relative z-0 ${isAdmin ? 'bg-gray-100' : ''}`}>
        {children}
      </main>
      
      {!isAdmin && (
        <>
          <Footer />
          <WhatsAppButton />
        </>
      )}
    </>
  );
}