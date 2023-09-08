"use client"
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../style.css'
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';

const SwiperSection = () => {
    return (
        <div>
            <h1 className='text-5xl text-zinc-700 font-normal my-6'>Universal Books</h1>

            {/* auto sliders */}
            <div>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: true,
                    }}
                    // pagination={{
                    //     clickable: true,
                    // }}
                    // navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <Image
                            height={500}
                            width={800}
                            src="https://i.ibb.co/5Rzyf3Y/slide.jpg"
                            alt='book image'
                        ></Image>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image
                            height={500}
                            width={800}
                            src="https://i.ibb.co/5Rzyf3Y/slide.jpg"
                            alt='book image'
                        ></Image>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image
                            height={500}
                            width={800}
                            src="https://i.ibb.co/5Rzyf3Y/slide.jpg"
                            alt='book image'
                        ></Image>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image
                            height={500}
                            width={800}
                            src="https://i.ibb.co/5Rzyf3Y/slide.jpg"
                            alt='book image'
                        ></Image>
                    </SwiperSlide>

                </Swiper>
            </div>
        </div>
    );
};

export default SwiperSection;