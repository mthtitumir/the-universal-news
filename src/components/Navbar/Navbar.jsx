import Marquee from "react-fast-marquee";

const Navbar = () => {
    return (
        <div className="bg-white">
            <div className="text-center">
                <h2 className="text-2xl mt-5">The Universal News</h2>
                <p className="text-xs">PlanetWatch: Tracking the Global Heatwave Crisis</p>
            </div>

            <div className=" bg-base-100 items-center">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
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
                            <li>Travel</li>
                            <li>Magazine</li>
                            <li>Cooking</li>
                            <li>Games</li>
                            <li>Prod Cast</li>
                            <li> TV Show</li>
                        </ul>
                    </div>
                </div>
                <div className="pl-6 hidden lg:flex border-b-4 border-gray-500">
                    <ul className="menu menu-horizontal px-1">
                        <li className=" px-3">World</li>
                        <li className=" px-3">US</li>
                        <li className=" px-3">Politics</li>
                        <li className=" px-3">Business</li>
                        <li className=" px-3">Opinion</li>
                        <li className=" px-3">Science</li>
                        <li className=" px-3">Health</li>
                        <li className=" px-3">Books</li>
                        <li className=" px-3">Arts</li>
                        <li className=" px-3">Style</li>
                        <li className=" px-3">Food</li>
                        <li className=" px-3">Travel</li>
                        <li className=" px-3">Magazine</li>
                        <li className=" px-3">Cooking</li>
                        <li className=" px-3">Games</li>
                        <li className=" px-3">Prod Cast</li>
                        <li className=" px-3"> TV Show</li>
                    </ul>
                </div>

            </div>

            <div className='flex justify-center items-center mx-20 my-10 bg-slate-100 rounded-sm p-2'>
                    <button className="py-3 px-4 bg-teal-600 text-white">Latest</button>
                    <Marquee className="text-red-600 px-2" speed={100}>
                        In a shocking turn of events, an unprecedented heatwave is currently engulfing regions across multiple continents, setting new temperature records and raising concerns about the escalating impacts of climate change. Reports are pouring in of scorching temperatures exceeding historical averages by several degrees, with major cities grappling to provide relief to their residents. Meteorologists are attributing the heatwave to a confluence of climate patterns, warning that extreme weather events like this could become more frequent without urgent global action. Authorities are urging citizens to take precautions, stay hydrated, and avoid outdoor activities during peak heat hours. The situation is evolving rapidly, and experts are closely monitoring the development of this extraordinary climate event. Stay tuned for updates on this unfolding crisis.
                    </Marquee>
            </div>





        </div>

    );
};

export default Navbar;