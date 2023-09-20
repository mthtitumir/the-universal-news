"use client"
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './style.css';
import { Pagination } from 'swiper/modules';
import Image from 'next/image';
import data from '../../utils/photo.json'
import Link from 'next/link';
import Headline from '../miniComponents/Headline';

const PhotoSlide = ({ text, seeMore, path }) => {
    const photos = data?.slice(0, 9);
    const breakpoints = {
        // For mobile devices (1 card)
        320: {
            slidesPerView: 1,
            spaceBetween: 10, // Adjust the spacing as needed
        },
        // For larger screens (3 cards)
        768: {
            slidesPerView: 3,
            spaceBetween: 30, // Adjust the spacing as needed
        },
    };
    return (
        <div className=''>
            <Headline headline={text} seeMore={seeMore} path={path} />
            <Swiper
                slidesPerView={4}
                spaceBetween={9}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                breakpoints={breakpoints}
                className="mySwiper res"
            >
                {photos?.map((photo) => (
                    <SwiperSlide className='res' key={photo?.id}>
                        <Link href={`/photo/${photo?.id}`}>
                            <Image
                                height={200}
                                width={500}
                                src={photo?.slideImage}
                                alt='book image '
                            ></Image>
                        </Link>
                    </SwiperSlide>


                ))}
            </Swiper>
        </div>
    );
};

export default PhotoSlide;