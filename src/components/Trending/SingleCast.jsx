"use client";
import { useState } from "react";
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";
import Image from "next/image";

const SingleCast = ({ TrendingCast, handleSrc }) => {
  //   const [isPlaying, setIsPlaying] = useState(false);
  const { title, image, src, host, release_date, viewers } = TrendingCast;

  const togglePlayPause = () => {
    setIsPlaying((prevState) => !prevState);
  };

  return (
    <div className="card w-full bg-base-100 shadow-xl relative group">
      <figure>
        <Image
          height={50}
          width={120}
          src={image}
          alt="book image"
          className="w-full h-full"
        ></Image>
      </figure>
      <div className="card-body">
        <h2 className="lg:text-xl text-lg font-semibold">{title}</h2>
      </div>
      <div className="absolute top-[20%] left-1/2 hidden group-hover:block transition-colors duration-300 ease-in-out delay-100">
        {/* {isPlaying ? ( */}
        <AiFillPlayCircle
          className="w-10 h-10 text-white cursor-pointer"
          onClick={() => handleSrc(src)}
        />
        {/* ) : ( */}
        {/* <AiFillPlayCircle
            className="w-10 h-10 text-white cursor-pointer"
            onClick={togglePlayPause}
          />
        )} */}
      </div>
    </div>
  );
};

export default SingleCast;

/* 
// <iframe width="560" height="315" src="https://www.youtube.com/embed/ihD8jA0eyis?si=JJALFREIQq49XrYU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
*/
