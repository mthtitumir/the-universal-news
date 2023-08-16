import LatestMarque from "../miniComponents/LatestMarque";
import { PiHamburger } from "react-icons/pi";
import localFont from 'next/font/local'
import Link from "next/link";
const myFont = localFont({ src: "./Engravers' Old English.woff2" });

const Navbar = () => {
    return (
        <div className="bg-white container mx-auto">
            <div className="text-center">
                <Link href="/"><h2 className={`${myFont.className} text-6xl mt-5`}>The Universal News</h2></Link>
                <p className="text-sm mt-3">Breaking Borders, Breaking News: Where the World Comes to Know</p>
            </div>

            <div className="bg-base-100 items-center">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost md:hidden">
                            <PiHamburger />
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li>World</li>
                            <li>US</li>
                            <li>Sports</li>
                            <li>Business</li>
                            <li>Opinion</li>
                            <li>Science</li>
                            <li>Health</li>
                            <li>Books</li>
                            <li>Arts</li>
                            <li>Style</li>
                            <li>Food</li>
                            <li>Food</li>
                            <li>Travel</li>
                            <li>Magazine</li>
                            <li>Cooking</li>
                            <li>Games</li>
                            <li>Prod Cast</li>
                            <li> TV Show</li>
                        </ul>
                    </div>
                </div>
                <div className="pl-6 hidden md:flex ">
                    <ul className="menu menu-horizontal px-1">
                        <li className=" px-3">World</li>
                        <li className=" px-3">US</li>
                        <li className=" px-3">Sports</li>
                        <li className=" px-3">Business</li>
                        <li className=" px-3">Opinion</li>
                        <li className=" px-3">Science</li>
                        <li className=" px-3">Health</li>
                        <li className=" px-3">Books</li>
                        <li className=" px-3">Arts</li>
                        <li className=" px-3">Style</li>
                        <li className=" px-3">Food</li>
                        <li className=" px-3">Food</li>
                        <li className=" px-3">Travel</li>
                        <li className=" px-3">Magazine</li>
                        <li className=" px-3">Cooking</li>
                        <li className=" px-3">Games</li>
                        <li className=" px-3">Prod Cast</li>
                        <li className=" px-3"> TV Show</li>
                    </ul>
                </div>
                <div className="flex flex-col gap-[2px]">
                    <div className="bg-black h-[1px]"></div>
                    <div className="bg-black h-[1px]"></div>
                </div>

            </div>
            <LatestMarque />






        </div>

    );
};

export default Navbar;