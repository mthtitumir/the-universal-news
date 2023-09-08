"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import movieData from "../../utils/movie.json"
import Image from "next/image";
const MovieBannerLeft = () => {
  const data = movieData
  return (
    <div className="">
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
        <div className="relative">
          {data?.map((movie) => (
            <SwiperSlide  key={movie?.id}>
              <Image
                alt="banner image"
                width={600}
                height={600}
                className="w-full h-[500px] z-10"
                key={movie?.id}
                src={movie?.backdrop_path}
              ></Image>
              <div>
                <Image
                  alt="banner image"
                  width={600}
                  height={600}
                  className="w-[165px] h-[244px] absolute bottom-0 left-10 z-40"
                  key={movie?.id}
                  src={movie?.poster_path}
                ></Image>
              </div>

              <div className="absolute  flex items-end justify-center h-full w-full left-0 bottom-0 bg-gradient-to-t from-[#151515] to-[rgba(21, 21, 21, 0)] ">
                <div className="text-white space-y-3 lg:space-y-4 pl-4 lg:pl-28 w-3/4 mb-16">
                  <h2 className="lg:text-5xl  text-2xl font-bold">
                    {movie?.original_title}
                  </h2>
                  <p className="text-gray-200 text-xs lg:text-base ">
                    {movie?.overview}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default MovieBannerLeft;
