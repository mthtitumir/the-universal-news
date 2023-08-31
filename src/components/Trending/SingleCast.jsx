import React from "react";
import Image from "next/image";
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";

const SingleCast = ({ TrendingCast, handleSrc, isPlaying, scrollToIframe }) => {
  const { title, image } = TrendingCast;

  return (
    <div className="card w-full bg-base-100 shadow-xl relative group">
      <figure>
        <Image
          height={50}
          width={120}
          src={image}
          alt="book image"
          className="w-full h-full"
        />
      </figure>
      <div className="card-body">
        <h2 className="lg:text-xl text-lg font-semibold">{title}</h2>
      </div>
      <div className="absolute top-[20%] left-1/2 hidden group-hover:block transition-colors duration-300 ease-in-out delay-100">
        {isPlaying ? (
          <AiFillPauseCircle
            className="w-10 h-10 text-white cursor-pointer"
            onClick={() => {
              handleSrc(); // Pause by clearing the iframe source
            }}
          />
        ) : (
          <AiFillPlayCircle
            className="w-10 h-10 text-white cursor-pointer"
            onClick={() => {
              handleSrc();
              scrollToIframe(); // Scroll to the iframe when clicked
            }}
          />
        )}
      </div>
    </div>
  );
};

export default SingleCast;
