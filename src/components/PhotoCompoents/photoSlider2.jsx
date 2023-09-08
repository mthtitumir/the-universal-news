"use client";
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Image from "next/image";
import photoData from '../../utils/photo.json'


const photoSlider2 = () => {
    const photos = photoData
    return (
        <div>
            <>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    {photos.map((photo) => (
                        <SwiperSlide key={photo.id}>
                            <div className='relative text-start '>
                                <Image height="460" width="1200" src={photo?.images[0]} className='w-full' alt='banner' />
                                <div className='absolute bottom-0 p-3 bg-black bg-opacity-70 w-full'>
                                    <h1 className='text-white text-md md:text-lg whitespace-nowrap overflow-hidden hover:underline'>{photo?.title}</h1>
                                    <p className='text-white text-sm mt-2'>{photo?.captions.slice(0, 30)}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </>
        </div>
    );
};

export default photoSlider2;