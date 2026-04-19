import type { Metadata } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

export const metadata: Metadata = {
  title: 'Nelson Jiménez — Ingeniero de Sistemas',
  icons: {
    icon: '/logo.png',
  },
  description:
    'Portafolio de Nelson Andrés Jiménez Alvarez. Ingeniero de Sistemas con experiencia en desarrollo full stack, automatizaciones empresariales con n8n y arquitectura cloud (AWS y Oracle).',
  keywords: ['Nelson Jiménez', 'Portafolio', 'Full Stack', 'Desarrollador', 'AWS', 'React', 'Laravel'],
  authors: [{ name: 'Nelson Andrés Jiménez Alvarez' }],
  openGraph: {
    title: 'Nelson Jiménez — Ingeniero de Sistemas',
    description: 'Portafolio profesional de Nelson Andrés Jiménez Alvarez',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${geistMono.variable} bg-background`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
