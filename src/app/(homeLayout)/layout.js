import Footer from "@/components/Footer/Footer"
import Navbar from "@/components/Navbar/Navbar"
import TopNavbar from "@/components/Navbar/TopNavbar"
import Providers from "@/providers"
import Toaster from "@/components/Toaster"
import LatestMarque from "@/components/miniComponents/LatestMarque"



export const metadata = {
  title: 'Home | The Universal News',
  description: 'Breaking Borders, Breaking News: Where the World Comes to Know',
}

const HomeLayout = ({ children }) => {
  return (
    <div>
      <Providers>
        <TopNavbar />
        <Navbar />
        <LatestMarque />
        {children}
        <Footer />
      </Providers>
      <Toaster />
    </div>
  )
}
export default HomeLayout;
