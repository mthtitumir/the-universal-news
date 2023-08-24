import React from 'react';
import Image from 'next/image';


const Subscribe2 = () => {
    return (
        <div className=''>
            <div className='border-b-2'>
                <h2 className='text-slate-950 text-4xl  text-center my-20 '>Subscribers enjoy more with The Universal news  All Access.</h2>

                <div className='sm:flex-row md:flex items-center justify-center gap-10 sm:px-28 mx-auto mb-14'>
                    {/* image */}
                    <div>
                        <Image
                            height={1400}
                            width={500}
                            src="https://i.ibb.co/12tS7Tm/Carousel-News.jpg"
                            alt='Ad'
                        // className='md:py-44 ml-5'
                        >
                        </Image>
                    </div>

                    {/* category */}
                    <div>
                        <div className='border-l-4 border-gray-950 pl-2'>
                            <h2 className='text-3xl text-slate-950 font-semibold'>News</h2>
                            <p className='mt-1 text-base text-slate-900 font-normal'>Engage with expert reporting, including culture coverage and analysis.</p>
                        </div>
                        <div className='mt-7'>
                            <h2 className='text-3xl text-slate-950 font-semibold'>Games</h2>
                            <p className='mt-1 text-base text-slate-900 font-normal'>Unwind with Spelling Bee, Wordle, The Crossword and more. <a className='underline' href='#'>Learn more</a>  </p>
                        </div>
                        <div className='mt-7'>
                            <h2 className='text-3xl text-slate-950 font-semibold'>Cookings</h2>
                            <p className='mt-1 text-base text-slate-900 font-normal'>Enjoy delicious recipes, advice and inspiration daily. <a className='underline' href='#'>Learn more</a>  </p>
                        </div>
                        <div className='mt-7'>
                            <h2 className='text-3xl text-slate-950 font-semibold'>Wirecutter</h2>
                            <p className='mt-1 text-base text-slate-900 font-normal'>Choose products confidently with reviews and real-world testing. <a className='underline' href='#'>Learn more</a>  </p>
                        </div>
                        <div className='my-7'>
                            <h2 className='text-3xl text-slate-950 font-semibold'>The Athletic</h2>
                            <p className='mt-1 text-base text-slate-900 font-normal'>
                                Follow in-depth, personalized coverage of your favorite sports. <a className='underline' href='#'>Learn more</a>  </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* INTERESTED IN PRINT? */}
            <div className='ml-16 my-20'>
                <h2 className='text-slate-950 text-xl font-semibold'>INTERESTED IN PRINT?</h2>
                <h1 className='text-slate-950 text-3xl my-3'>Get the New York Times International paper delivered, plus the full digital experience.
                </h1>
                <p className='text-base text-slate-900 font-normal'>Subscribers receive free All Access Digital with a Home Delivery subscription. You can cancel anytime.</p>
                <button
                    type="button"
                    className="btn bg-slate-950 text-white hover:text-black rounded mt-3 px-10 "
                >Find Offers </button>
            </div>
        </div>
    );
};

export default Subscribe2;