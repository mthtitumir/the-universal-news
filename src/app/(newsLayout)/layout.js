import Footer from "@/components/Footer/Footer"
import Providers from "@/providers"
import Toaster from "@/components/Toaster"
import SectionNavbar from "@/components/Navbar/SectionNavbar"

export const metadata = {
  title: 'The Universal News',
  description: 'Breaking Borders, Breaking News: Where the World Comes to Know',
}

const NewsLayout = ({ children }) => {
  return (
    <div>
      <Providers>
          <SectionNavbar />
          {children}
          <Footer />
      </Providers>
      <Toaster />
    </div>
  )
}
export default NewsLayout;
