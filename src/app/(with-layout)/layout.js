import Footer from "@/components/Footer/Footer"
import Navbar from "@/components/Navbar/Navbar"
import TopNavbar from "@/components/miniComponents/TopNavbar"
import { ThemeProvider } from "@/contexts/ThemeContext"
import Providers from "@/providers"
import { Inter } from "next/font/google"
import { Toaster } from "react-hot-toast"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Home | The Universal News',
  description: 'Breaking Borders, Breaking News: Where the World Comes to Know',
}

const WithLayout = ({ children }) => {
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
export default WithLayout;
