import { myFont } from "@/components/Navbar/font";
import Link from "next/link";

const HomeBookBanner = ({text, text2}) => {
    return (
        <div style={{ backgroundImage: `url("https://i.ibb.co/KzR0dk6/book-Banner.jpg")`, backgroundSize: 'cover', backgroundPosition: 'center' }} className=' border border-cyan-500 h-48 my-3 rounded-lg flex justify-center items-center'>
            <div className="flex justify-center items-center">
                <div className="text-center ">
                    <div>
                        <h1 className="text-2xl md:text-3xl text-white font-semibold uppercase">{text2} Books</h1>
                        <p className="text-white tracking-wider"><span className={`${myFont.className} text-xl`}>The Universal News</span></p>
                    </div>
                    {
                        text !== "booksPage" &&
                        <div className="flex gap-3 items-center justify-center mt-3">
                            <Link href={'/jobs'}><button className="secondary-btn hover:scale-105 duration-500">Book Updates</button></Link>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default HomeBookBanner;