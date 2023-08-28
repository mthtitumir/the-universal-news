/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
const Banner = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative">
            <Image
              height={500}
              width={800}
              src="https://i.ibb.co/2KwfmgT/Podcast-Banner-1.jpg"
              alt="book image"
              className="w-full h-96"
            ></Image>
            <div className="absolute  flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
              <div className="text-white space-y-3 lg:space-y-7 pl-4 lg:pl-28 w-3/4">
                <h2 className="lg:text-5xl  text-2xl font-bold">
                  Music Extravaganza
                </h2>
                <p className="text-gray-200 text-xs lg:text-base ">
                  Dive into the rhythm of life with our music-packed episodes,
                  where we explore the world's melodies, beats, and stories
                  behind the tunes that shape our lives.
                </p>
                <button className="bg-cyan-500 rounded px-2 py-1 text-white">
                  Discover More
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <Image
              height={500}
              width={800}
              src="https://i.ibb.co/TKdHGNV/podcast-updated-bann.jpg"
              className="w-full h-96"
              alt="book image"
            ></Image>
            <div className="absolute  flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
              <div className="text-white space-y-3 lg:space-y-7 pl-4 lg:pl-28 w-3/4">
                <h2 className="lg:text-5xl  text-2xl font-bold">
                  Live Events Unplugged
                </h2>
                <p className="text-gray-200 text-xs lg:text-base ">
                  Be part of the excitement! Join us for live event coverage
                  that brings you closer to the action, from concerts to
                  exclusive behind-the-scenes access.
                </p>
                <button className="bg-cyan-500 rounded px-2 py-1 text-white">
                  Discover More
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <Image
              height={500}
              width={800}
              src="https://i.ibb.co/cvxGpX3/yellow-marketing-podcast-banner-1-scaled.jpg"
              className="w-full h-96"
              alt="book image"
            ></Image>
            <div className="absolute  flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
              <div className="text-white space-y-3 lg:space-y-7 pl-4 lg:pl-28 w-3/4">
                <h2 className="lg:text-5xl  text-2xl font-bold">
                  Human Chronicles
                </h2>
                <p className="text-gray-200 text-xs lg:text-base ">
                  Explore the incredible tapestry of human experiences. Listen
                  to real-life stories, journeys, and insights that inspire,
                  entertain, and remind us of our shared humanity.
                </p>
                <button className="bg-cyan-500 rounded px-2 py-1 text-white">
                  Discover More
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <Image
              height={500}
              width={800}
              src="https://i.ibb.co/DLRnZ5Q/ilm-podcast-banner-jpg.jpg"
              className="w-full h-96"
              alt="book image"
            ></Image>
            <div className="absolute  flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
              <div className="text-white space-y-3 lg:space-y-7 pl-4 lg:pl-28 w-3/4">
                <h2 className="lg:text-5xl  text-2xl font-bold">
                  The Radio Jokki Experience
                </h2>
                <p className="text-gray-200 text-xs lg:text-base ">
                  Join us in our eclectic audio adventures, where humor,
                  stories, and creativity come together to reflect the joys and
                  quirks of daily life.
                </p>
                <button className="bg-cyan-500 rounded px-2 py-1 text-white">
                  Discover More
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <Image
              height={500}
              width={800}
              src="https://i.ibb.co/jrnQwWs/small.jpg"
              className="w-full h-96"
              alt="book image"
            ></Image>
            <div className="absolute  flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
              <div className="text-white space-y-3 lg:space-y-7 pl-4 lg:pl-28 w-3/4">
                <h2 className="lg:text-5xl  text-2xl font-bold">
                  Enlightening Lectures
                </h2>
                <p className="text-gray-200 text-xs lg:text-base ">
                  Expand your knowledge and perspective with enlightening
                  lectures, spanning a wide range of topics, from Islamic
                  teachings to thought-provoking discussions that ignite the
                  mind.
                </p>
                <button className="bg-cyan-500 rounded px-2 py-1 text-white">
                  Discover More
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
