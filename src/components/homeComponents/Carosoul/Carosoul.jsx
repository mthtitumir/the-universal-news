"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import './Carosoul.css';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import Headline from '@/components/miniComponents/Headline';


const Carosoul = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    // const breakpoints = {
    //     // For mobile devices (1 card)
    //     320: {
    //         slidesPerView: 1,
    //         spaceBetween: 10, // Adjust the spacing as needed
    //     },
    //     // For larger screens (3 cards)
    //     768: {
    //         slidesPerView: 3,
    //         spaceBetween: 30, // Adjust the spacing as needed
    //     },
    // };

    return (
        <div className='mt-10 px-3 md:px-0'>
            <Headline headline={"Videos"} seeMore={""} />
            <Swiper
                style={{
                    '--swiper-navigation-color': '#000',
                    '--swiper-pagination-color': '#fff',
                    backgroundColor: "black",
                }}
                loop={true}
                spaceBetween={10}
                // navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
            >
                <SwiperSlide>
                    <iframe className='w-[100%] h-[510px]' src="https://www.youtube.com/embed/RfI602XEEaY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </SwiperSlide>
                <SwiperSlide>
                    <iframe className='w-[100%] h-[510px]' src="https://www.youtube.com/embed/HKEtLdfPQLk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </SwiperSlide>
                <SwiperSlide>
                    <iframe className='w-[100%] h-[510px]' src="https://www.youtube.com/embed/rqUICw5O0pQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </SwiperSlide>

                <SwiperSlide>
                    <iframe className='w-[100%] h-[510px]' src="https://www.youtube.com/embed/UcQet3Tcx9M" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </SwiperSlide>
                <SwiperSlide>
                    <iframe className='w-[100%] h-[510px]' src="https://www.youtube.com/embed/Za810UPDdD4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </SwiperSlide>
                <SwiperSlide>
                    <iframe className='w-[100%] h-[510px]' src="https://www.youtube.com/embed/_7151uEf71Y" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
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
                className="mySwiper"
            >
                <SwiperSlide>
                    <Image
                        src="https://i.ibb.co/t8L980p/New-Project-1.png"
                        height={400}
                        width={600}
                        alt="Picture of the author"
                    >
                    </Image>
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src="https://i.ibb.co/W3ZXrR8/New-Project-4.png"
                        height={400}
                        width={600}
                        alt="Picture of the author"
                    >
                    </Image>
                    {/* <img className='w-full h-full' src="https://i.ibb.co/W3ZXrR8/New-Project-4.png" /> */}
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src="https://i.ibb.co/NSR88Fx/New-Project.png"
                        height={400}
                        width={600}
                        alt="Picture of the author"
                    >
                    </Image>
                    {/* <img className='w-full h-full' src="https://i.ibb.co/NSR88Fx/New-Project.png" /> */}
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src="https://i.ibb.co/9YGZxcw/New-Project-2.png"
                        height={400}
                        width={600}
                        alt="Picture of the author"
                    >
                    </Image>
                    {/* <img className='w-full h-full' src="https://i.ibb.co/9YGZxcw/New-Project-2.png" /> */}
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src="https://i.ibb.co/5vKm348/New-Project-3.png"
                        height={400}
                        width={600}
                        alt="Picture of the author"
                    >
                    </Image>
                    {/* <img className='w-full h-full' src="https://i.ibb.co/5vKm348/New-Project-3.png" /> */}
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src="https://i.ibb.co/23PbRmh/New-Project.jpg"
                        height={400}
                        width={600}
                        alt="Picture of the author"
                    >
                    </Image>
                    {/* <img className='w-full h-full' src="https://i.ibb.co/23PbRmh/New-Project.jpg" /> */}
                </SwiperSlide>
            </Swiper>
        </div>
    );
}
export default Carosoul;