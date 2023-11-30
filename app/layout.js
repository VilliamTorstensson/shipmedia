import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Analytics } from '@vercel/analytics/react'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Villiam Torstensson',
  description: 'Are you reade to take the next step?',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='scroll-smooth'>

      <body className={inter.className}>
        <Navbar />
        {children}
        <Analytics />
        <Footer />
        </body>
    </html>
  )
}
