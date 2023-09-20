"use client"
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Image from 'next/image';
import Headline from '@/components/miniComponents/Headline';

const Author = ({authorData}) => {
    const bookData = [];
    const breakpoints = {
        // For mobile devices (1 card)
        320: {
            slidesPerView: 2,
            spaceBetween: 10, // Adjust the spacing as needed
        },
        // For larger screens (3 cards)
        768: {
            slidesPerView: 4,
            spaceBetween: 30, // Adjust the spacing as needed
        },
    };

    return (
        <>
            <Headline headline={"Authors"} path={""} />
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                // pagination={{
                //     clickable: true,
                // }}
                modules={[Pagination]}
                breakpoints={breakpoints}
                className="mySwiper"
            >
                {
                authorData?.map((author) => (
                    <SwiperSlide
                        key={author?.authorImage}
                        className='w-3/4 '
                    >
                        <div>
                            <Image
                                height={100}
                                width={130}
                                src={author?.authorImage}
                                alt='Author image'
                                className=' rounded-3xl'
                            ></Image>
                            <p className=' md:text-xl mt-2  text-gray-600'>{author?.authorName}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

export default Author;
