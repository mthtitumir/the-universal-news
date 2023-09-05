"use client"
import Providers from "@/providers"
import Toaster from "@/components/Toaster"
import { AiOutlineMenu } from "react-icons/ai"
import SectionNavbar from "@/components/Navbar/SectionNavbar"
import { adminSideNavbar, reporterSideNavbar, employerSideNavbar, userSideNavbar, generalSidebar } from "@/data/dashboardSidebarData"
import NavLink from "@/components/Navbar/NavLink"
import useAuth from "@/hooks/useAuth"
import useRole from "@/hooks/useRole"

export const metadata = {
  title: 'Dashboard | The Universal News',
  description: 'Breaking Borders, Breaking News: Where the World Comes to Know',
}

const Dashboard = ({ children }) => {
  const { user, loading } = useAuth();
  const [role, isRoleLoading] = useRole();
  const admin = role === "admin";
  const employer = false;
  const reporter = false;
  let navData;
  if (role === "admin") {
    navData = adminSideNavbar;
  } else if (role === "employer") {
    navData = employerSideNavbar;
  } else if (role === "reporter") {
    navData = reporterSideNavbar;
  } else {
    navData = userSideNavbar;
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
            <ul className=" p-4 w-80 min-h-full bg-base-200 border border-cyan-600 text-base-content mt-3 rounded-lg">
              {/* Sidebar content here */}
              {/* <h2 className={`${myFont.className} text-xl md:text-2xl text-center`}><Link href="/">The Universal News</Link></h2> */}
              {
                navData.map(nav => <li key={nav.path} className="mb-2 hover:underline" ><NavLink exact activeClassName={"text-cyan-600"} href={nav.path}>{nav.title}</NavLink></li>)
              }
              <div className="divider"></div>
              {
                generalSidebar.map(nav => <li key={nav.path} className=" mb-2 hover:underline" ><NavLink exact activeClassName={"text-cyan-600"} href={nav.path}>{nav.title}</NavLink></li>)
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