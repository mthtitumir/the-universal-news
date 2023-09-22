"use client"
import { startTransition, useState } from 'react';
import { AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai';
import Link from 'next/link';
import useAuth from '@/hooks/useAuth';
import { toast } from 'react-hot-toast';
import { usePathname, useRouter } from 'next/navigation';
import { navData } from '@/data/navData';
import { myFont } from './font';
import useRole from '@/hooks/useRole';

const TopNavbar = () => {
    const { user, logout } = useAuth();
    const { uid, displayName, photoURL } = user || {};
    const [role, isRoleLoading] = useRole();
    const { replace, refresh } = useRouter();
    // const [dashboardLink, setDashboardLink] = useState("");
    const pathName = usePathname();
    // console.log(pathName);
    const handleLogout = async () => {
        const toastId = toast.loading("Loading...");
        try {
            await logout();
            const res = await fetch("/api/auth/logout", {
                method: "POST",
            });
            await res.json();
            if (pathName.includes("/dashboard") || pathName.includes("/profile")) {
                replace(`/login?redirectUrl=${pathName}`);
            }
            toast.dismiss(toastId);
            toast.success("Successfully logout!");
            startTransition(() => {
                refresh();
            });
        } catch (error) {
            toast.error("Successfully not logout!");
            toast.dismiss(toastId);
        }
    };
    let dashboardLink = "";
    if (user && role?.toLowerCase() === "admin") {
        dashboardLink = "/dashboard/admin";
    } else if (user && role?.toLowerCase() === "employer") {
        dashboardLink = "/dashboard/employer";
    } else if (user && role?.toLowerCase() === "reporter") {
        dashboardLink = "/dashboard/reporter";
    } else if (user && role?.toLowerCase() === "user") {
        dashboardLink = "/dashboard";
    } else if (user && role?.toLowerCase() === "moderator") {
        dashboardLink = "/dashboard/moderator";
    } else {
        dashboardLink = "/";
    }

    return (
        <div className={`${pathName?.includes('news') ? 'hidden' : 'block'} px-3 md:px-0 `}>
            <div className='container mx-auto flex items-center justify-between py-2'>
                <div className='flex justify-between items-center gap-2 text-lg'>
                    {/* <h1></h1> */}
                    <div className="dropdown">
                        <label tabIndex={0} className="text-md">
                            <AiOutlineMenu />
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] px-5 py-2 border shadow bg-base-100 rounded-lg w-30 ">
                            {
                                navData?.map(({ path, title }) => (
                                    <li key={title} className="text-xs my-1 hover:underline"><Link href={path}>{title}</Link></li>
                                ))
                            }
                        </ul>
                    </div>
                    {/* search menu  */}
                    <h1 className='text-md'><AiOutlineSearch /></h1>

                </div>
                {
                    pathName !== '/' && <h2 className={`${myFont.className} text-2xl md:text-3xl`}><Link href="/">The Universal News</Link></h2>
                }
                <div className='flex justify-between items-center gap-2 text-md '>
                    {
                        uid ? <>
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="">
                                    <button className='primary-btn'>Account</button>
                                </label>
                                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content border border-cyan-500 rounded-lg">
                                    <Link href={dashboardLink}> <li className=' hover:underline rounded-lg'>Dashboard</li></Link>
                                    <li className='mt-2 hover:underline rounded-lg' onClick={handleLogout}>Logout</li>
                                </ul>
                            </div></>
                            :
                            <Link href="/login"><button className='primary-btn'>Login</button></Link>
                    }
                </div>
            </div>
            {
                pathName !== '/' && <div className="flex flex-col">
                    <div className="bg-gray-300 h-[1px]"></div>
                </div>
            }

        </div>
    );
};

export default TopNavbar;