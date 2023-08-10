import Navbar from '@/components/Navbar/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Home | The Universal News',
  description: 'Breaking Borders, Breaking News: Where the World Comes to Know',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
