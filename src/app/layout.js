import Navbar from '@/components/Navbar/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer/Footer'
import TopNavbar from '@/components/miniComponents/TopNavbar'
import { ThemeProvider } from '@/contexts/ThemeContext'
import Providers from '@/providers'
import  Toaster from '@/components/Toaster'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Home | The Universal News',
  description: 'Breaking Borders, Breaking News: Where the World Comes to Know',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className={`${inter.className} bg-white`}>
        <ThemeProvider>
          <Providers>
            <TopNavbar />
            <Navbar />
            {children}
            <Footer />
          </Providers>
          <Toaster></Toaster>
        </ThemeProvider>
      </body>
    </html>
  )
}
