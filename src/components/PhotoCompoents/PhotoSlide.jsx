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

const PhotoSlide = () => {
    const photos = data.slice(0, 9)
    return (
        <div>
            <Swiper
                slidesPerView={4}
                spaceBetween={9}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper "
            >
                {photos.map((photo) => (
                    <Link key={photo.id} href={`/photo/${photo?.id}`}>
                        <SwiperSlide>
                            <Image
                                height={200}
                                width={500}
                                src={photo?.slideImage}
                                alt='book image '
                            ></Image>
                        </SwiperSlide>
                    </Link>


                ))}
            </Swiper>
        </div>
    );
};

export default PhotoSlide;