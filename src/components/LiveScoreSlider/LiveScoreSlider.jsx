"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { FreeMode, Navigation, Pagination } from 'swiper/modules';
import SingleScore from '../SingleScore/SingleScore';

const LiveScoreSlider = ({ liveScores }) => {
    // console.log(liveScores);
    return (
        <>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                    type: 'progressbar',
                }}
                navigation={true}
                modules={[FreeMode, Pagination, Navigation]}
                className="mySwiper"
            >
                {
                    liveScores?.map(singleScore => <SwiperSlide key={singleScore.id}><SingleScore singleScore={singleScore} /></SwiperSlide>)
                }
            </Swiper>
        </>
    );
}
export default LiveScoreSlider;
