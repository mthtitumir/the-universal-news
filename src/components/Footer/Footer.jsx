import logo from '../../../public/21601.png'
import Image from 'next/image'
import { myFont } from '../Navbar/font';
import { navData } from '@/data/navData';
import Link from 'next/link';
const Footer = () => {
    return (
        <footer className="mt-10 py-5 border-t">
            <div className="c-auto grid grid-cols-10  px-3 md:px-0">
                <div className='col-span-3'>
                    <Image
                        src={logo}
                        height={50}
                        width={70}
                        alt="Picture of the author"
                    >
                    </Image>
                    <p className={`${myFont.className} text-3xl`}>The Universal News</p>
                </div>

                <div className='col-span-7'>
                    <div className='flex justify-between'>
                        <div>
                            {
                                navData?.slice(0, 5).map(data => <Link key={data?.path} className='hover:font-semibold text-lg' href={data?.path}><h1>{data?.title}</h1></Link>)
                            }
                        </div>
                        <div>
                            {
                                navData?.slice(5, 10).map(data => <Link key={data?.path} className='hover:font-semibold text-lg' href={data?.path}><h1>{data?.title}</h1></Link>)
                            }
                        </div>
                        <div>
                            {
                                navData?.slice(10, 15).map(data => <Link key={data?.path} className='hover:font-semibold text-lg' href={data?.path}><h1>{data?.title}</h1></Link>)
                            }
                        </div>
                        
                    </div>
                </div>
            </div>
            <p className='text-center mt-8 mb-3'>Copyright © 2023 - All right reserved by <span className="font-bold">Team Code Wolves</span></p>
        </footer>
    );
};

export default Footer;