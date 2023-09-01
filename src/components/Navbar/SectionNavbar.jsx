"use client"
import React from 'react';
import { AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai';
import Link from 'next/link';
import useAuth from '@/hooks/useAuth';
import { usePathname } from 'next/navigation';
import { navData } from '@/data/navData';
import { myFont } from './font';

const SectionNavbar = ({}) => {
    const { user, logout } = useAuth();
    const { uid, displayName, photoURL } = user || {};
    const pathName = usePathname();
    return (
        <div className=' px-3 md:px-0 '>
            <div className='c-auto flex items-center justify-between py-2'>
                <div className='flex justify-between items-center gap-2 text-lg'>
                    {/* <h1></h1> */}
                    <div className="dropdown">
                        <label tabIndex={0} className="text-md">
                            <AiOutlineMenu />
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] px-5 py-2 border shadow bg-base-100 rounded-lg w-30 ">
                            {
                                navData.map(({ path, title }) => (
                                    <li key={title} className="text-xs my-1 hover:underline"><Link href={path}>{title}</Link></li>
                                ))
                            }
                        </ul>
                    </div>

                    {/* search menu  */}
                    <h1 className='text-md'><AiOutlineSearch /></h1>

                </div>
                <h2 className={`${myFont.className} text-2xl md:text-3xl`}><Link href="/">{pathName.slice(1)} | The Universal News</Link></h2>
                <div className='flex justify-between items-center gap-2 text-md '>
                    <Link href="/subscription"><button className='bg-cyan-500 rounded px-2 py-1 text-white hidden md:block'>Subscribe</button></Link>
                    {/* {
                        uid ? <Link href="/dashboard"><button className='bg-cyan-500 rounded px-2 py-1 text-white'>Account</button></Link>
                            :
                            <Link href="/login"><button className='bg-cyan-500 rounded px-2 py-1 text-white'>Login</button></Link>
                    } */}
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

export default SectionNavbar;
