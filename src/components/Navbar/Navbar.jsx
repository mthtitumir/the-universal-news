'use client'
import LatestMarque from "../miniComponents/LatestMarque";
import { PiHamburger } from "react-icons/pi";
import localFont from 'next/font/local'
import Link from "next/link";
import { navData } from "@/data/navData";
import RendomPrice from "../RendomPrice/RendomPrice";


const myFont = localFont({ src: "./Engravers' Old English.woff2" });

const Navbar = () => {

    return (
        <div className="container mx-auto">
            <div className="text-center">
                <Link href="/"><h2 className={`${myFont.className} text-6xl mt-5`}>The Universal News</h2></Link>
                <p className="text-sm mt-3">Breaking Borders, Breaking News: Where the World Comes to Know</p>
            </div>
            <div className='flex gap-7 float-right mb-8'>
            <RendomPrice />
             <button>vew all</button>
             </div>
            <div className="">
           
                <div className="md:hidden">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost md:hidden">
                            <PiHamburger />
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                navData.map(({ path, title }) => (
                                    <Link key={title} href={path}><li>{title}</li></Link>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div className="hidden md:block my-3">
                    <ul className="flex justify-between">
                        {
                            navData.map(({ path, title }) => (
                                <Link key={title} href={path}><li>{title}</li></Link>
                            ))
                        }
                    </ul>
                </div>


                {/* double-divider */}
                <div className="flex flex-col gap-[2px]">
                    <div className="bg-gray-300 h-[1px]"></div>
                    <div className="bg-gray-300 h-[1px]"></div>
                </div>

            </div>
            <LatestMarque />
        </div>

    );
};

export default Navbar;