"use client"
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Pagination } from 'swiper/modules';
import SingleScore from '../../SingleScore/SingleScore';
import Scores from '@/hooks/useLiveScores';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

const LiveScoreSlider = () => {
    const { data } = Scores();

    // Define responsive breakpoints for Swiper
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
        <>
            {data ? (
                <Swiper
                    slidesPerView={3} // Default value for larger screens
                    spaceBetween={30} // Default spacing for larger screens
                    freeMode={true}
                    pagination={{
                        clickable: true,
                        type: 'progressbar',
                    }}
                    navigation={true}
                    modules={[FreeMode, Pagination, Navigation]}
                    className="mySwiper"
                    // Apply responsive breakpoints
                    breakpoints={breakpoints}
                >
                    {data.map((singleScore) => (
                        <SwiperSlide key={singleScore.id}>
                            <SingleScore singleScore={singleScore} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            ) : (
                <div className="flex justify-center items-center">
                    <Image
                        alt="live"
                        width={200}
                        height={200}
                        src={
                            'https://media.tenor.com/wU-hCae1a8sAAAAC/live.gif'
                        }
                    />
                </div>
            )}
        </>
    );
};

export default LiveScoreSlider;
