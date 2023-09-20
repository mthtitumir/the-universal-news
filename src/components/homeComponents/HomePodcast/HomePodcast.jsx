import { myFont } from "@/components/Navbar/font";
import Link from "next/link";

const HomePodcast = () => {
    return (
        <div style={{ backgroundImage: `url("https://i.ibb.co/D781gcx/Mauve-and-White-Watercolor-Linked-In-Article-Cover-Image.png")`, backgroundSize: 'cover', backgroundPosition: 'center' }} className=' border border-cyan-500 h-56 mt-5 mb-3 rounded-lg grid md:grid-cols-2 justify-center content-center'>
            <div className="flex justify-center items-center">
                <div className="text-center ">
                    <div>
                        <h1 className="text-2xl md:text-3xl text-white font-semibold ">Listen Tate Podcasts</h1>
                        <p className="text-white tracking-wider">on <span className={`${myFont.className} text-xl`}>The Universal News</span></p>
                    </div>
                    <div className="flex gap-3 items-center justify-center mt-3">
                        <Link href={'/podcast'}><button className="secondary-btn hover:scale-105 duration-500">Listen Now</button></Link>    
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
    );
};

export default HomePodcast;