"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import './Carosoul.css';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';


const Carosoul = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);


    return (
        <>
            <Swiper
                style={{
                    '--swiper-navigation-color': '#000',
                    '--swiper-pagination-color': '#fff',
                    backgroundColor: "black",
                }}
                loop={true}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
            >
                <SwiperSlide>
                    <iframe className='w-[88%] h-[510px]' src="https://www.youtube.com/embed/RfI602XEEaY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </SwiperSlide>
                <SwiperSlide>
                    <iframe className='w-[88%] h-[510px]' src="https://www.youtube.com/embed/HKEtLdfPQLk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </SwiperSlide>
                <SwiperSlide>
                    <iframe className='w-[88%] h-[510px]' src="https://www.youtube.com/embed/rqUICw5O0pQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </SwiperSlide>

                <SwiperSlide>
                    <iframe className='w-[88%] h-[510px]' src="https://www.youtube.com/embed/UcQet3Tcx9M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </SwiperSlide>
                <SwiperSlide>
                    <iframe className='w-[88%] h-[510px]' src="https://www.youtube.com/embed/Za810UPDdD4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </SwiperSlide>
                <SwiperSlide>
                    <iframe className='w-[88%] h-[510px]' src="https://www.youtube.com/embed/_7151uEf71Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </SwiperSlide>
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper px-5"
            >
                <SwiperSlide>
                    <img className='w-full h-full' src="https://i.ibb.co/t8L980p/New-Project-1.png" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full h-full' src="https://i.ibb.co/W3ZXrR8/New-Project-4.png" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full h-full' src="https://i.ibb.co/NSR88Fx/New-Project.png" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full h-full' src="https://i.ibb.co/9YGZxcw/New-Project-2.png" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full h-full' src="https://i.ibb.co/5vKm348/New-Project-3.png" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full h-full' src="https://i.ibb.co/23PbRmh/New-Project.jpg" />
                </SwiperSlide>
            </Swiper>
        </>
    );
}
export default Carosoul;