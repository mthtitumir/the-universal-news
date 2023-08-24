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
import SingleScore from '../../SingleScore/SingleScore';
import Scores from '@/hooks/useLiveScores';
import Image from 'next/image';

const LiveScoreSlider = () => {
    // const scoreUrl = await fetch('https://api.cricapi.com/v1/currentMatches?apikey=32c8bddb-0190-47ae-a781-61664a2f8783&offset=0')
    // const liveScores = await scoreUrl.json()
    // console.log(liveScores);
    const { data } = Scores();
    // console.log(data);
    return (
        <>
            {
                data ?
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
                            data?.map(singleScore => <SwiperSlide key={singleScore.id}><SingleScore singleScore={singleScore} /></SwiperSlide>)
                        }
                    </Swiper>
                    :
                    <div className='flex justify-center items-center'>
                        <Image alt='live' width={200} height={200} src={"https://media.tenor.com/wU-hCae1a8sAAAAC/live.gif"} />
                    </div>
            }
        </>
    );
}
export default LiveScoreSlider;
