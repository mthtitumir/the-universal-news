"use client"
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import data from '../../../utils/book.json'
import Image from 'next/image';

const Author = () => {
    const bookData = data

    return (
        <>
            <h2 className='text-3xl font-semibold mt-16 mb-5'>Authors</h2>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {bookData.map((author) => (
                    <SwiperSlide
                        key={author.id}
                        className='w-3/4 py-6'
                    >
                        <div>
                            <Image
                                height={100}
                                width={130}
                                src={author.authorImage}
                                alt='Author image'
                                className=' rounded-3xl'
                            ></Image>
                            <p className='text-xl mt-2  text-gray-600'>{author.authorName}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

export default Author;
