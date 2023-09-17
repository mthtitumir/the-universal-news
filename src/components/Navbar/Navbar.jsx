'use client'
import localFont from 'next/font/local'
import Link from "next/link";
import { navData } from "@/data/navData";
import ShareUpdate from "../miniComponents/ShareUpdate";


const myFont = localFont({ src: "./Engravers' Old English.woff2" });

const Navbar = () => {

    return (
        <div className="container mx-auto">
            <div className="text-center">
                <h2 className={`${myFont.className} text-3xl md:text-6xl mt-2`}><Link href="/">The Universal News</Link></h2>
                <p className="text-xs md:text-sm my-1">Breaking Borders | Where the World Comes to Know</p>
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
                <div className="hidden md:block my-3">
                    <ul className="flex justify-between">
                        {
                            navData.map(({ path, title }) => (
                                <Link key={title} href={path}><li className="text-sm hover:font-bold">{title}</li></Link>
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