import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Red Mascotera',
  description: 'Hola! Somos Red Mascotera, un grupo de voluntarios. Unimos corazones amantes de los animales, promoviendo el amor incondicional y la solidaridad. Juntos, creamos un mundo mejor para todas las mascotas.'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='es'>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
