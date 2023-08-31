import Footer from "@/components/Footer/Footer"
import TopNavbar from "@/components/Navbar/TopNavbar"
import Providers from "@/providers"
import Toaster from "@/components/Toaster"


export const metadata = {
  title: 'Home | The Universal News',
  description: 'Breaking Borders, Breaking News: Where the World Comes to Know',
}

const NewsLayout = ({ children }) => {
  return (
    <div>
      <Providers>
        <TopNavbar />
        {children}
        <Footer />
      </Providers>
      <Toaster />
    </div>
  )
}
export default NewsLayout;
