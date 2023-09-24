"use client"
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './style.css';
import { Pagination } from 'swiper/modules';
import Image from 'next/image';

const Slider = () => {

    return (
        <div className='h-fit mt-5'>
            <h1 className='absolute z-30 text-center text-2xl md:text-4xl flex justify-center items-center mt-20 ml-8 md:mt-48 md:ml-28 md:bg-[#10101092] md:p-7 rounded text-white'>Let us Find your <br /> travel destination</h1>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide className='py-5 md:pt-28'>
                    <Image
                        height={200}
                        width={220}
                        src="https://i.ibb.co/JprMTP7/istockphoto-629248542-612x612.jpg"
                        alt='book image '
                        className='mx-auto my-auto rounded border-8'
                    ></Image>
                </SwiperSlide>
                <SwiperSlide className='py-5 md:pt-28'>
                    <Image
                        height={200}
                        width={220}
                        src="https://i.ibb.co/FWbndXL/a8ede7fa754f27f2c71d08f655b98d3c.jpg"
                        alt='book image'
                        className='mx-auto my-auto rounded border-8  md:-ml-4 '
                    ></Image>
                </SwiperSlide>
                <SwiperSlide className='py-5 md:pt-28'>
                    <Image
                        height={200}
                        width={220}
                        src="https://i.ibb.co/Y45Dym0/gettyimages-724345765-1579196353.jpg"
                        alt='book image'
                        className='mx-auto my-auto rounded border-8 md:-ml-16'
                    ></Image>
                </SwiperSlide>
                <SwiperSlide className='py-5 md:pt-28'>
                    <Image
                        height={200}
                        width={220}
                        src="https://i.ibb.co/hZCRn4c/istockphoto-647361824-612x612.jpg"
                        alt='book image'
                        className='mx-auto my-auto rounded border-8 md:-ml-28 relative'
                    ></Image>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;


