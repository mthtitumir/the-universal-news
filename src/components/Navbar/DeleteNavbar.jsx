"use client"
import useAuth from "@/hooks/useAuth";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { FcMenu } from "react-icons/fc";


const DeleteNavbar = () => {
    const { user, logout } = useAuth();
    const { replace, refresh } = useRouter();
  const path = usePathname();
    
    const handleLogout = async () => {
        const toastId = toast.loading("Loading...");
        try {
            await logout();
            // const res = await fetch("/api/auth/logout", {
            //     method: "POST",
            // });
            // await res.json();
            // if (path.includes("/dashboard") || path.includes("/profile")) {
            //     replace(`/login?redirectUrl=${path}`);
            // }
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
        <div className='flex justify-center w-full text-center  drop-shadow-lg'>
            <div className="bg-gray-900 container bg-opacity-30 navbar mx-auto rounded-lg border">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <FcMenu className='text-white text-xl' />
                        </label>
                        <ul tabIndex={0} className=" font-semibold menu menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-52"> 

                        </ul>
                    </div>
                    <div className='flex items-center'>
                        <Link href={"/"} className="font-bold normal-case text-xl"><span className='text-red-600'>Game</span><span className='text-cyan-600'>Tactics</span></Link>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="font-semibold menu menu-horizontal px-1">
                        
                    </ul>
                </div>
                <div className='navbar-end gap-2 items-center'>
                    {
                        user ?

                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <Image src={user.photoURL} height={50} width={50} alt="hello" />
                                    </div>
                                </label>
                                <ul tabIndex={0} className="mt-3 p-2 bg-slate-600 text-white shadow menu menu-sm dropdown-content rounded-box w-52">
                                    <li>Profile</li>
                                    <li><a>Settings</a></li>
                                    <li onClick={handleLogout}>Logout</li>
                                </ul>
                            </div>
                            :
                            <Link className='text-white pr-5' href={'/login'}>Login</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default DeleteNavbar;
