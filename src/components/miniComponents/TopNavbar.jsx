"use client"
import React from 'react';
import { AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai';
import Link from 'next/link';
import useAuth from '@/hooks/useAuth';
import { toast } from 'react-hot-toast';
import { usePathname } from 'next/navigation';
const TopNavbar = () => {
    const { user, logout } = useAuth();
    const path = usePathname();
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
    console.log(user);
    return (
        <div className=' mt-5 '>
            <div className='container mx-auto flex items-center justify-between'>
                <div className='flex justify-between items-center gap-2 text-lg'>
                    <AiOutlineMenu />
                    <AiOutlineSearch />
                </div>
                <div className='flex justify-between items-center gap-2 text-md '>
                    <h1>US</h1>
                    <h1>Spanish</h1>
                    <h1>French</h1>
                </div>
                <div className='flex justify-between items-center gap-2 text-md '>
                    <Link href="/"><button className='bg-cyan-500 rounded px-2 py-1 text-white'>Subscribe</button></Link>
                    {
                        user ? <button onClick={handleLogout} className='bg-cyan-500 rounded px-2 py-1 text-white'>Account</button>
                            :
                            <Link href="/login"><button className='bg-cyan-500 rounded px-2 py-1 text-white'>Login</button></Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default TopNavbar;