"use client"
import React, { useState } from "react";
import Image from "next/image";
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";

const SingleCast = ({ TrendingCast, handleSrc, isPlaying, scrollToIframe }) => {
  const { title, image, host, chanel_logo } = TrendingCast;
  const [isFollowed, setIsFollowed] = useState(false);

  const toggleFollow = () => {
    setIsFollowed((prevIsFollowed) => !prevIsFollowed);
  };

  return (
    <div className="card w-full bg-base-100 shadow-xl relative h-[450px]">
      <figure>
        <Image
          height={50}
          width={120}
          src={image}
          alt="book image"
          className="w-full h-full"
        />
      </figure>
      <div className="card-body absolute bottom-1">
        <h2 className="lg:text-xl text-lg font-semibold">{title}</h2>
        <div className="flex items-center justify-between py-4 gap-10">
          <div className="flex items-center gap-1">
            <Image
              height={48}
              width={48}
              src={chanel_logo}
              alt="book image"
              className="w-12 h-12 rounded-full"
            />
            <p className="text-xl font-semibold">{host}</p>
          </div>
          <button
            className={`py-2 px-4 bg-black text-white text-center rounded-3xl shadow-lg cursor-pointer ${
              isFollowed ? "bg-green-500" : ""
            }`}
            onClick={toggleFollow}
          >
            {isFollowed ? "Followed" : "Follow"}
          </button>
        </div>
      </div>

      <div className="absolute top-[20%] left-1/2 transition-colors duration-300 ease-in-out delay-100">
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
