import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Anshul Portfolio',
  description: 'Anshul Gheewala portfolio',
  keyword:'Portfolio website Anshul portfolio website',
  author:'Anshul Gheewala',
  viewport:'width=device-width, initial-scale=1.0'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
