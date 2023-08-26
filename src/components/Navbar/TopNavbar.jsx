"use client"
import React from 'react';
import { AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai';
import Link from 'next/link';
import useAuth from '@/hooks/useAuth';
import { toast } from 'react-hot-toast';
import { usePathname, useRouter } from 'next/navigation';
import localFont from 'next/font/local';
import { navData } from '@/data/navData';
import { PiHamburger } from 'react-icons/pi';
const myFont = localFont({ src: "./Engravers' Old English.woff2" });

const TopNavbar = () => {
    const { user, logout } = useAuth();
    const { uid, displayName, photoURL } = user || {};
    const { replace } = useRouter();
    const pathName = usePathname();
    // console.log(pathName);
    // console.log(pathName.split("/")[2].toUpperCase());
    const handleLogout = async () => {
        const toastId = toast.loading("Loading...");
        try {
            await logout();
            const res = await fetch("/api/auth/logout", {
                method: "POST",
            });
            await res.json();
            if (path.includes("/dashboard") || path.includes("/profile")) {
                replace(`/login?redirectUrl=${path}`);
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
    return (
        <div className=' px-3 md:px-0 '>
            <div className='container mx-auto flex items-center justify-between py-2'>
                <div className='flex justify-between items-center gap-2 text-lg'>
                    {/* <h1><AiOutlineMenu /></h1> */}
                    <div className="">
                        <div className="dropdown">
                            <label tabIndex={0} className="text-md">
                                <PiHamburger />
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 border shadow bg-base-100 rounded-box w-30 ">
                                {
                                    navData.map(({ path, title }) => (
                                        <Link key={title} href={path}><li className="text-xs my-1">{title}</li></Link>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>

                    {/* search menu  */}
                    <h1 className='text-md'><AiOutlineSearch /></h1>

                </div>
                {
                    pathName !== '/' && <h2 className={`${myFont.className} text-2xl md:text-3xl`}><Link href="/">The Universal News</Link></h2>
                }
                <div className='flex justify-between items-center gap-2 text-md '>
                    <Link href="/subscription"><button className='bg-cyan-500 rounded px-2 py-1 text-white hidden md:block'>Subscribe</button></Link>
                    {
                        uid ? <button onClick={handleLogout} className='bg-cyan-500 rounded px-2 py-1 text-white'>Logout</button>
                            :
                            <Link href="/login"><button className='bg-cyan-500 rounded px-2 py-1 text-white'>Login</button></Link>
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
