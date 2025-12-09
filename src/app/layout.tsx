import './globals.css'

export const metadata = {
  title: 'COSTA G | Constructora e Inmobiliaria | Proyectos Nacionales e Internacionales',
  description: 'Constructora e inmobiliaria con 30+ años. Proyectos residenciales, comerciales e industriales. Consultoría en construcción a nivel nacional e internacional.',
  keywords: 'constructora mexico, inmobiliaria, proyectos internacionales, construcción residencial, construcción comercial, infraestructura',
  openGraph: {
    title: 'COSTA G | Constructora e Inmobiliaria',
    description: 'Proyectos de construcción nacionales e internacionales con más de 30 años de experiencia',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&family=Playfair+Display:wght@700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
