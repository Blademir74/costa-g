import './globals.css'

export const metadata = {
  title: 'Costa G - Constructora Bio-Sustentable',
  description: 'Empresa constructora Bio-Sustentable en Guerrero y Estado de México. Puentes, caminos, carreteras y más.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
