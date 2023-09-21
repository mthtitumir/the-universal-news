'use client'
import localFont from 'next/font/local'
import Link from "next/link";
import { navData } from "@/data/navData";
import ShareUpdate from "../miniComponents/ShareUpdate";
import moment from 'moment/moment';
import { useEffect, useState } from 'react';

const myFont = localFont({ src: "./Engravers' Old English.woff2" });

const Navbar = () => {
    const [currentTime, setCurrentTime] = useState(moment().format('MMMM Do YYYY'));

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(moment().format('MMMM Do YYYY, h:mm:ss a'));
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="container mx-auto">
            <div className="text-center">
                <h2 className={`${myFont.className} text-3xl md:text-6xl mt-2`}><Link href="/">The Universal News</Link></h2>
                <p className="text-xs md:text-sm my-1">Breaking Borders | Where the World Comes to Know</p>
            </div>
            <div className="flex justify-center md:justify-between items-center px-3 md:px-0 mx-auto md:mx-0 mb-2">
                <div className="text-xs">
                    <h1>{currentTime}</h1>
                </div>
                <div className='md:flex gap-3 items-center text-xs hidden'>
                    <ShareUpdate />
                    <Link href='business/share-market'>View All</Link>
                </div>
            </div>
            <div className="">
                <div className="hidden md:block my-3">
                    <ul className="flex justify-between">
                        {
                            navData.map(({ path, title }) => (
                                <Link key={title} href={path}><li className="text-sm hover:font-semibold">{title}</li></Link>
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