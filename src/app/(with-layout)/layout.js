"use client"
import Footer from "@/components/Footer/Footer"
import Navbar from "@/components/Navbar/Navbar"
import ThinNavbar from "@/components/Navbar/ThinNavbar";
import TopNavbar from "@/components/Navbar/TopNavbar"
import { ThemeProvider } from "@/contexts/ThemeContext";
import Providers from "@/providers"
import { Inter } from "next/font/google"
import { usePathname } from "next/navigation";
import { Toaster } from "react-hot-toast"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Home | The Universal News',
  description: 'Breaking Borders, Breaking News: Where the World Comes to Know',
}

const WithLayout = ({ children }) => {
  const pathname = usePathname();
  // console.log(pathname);
  return (
    <html lang="en" data-theme="light">
      <body className={`${inter.className} bg-white`}>
        <ThemeProvider>
          <Providers>
            {
              pathname === '/'
                ?
                <>
                  <TopNavbar />
                  <Navbar />
                </> 
                :
                <ThinNavbar />
            }
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
