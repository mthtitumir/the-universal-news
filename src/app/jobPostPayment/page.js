import React from 'react';
import Image from 'next/image';
import Link from "next/link";
import localFont from 'next/font/local'

const JobPost = () => {
    return (
        <div className='  md:flex justify-center items-center bg-orange-50'>

            <div className='md:w-[50%] md:bg-white'>
                <div className='mx-4 md:mx-40'>
                    {/* <h2 className={`${myFont.className} text-3xl mt-5`}><Link href="/">The Universal News</Link></h2> */}
                    <h2 className='text-slate-950 text-4xl my-14'>Post Your Jobs</h2>

                    <div>
                        <p className=' text-slate-950  mb-3'>Welcome offer</p>

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
                                    <small className='text-sm text-gray-500'>Billed once for the first years.</small>
                                </div>
                            </div>
                            <button
                                type="button"
                                className="btn bg-slate-950 text-white hover:text-black rounded w-full mt-4"

                            >Post Job</button>
                        </form>
                        <p className='font-semibold text-slate-950 text-center mt-2'>Cancel or pause anytime.</p>
                        <div className='flex gap-3 justify-center mt-2 mb-14'>
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


                </div>

            </div>

            {/* image */}
            <div className=' md:w-[50%]'>
                <Image
                    height={1400}
                    width={1400}
                    src="https://i.ibb.co/0B8kXYH/v2-removebg-preview.png"
                    alt='Ad'
                    className='md:py-44 ml-5'
                >
                </Image>
            </div>

        </div>
    );
};

export default JobPost;