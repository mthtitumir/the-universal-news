import React from 'react';
import logo from '../../../public/21601.png'
import Image from 'next/image'
const Footer = () => {
    return (
        <footer className="mt-10 py-5 bg-base-200">
            <div className="container mx-auto footer">
                <div>
                    <Image
                        src={logo}
                        height={20}
                        width={70}
                        alt="Picture of the author"
                    >
                    </Image>
                    <p>The Universal News</p>
                </div>
                <div>
                    <span className="font-semibold text-base">Continental</span>
                    <a className="link link-hover">Asia</a>
                    <a className="link link-hover">Australia</a>
                    <a className="link link-hover">Europe</a>
                    <a className="link link-hover">North America</a>
                </div>
                <div>
                    <span className="font-semibold text-base">Show</span>
                    <a className="link link-hover">Series</a>
                    <a className="link link-hover">Prod Cast</a>
                    <a className="link link-hover">Movies</a>
                </div>
                <div>
                    <span className="font-semibold text-base">Follow Us</span>
                    <a className="link link-hover">Facebook</a>
                    <a className="link link-hover">Twitter</a>
                    <a className="link link-hover">Instagram</a>
                </div>
                <div>
                    <span className="font-semibold text-base">Subscribe to Newsletter</span>
                    <div className="form-control w-80">
                        <label className="label">
                        </label>
                        <div className="relative">
                            <input type="text"
                                className=" py-1  border-y-2  w-full pr-16 rounded-none" />
                            <button className="py-1 mt-1 bg-indigo-950 text-white text-sm absolute top-0 right-0  ">Subscribe</button>
                        </div>
                        <label className='flex mt-5'>
                            <img className='w-24 ' src="https://i0.wp.com/www.techdigest.tv/wp-content/uploads/2021/02/get-it-on-google-play-badge.png?ssl=1" alt="" />
                            <img className='w-24 ' src="https://gotoaarhus.com/images/app-store.svg" alt="" />
                        </label>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;