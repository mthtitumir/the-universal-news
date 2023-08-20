import React from 'react';
import Image from 'next/image';
import Link from "next/link";
import localFont from 'next/font/local'


const myFont = localFont({ src: "../Navbar/Engravers' Old English.woff2" });


const Subscribe = () => {
    return (
        <div className='sm:flex-row md:flex items-center gap-10 sm:px-28 mx-auto bg-white '>

            <div className='sm:mb-6'>
                <Link href="/"><h2 className={`${myFont.className} text-3xl mt-5`}>The Universal News</h2></Link>
                <h2 className='text-slate-950 text-5xl text-center mb-7 mt-9'>Gain unlimited access <br />to all of The Times.</h2>

                <div>
                    <p className='font-semibold text-slate-950 text-center mb-3'>Welcome offer</p>

                    <form className=''>
                        <div className='flex gap-3 border-y border-gray-300 py-3'>
                            <input type="radio" id="week" name="subscribe" />
                            <div>
                                <label className='font-semibold text-slate-950'><span className='text-gray-500 font-semibold  line-through '>$3</span> $0.25/week</label><br />
                                <small className='text-sm text-gray-500'>Billed as $1 every 4 weeks for the first year.</small>
                            </div>
                        </div>

                        <div className='flex gap-3 border-y border-gray-300 py-3'>
                            <input type="radio" id="week" name="subscribe" />
                            <div>
                                <label className='font-semibold text-slate-950'><span className='text-gray-500 font-semibold  line-through '> $90</span> $10/year</label><br />
                                <small className='text-sm text-gray-500'>Billed once for the first year.</small>
                            </div>
                        </div>
                        <button
                            type="button"
                            className="btn bg-slate-950 text-white hover:text-black rounded w-full mt-4"

                        >Subscribe Now </button>
                    </form>
                    <p className='font-semibold text-slate-950 text-center mt-2'>Cancel or pause anytime.</p>

                    <div className='flex gap-3 justify-center mt-2'>
                        <Image
                            height={100}
                            width={80}
                            src="https://i.ibb.co/SKjk90z/Pay-Pal-2023-Logo.jpg"
                            alt='Ad'
                            className='border px-3'
                        >
                        </Image>
                        <Image
                            height={100}
                            width={50}
                            src="https://i.ibb.co/Db1Hfqh/Screenshot-2023-08-21-030201.png"
                            alt='Ad'
                            className='border rounded '
                        >
                        </Image>
                    </div>
                </div>
                {/* <div>
                    <p className='text-stone-950 text-xs py-2 border-y mt-16 mb-3 w-3/4'>
                        All Access includes News, plus Games, Cooking, Wirecutter and The Athletic.
                    </p>
                    <p className='text-gray-500 text-xs w-3/4'>
                        Offer for a New York Times All Access subscription; current subscribers not eligible. Subscription excludes print edition. For a monthly subscription, your payment method will automatically be charged in advance the introductory rate every 4 weeks for 1 year, and after 1 year the standard rate every 4 weeks. For an annual subscription, your payment method will automatically be charged in advance the introductory rate for 1 year, and after 1 year the standard rate once yearly. Your subscription will continue until you cancel. Cancellation takes effect at the end of your current billing period. Taxes may apply. Offer terms are subject to change. Some benefits, such as access to Wordle, may be available without a subscription.
                    </p>
                </div> */}
            </div>

            {/* image */}
            <div className='bg-orange-100'>
                <Image
                    height={1400}
                    width={500}
                    src="https://i.ibb.co/0B8kXYH/v2-removebg-preview.png"
                    alt='Ad'
                    className='md:py-44 ml-5'
                >
                </Image>
            </div>

        </div>
    );
};

export default Subscribe;