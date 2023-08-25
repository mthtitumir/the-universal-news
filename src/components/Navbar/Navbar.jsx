'use client'
import { PiHamburger } from "react-icons/pi";
import localFont from 'next/font/local'
import Link from "next/link";
import { navData } from "@/data/navData";
import ShareUpdate from "../miniComponents/ShareUpdate";


const myFont = localFont({ src: "./Engravers' Old English.woff2" });

const Navbar = () => {

    return (
        <div className="container mx-auto">
            <div className="text-center">
                <Link href="/"><h2 className={`${myFont.className} text-3xl md:text-6xl mt-2`}>The Universal News</h2></Link>
                <p className="text-sm mt-3">Breaking Borders, Breaking News: Where the World Comes to Know</p>
            </div>
            <div className="flex justify-between px-3 md:px-0">
                <div className="hidden md:block">
                    <h1></h1>
                </div>
                <div className='flex gap-3 items-center text-xs mx-auto md:mx-0'>
                    <ShareUpdate />
                    <Link href='business/share-market'>View All</Link>
                </div>
            </div>
            <div className="">
                {/* <div className="md:hidden">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost md:hidden">
                            <PiHamburger />
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                navData.map(({ path, title }) => (
                                    <Link key={title} href={path}><li className="text-xs">{title}</li></Link>
                                ))
                            }
                        </ul>
                    </div>
                </div> */}
                <div className="hidden md:block my-3">
                    <ul className="flex justify-between">
                        {
                            navData.map(({ path, title }) => (
                                <Link key={title} href={path}><li className="text-xs">{title}</li></Link>
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
        </div>

    );
};

export default Navbar;