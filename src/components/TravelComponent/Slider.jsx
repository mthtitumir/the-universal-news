"use client"
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
// import './styles.css';
import { Pagination } from 'swiper/modules';
import Image from 'next/image';

const Slider = () => {

    // const data = news.slice(0, 20);


    return (
        <>
        <h1 className='absolute z-30 text-center text-2xl md:text-4xl flex justify-center items-center mt-20 ml-8 md:mt-48 md:ml-28 md:bg-[#10101092] md:p-7 rounded text-white'>Let's Find your <br /> travel destination</h1>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper bg-[url('https://i.ibb.co/W2mr1bJ/halongbaycheap.jpg')] bg-[#10101092]  bg-no-repeat w-full"
            >
                <SwiperSlide>
                    <Image
                        height={500}
                        width={800}
                        src="https://i.ibb.co/JprMTP7/istockphoto-629248542-612x612.jpg"
                        alt='book image'
                    ></Image>
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        height={500}
                        width={800}
                        src="https://i.ibb.co/FWbndXL/a8ede7fa754f27f2c71d08f655b98d3c.jpg"
                        alt='book image'
                    ></Image>
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        height={500}
                        width={800}
                        src="https://i.ibb.co/Y45Dym0/gettyimages-724345765-1579196353.jpg"
                        alt='book image'
                    ></Image>
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        height={500}
                        width={800}
                        src="https://i.ibb.co/hZCRn4c/istockphoto-647361824-612x612.jpg"
                        alt='book image'
                    ></Image>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Slider;


