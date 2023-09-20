import { myFont } from "@/components/Navbar/font";
import Link from "next/link";

const HomeJobBanner = ({ text }) => {
    return (
        <div style={{ backgroundImage: `url("https://i.ibb.co/bvngMTk/Gray-And-Black-Simple-Personal-Linked-In-Banner.png")`, backgroundSize: 'cover', backgroundPosition: 'center' }} className=' border border-cyan-500 h-48 my-3 rounded-lg grid md:grid-cols-2 justify-center content-center'>
            <div className="flex justify-center items-center">
                <div className="text-center ">
                    <div>
                        <h1 className="text-2xl md:text-3xl text-white font-semibold ">Get Hired Today</h1>
                        <p className="text-white tracking-wider">with <span className={`${myFont.className} text-xl`}>The Universal News</span></p>
                    </div>
                    {
                        text !== "jobsPage" &&
                        <div className="flex gap-3 items-center justify-center mt-3">
                            <Link href={'/jobs'}><button className="secondary-btn hover:scale-105 duration-500">Apply Jobs</button></Link>
                            <Link href={'/jobPostPayment'}><button className="secondary-btn hover:scale-105 duration-500">Become Employer</button></Link>
                        </div>
                    }
                </div>
            </div>
            <div>

            </div>
        </div>
    );
};

export default HomeJobBanner;