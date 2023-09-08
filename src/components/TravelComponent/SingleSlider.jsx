"use client"
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';
import data from '../../utils/travel.json'

const SingleSlider = ({ params }) => {
    const bookDetails = data;
    const id = params.id;
    const booksDetails = bookDetails.find(job => job.id == id);
    const { title, img, description, date, location, category, tags, likes, comments } = booksDetails;

    return (
        <>
            <Swiper
                pagination={{
                    type: 'fraction',
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {/* {travelData.map((travel) => ( */}
                <SwiperSlide
                    key={book.id}
                >
                    <Image
                        height={300}
                        width={1200}
                        src={booksDetails.slideImage[0]}
                        alt='travel'
                        className="h-96 w-full object-cover"
                    ></Image>
                </SwiperSlide>
                {/* ))} */}
            </Swiper>
        </>
    );
};

export default SingleSlider;

