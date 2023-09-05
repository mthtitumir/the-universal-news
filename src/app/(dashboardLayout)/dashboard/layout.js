"use client"
import Providers from "@/providers"
import Toaster from "@/components/Toaster"
import { AiOutlineMenu } from "react-icons/ai"
import SectionNavbar from "@/components/Navbar/SectionNavbar"
import { adminSideNavbar, reporterSideNavbar, employerSideNavbar, userSideNavbar, generalSidebar } from "@/data/dashboardSidebarData"
import NavLink from "@/components/Navbar/NavLink"
import useAuth from "@/hooks/useAuth"
import useRole from "@/hooks/useRole"
import Unauthorized from "@/components/ErrorComponents/Unauthorized"
import Spinner from "@/components/ErrorComponents/Spinner"

export const metadata = {
  title: 'Dashboard | The Universal News',
  description: 'Breaking Borders, Breaking News: Where the World Comes to Know',
}

const Dashboard = ({ children }) => {
  const { user, loading } = useAuth();
  const [role, isRoleLoading] = useRole();
  let navData;
  if(loading || isRoleLoading){
    return <Spinner />
}
  if (user && role?.toString() === "admin") {
    navData = adminSideNavbar;
  } else if (user && role?.toString() === "employer") {
    navData = employerSideNavbar;
  } else if (user && role?.toString() === "reporter") {
    navData = reporterSideNavbar;
  } else if (user && role?.toString() === "user") {
    navData = userSideNavbar;
  } else {
    return <Unauthorized />
  }

  return (
    <div>
      <Providers>
        <SectionNavbar />
        <div className="drawer lg:drawer-open c-auto">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col gap-3  md:z-auto">
            <label htmlFor="my-drawer-2" className="drawer-button lg:hidden text-xl ml-8 mt-8 text-black"><AiOutlineMenu /></label>
            {children}
          </div>

          <div className="drawer-side ">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
            <ul className=" p-4 w-48 min-h-full bg-cyan-50 border border-cyan-600 text-base-content mt-3 rounded-lg">
              {/* Sidebar content here */}
              {/* <h2 className={`${myFont.className} text-xl md:text-2xl text-center`}><Link href="/">The Universal News</Link></h2> */}
              {
                navData.map(nav => <li key={nav.path} className="mb-2 hover:underline text-black" ><NavLink exact activeClassName={"text-pink-600"} href={nav.path}>{nav.title}</NavLink></li>)
              }
              <div className="divider"></div>
              {
                generalSidebar.map(nav => <li key={nav.path} className=" mb-2 hover:underline text-black" ><NavLink exact activeClassName={"text-pink-600"} href={nav.path}>{nav.title}</NavLink></li>)
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