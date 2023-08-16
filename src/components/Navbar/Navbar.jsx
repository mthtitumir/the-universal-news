import LatestMarque from "../miniComponents/LatestMarque";
import { PiHamburger } from "react-icons/pi";
import localFont from 'next/font/local'
import Link from "next/link";
const myFont = localFont({ src: "./Engravers' Old English.woff2" });

const Navbar = () => {
    return (
        <div className="container mx-auto">
            <div className="text-center">
                <Link href="/"><h2 className={`${myFont.className} text-6xl mt-5`}>The Universal News</h2></Link>
                <p className="text-sm mt-3">Breaking Borders, Breaking News: Where the World Comes to Know</p>
            </div>

            <div className="">
                <div className="md:hidden">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost md:hidden">
                            <PiHamburger />
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li>World</li>
                            <li>US</li>
                            <li>Politics</li>
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
                <div className="hidden md:block mt-3">
                    <ul className="flex justify-between">
                        <li className="">World</li>
                        <li className="">US</li>
                        <li className="">Politics</li>
                        <li className="">Business</li>
                        <li className="">Opinion</li>
                        <li className="">Science</li>
                        <li className="">Health</li>
                        <li className="">Books</li>
                        <li className="">Arts</li>
                        <li className="">Style</li>
                        <li className="">Food</li>
                        <li className="">Food</li>
                        <li className="">Travel</li>
                        <li className="">Magazine</li>
                        <li className="">Cooking</li>
                        <li className="">Games</li>
                        <li className="">Prod Cast</li>
                        <li className=""> TV Show</li>
                        <li className=""> TV Show</li>
                    </ul>
                </div>


                {/* double-divider */}
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