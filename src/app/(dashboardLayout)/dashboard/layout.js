import Providers from "@/providers"
import Toaster from "@/components/Toaster"
import Link from "next/link"
import { AiOutlineMenu } from "react-icons/ai"
import SectionNavbar from "@/components/Navbar/SectionNavbar"
import { adminSideNavbar, reporterSideNavbar, employerSideNavbar, userSideNavbar, generalSidebar } from "@/data/dashboardSidebarData"
import VerifyUser from "@/components/DashboardComponents/VerifyUser"
// import useAdmin from "@/hooks/useAdmin"


export const metadata = {
  title: 'Dashboard | The Universal News',
  description: 'Breaking Borders, Breaking News: Where the World Comes to Know',
}

const Dashboard = ({ children }) => {
  const admin = false;
  const employer = true;
  const reporter = false;
  let navData; 
//  const isAdmin = useAdmin()
  if(admin){
    navData = adminSideNavbar;
  }else if(employer){
    navData = employerSideNavbar;
  }else if(reporter){
    navData = reporterSideNavbar;
  } else {
    navData = userSideNavbar;
  }

  return (
    <div>
      <Providers>
        <SectionNavbar />
        <VerifyUser />
        <div className="drawer lg:drawer-open c-auto">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col gap-3  md:z-auto">
            <label htmlFor="my-drawer-2" className="drawer-button lg:hidden text-xl ml-8 mt-8 text-black"><AiOutlineMenu /></label>
            {children}
          </div>

          <div className="drawer-side ">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
              {/* Sidebar content here */}
              {/* <h2 className={`${myFont.className} text-xl md:text-2xl text-center`}><Link href="/">The Universal News</Link></h2> */}
              {
                navData.map(nav => <li key={nav.path}><Link href={nav.path}>{nav.title}</Link></li>)
              }
              <div className="divider"></div>
              {
                generalSidebar.map(nav => <li key={nav.path}><Link href={nav.path}>{nav.title}</Link></li>)
              }

            </ul>

          </div>
        </div>
      </Providers>
      <Toaster />
    </div>
  )
}
export default Dashboard;