"use client"
import React from 'react';
import { AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai';
import Link from 'next/link';
import useAuth from '@/hooks/useAuth';
import { usePathname } from 'next/navigation';
import { navData } from '@/data/navData';
import { myFont } from './font';
import Image from 'next/image';

const SectionNavbar = ({ }) => {
    const { user, logout } = useAuth();
    const { uid, displayName, photoURL } = user || {};
    const pathName = usePathname();
    // console.log(pathName);
    // console.log(pathName.split('/')[1]);
    return (
        <div className=' px-3 md:px-0 '>
            <div className='c-auto flex items-center justify-between py-2'>
                <div className='flex justify-between items-center gap-10 text-lg'>
                    {/* left side dropdown menu  */}
                    <div className="dropdown">
                        <label tabIndex={0} className="text-md">
                            <AiOutlineMenu />
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1000] px-5 py-2 border shadow bg-base-100 rounded-lg w-30 ">
                            {
                                navData.map(({ path, title }) => (
                                    <li key={title} className="text-xs my-1 hover:underline"><Link href={path}>{title}</Link></li>
                                ))
                            }
                        </ul>
                    </div>
                    <h2 className='text-2xl md:text-3xl'><Link href="/"> <span className={`${myFont.className}`}>The Universal News |</span> </Link> {pathName?.split('/')[1].toUpperCase()}</h2>
                </div>
                <div className='flex justify-between items-center gap-2 text-md '>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <Image height={40} width={40} alt='profile_image' src={user ? photoURL : "https://i.ibb.co/3Mrx6Fg/blank-profile.webp"} />
                            </div>
                        </label>
                        <ul tabIndex={0} className="mt-3 z-[1000] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-lg">
                            <li><Link href={'/dashboard'}>Profile</Link></li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
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
