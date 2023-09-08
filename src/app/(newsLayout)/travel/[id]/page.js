"use client"
import React, { useRef, useState } from 'react';
import data from '../../../../utils/travel.json'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';
import NewsCardFour from '@/components/newsCards/NewsCardFour';

const TravelSingleNews = ({ params }) => {
    const bookDetails = data;
    const id = params.id;
    const booksDetails = bookDetails.find(job => job.id == id);
    const { title, img, description, date, location, category, tags, likes, comments, slideImage } = booksDetails;
    const allTravelData = data.slice(1, 16);

    return (
        <div>
            <div className='relative'>
                <Swiper
                    pagination={{
                        type: 'fraction',
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="relative">
                            <Image
                                height={300}
                                width={1200}
                                src={slideImage[2]}
                                alt='travel'
                                className="h-96 w-full object-cover"
                            ></Image>
                            <div className="absolute  flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                                <div className="text-white space-y-3 lg:space-y-7 pl-4 lg:pl-28 w-3/4">
                                    <h2 className="lg:text-5xl  text-2xl font-bold">
                                        {title}
                                    </h2>
                                    <p className="text-gray-200 text-xs lg:text-base ">
                                        {description}
                                    </p>
                                    <button className="bg-[#d8eff823] rounded px-2 py-1 text-white">
                                        {location}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="relative">
                            <Image
                                height={300}
                                width={1200}
                                src={slideImage[1]}
                                alt='travel'
                                className="h-96 w-full object-cover"
                            ></Image>
                            <div className="absolute  flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                                <div className="text-white space-y-3 lg:space-y-7 pl-4 lg:pl-28 w-3/4">
                                    <h2 className="lg:text-5xl  text-2xl font-bold">
                                        {title}
                                    </h2>
                                    <p className="text-gray-200 text-xs lg:text-base ">
                                        {description}
                                    </p>
                                    <button className="bg-[#d8eff823] rounded px-2 py-1 text-white">
                                        {location}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="relative">
                            <Image
                                height={300}
                                width={1200}
                                src={slideImage[0]}
                                alt='travel'
                                className="h-96 w-full object-cover"
                            ></Image>
                            <div className="absolute  flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                                <div className="text-white space-y-3 lg:space-y-7 pl-4 lg:pl-28 w-3/4">
                                    <h2 className="lg:text-5xl  text-2xl font-bold">
                                        {title}
                                    </h2>
                                    <p className="text-gray-200 text-xs lg:text-base ">
                                        {description}
                                    </p>
                                    <button className="bg-[#d8eff823] rounded px-2 py-1 text-white">
                                        {location}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>

            <div className="my-16 ">
                <h1 className='text-4xl font-bold mt-14 mb-4 capitalize text-center'>About Place</h1>
                <div className='grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-2 w-[80%] mx-auto mt-10'>
                    <div>
                        <Image
                            height={300}
                            width={1200}
                            src={img}
                            alt='travel'
                        ></Image>
                    </div>
                    <div className='w-full'>
                        <h2 className="card-title">{title}</h2>
                        <p>{description.repeat(5).length > 500 ? description.repeat(5).split(0, 501) : description.repeat(5)}</p>
                        <div className='flex items-center gap-5 capitalize my-3'>
                            <p className='px-4 py-1 bg-cyan-100 rounded'>{tags[0]}</p>
                            <p className='px-4 py-1 bg-cyan-100 rounded'>{tags[1]}</p>
                            <p className='px-4 py-1 bg-cyan-100 rounded'>{tags[2]}</p>
                        </div>
                        <p><span className='font-semibold'>{likes}</span> People Like This Place</p>
                        <p className='mt-1'>Publish Date: <span className='font-semibold'>{date}</span></p>
                    </div>
                </div>
            </div>


            <h2 className='text-center text-3xl font-semibold my-9 mt-20'>Suggested Place</h2>
            <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {
                    allTravelData.map(item => <NewsCardFour
                        key={item.id}
                        item={item}
                    ></NewsCardFour>)
                }
            </div>
        </div>
    );
};

export default TravelSingleNews;
