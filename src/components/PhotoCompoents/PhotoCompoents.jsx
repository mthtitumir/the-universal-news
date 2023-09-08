import React from 'react';
import NewsCardOne from '../newsCards/NewsCardOne';
import news from '../../utils/news.json'
import PhotoSlide from './PhotoSlide';
import PhotoSlider2 from './photoSlider2';
import NewsCardThree from '../newsCards/NewsCardThree';
import photoData from '../../utils/photo.json'
import Image from 'next/image';
import Link from 'next/link';

const PhotoCompoents = () => {
    const photo = photoData.slice(0, 1);
    const photo2 = photoData;
    const photo3 = photoData.slice(1, 2);
    const photo4 = photoData.slice(2, 3);
    const photos = news.slice(0, 5);

    return (
        <div>
            <h1 className='text-4xl font-bold  text-cyan-400 m-8'>Photos</h1>

            {/* 1st section */}

            <div className='flex-row md:flex gap-8 my-7 w-[100%] border-b-2 border-gray-300 pb-6'>
                <div className="card1 order-first md:order-none md:col-span-5 flex flex-col gap-3 overflow-y-scroll overflow-x-hidden md:w-[70%] ">
                    {photo.map((item) => (
                        <div key={item.id} className='relative'>
                            <Link href={`/photo/${item?.id}`}>
                                <Image height="460" width="526" src={item?.img} className='w-full' alt='banner' />
                            </Link>
                            <div className='absolute bottom-0 p-3 bg-black bg-opacity-70 w-full'>
                                <p className='text-white text-sm mt-2'>{item?.captions.slice(0, 30)}</p>
                            </div>
                        </div>
                    ))}
                    {photo.map((item) => (
                        <h1
                            key={item.id}
                            className='text-4xl font-semibold my-3'>{item.title}
                        </h1>
                    ))}
                    {photo.map((item) => (
                        <p key={item.id} className='text-base text-gray-500'>{item.published_date}</p>
                    ))}
                </div>

                <div className="card1 md:col-span-3 overflow-y-scroll overflow-x-hidden md:w-[30%]">
                    {photo2.map((item) => (
                        <NewsCardOne key={item.id} item={item}></NewsCardOne>
                    ))}
                </div>
            </div>

            {/* Second Section */}
            <div className='border-b-2 border-gray-300 pb-3'>
                <h1 className='text-2xl font-bold mt-14 mb-4 capitalize'>a glimpse</h1>
                <PhotoSlide></PhotoSlide>
            </div>

            {/* 3rd section */}
            <h1 className='text-2xl font-bold mt-14 mb-4 capitalize'>Best Clicked Photos</h1>
            <div className='flex-row md:flex gap-3 my-7 mb-9 w-[100%] border-b-2 border-gray-300 pb-4'>
                <div className="card1 order-first md:order-none md:col-span-5 flex flex-col gap-3 overflow-y-scroll overflow-x-hidden md:w-[60%] ">
                    {photo3.map((item) => (
                        <div key={item.id} className='relative '>
                            <Image height="460" width="526" src={item?.images[0]} className='w-full' alt='banner' />
                            <div className='absolute bottom-0 p-2 bg-black bg-opacity-70 w-full'>
                                <h1 className='text-white text-md md:text-lg whitespace-nowrap overflow-hidden hover:underline'>{item?.title}</h1>
                                <p className='text-white text-sm mt-2'>{item?.published_date}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className='md:w-[40%]'>
                    <div className="card1 order-first md:order-none md:col-span-5 flex flex-col gap-3 overflow-y-scroll overflow-x-hidden   sm:mt-4 md:mt-0">
                        {photo3.map((item) => (
                            <div key={item.id} className='relative '>
                                <Image height="460" width="526" src={item?.images[1]} className='w-full' alt='banner' />
                                <div className='absolute bottom-0 p-2 bg-black bg-opacity-70 w-full'>
                                    <h1 className='text-white text-md md:text-lg whitespace-nowrap overflow-hidden hover:underline'>{item?.title}</h1>
                                    <p className='text-white text-sm mt-2'>{item?.published_date}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className='flex gap-3 mt-3 '>
                        <div className="card1 order-first md:order-none md:col-span-5 flex flex-col gap-3 overflow-y-scroll overflow-x-hidden  ">
                            {photo4.map((item) => (
                                <div key={item.id} className='relative '>
                                    <Image height="460" width="526" src={item?.images[0]} className='w-full' alt='banner' />
                                    <div className='absolute bottom-0 p-2 bg-black bg-opacity-70 w-full'>
                                        <h1 className='text-white text-md md:text-lg whitespace-nowrap overflow-hidden hover:underline'>{item?.title}</h1>
                                        <p className='text-white text-sm mt-2'>{item?.published_date}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="card1 order-first md:order-none md:col-span-5 flex flex-col gap-3 overflow-y-scroll overflow-x-hidden  ">
                            {photo4.map((item) => (
                                <div key={item.id} className='relative '>
                                    <Image height="460" width="526" src={item?.images[1]} className='w-full' alt='banner' />
                                    <div className='absolute bottom-0 p-2 bg-black bg-opacity-70 w-full'>
                                        <h1 className='text-white text-md md:text-lg whitespace-nowrap overflow-hidden hover:underline'>{item?.title}</h1>
                                        <p className='text-white text-sm mt-2'>{item?.published_date}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* 4th section */}
            <h1 className='text-2xl font-bold mt-14 mb-4 capitalize'>Worlds Best Photos</h1>
            <PhotoSlider2></PhotoSlider2>

            {/* 5th section */}
            <div className='border-t-2 border-gray-300 mt-4 pt-8'>
                <div className='md:w-[800px] mx-auto'>
                    <div className="card1 md:col-span-4 flex flex-col gap-3 overflow-y-scroll overflow-x-hidden ">
                        {photos.map((item) => (
                            <NewsCardThree key={item.id} item={item}></NewsCardThree>
                        ))}
                    </div>
                </div>
            </div>


        </div>
    );
};

export default PhotoCompoents;