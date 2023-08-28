"use client";
import React, { useState } from "react";
import TrendingCast from "../../utils/podcast.json";
import SingleCard from "@/app/(newsLayout)/playground/games/memory-game/singleCardComp/SingleCard";
import SingleCast from "./SingleCast";
const Trending = () => {
  const data = TrendingCast;
  const [img, setImg] = useState("");
  console.log(data);
  const handleSrc = (src) => {
    const imgSrc = src;
    setImg(imgSrc);
  };
  console.log(img);
  return (
    <div>
      <div className="flex items-center justify-center px-10">
        <iframe
          src={
            img
              ? img
              : "https://www.youtube.com/embed/VYDdvW-nN9k?si=Vqc-pbRnZVC5u4cC"
          }
          title="YouTube video player"
          frameborder="0"
          className="w-full lg:px-20 px-6 lg:h-[500px] h-[250px] "
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 lg:mt-20 mb-10 my-6 lg:mx-20 mx-6">
        {data.map((TrendingCast) => (
          <SingleCast
            key={TrendingCast.id}
            TrendingCast={TrendingCast}
            handleSrc={handleSrc}
          ></SingleCast>
        ))}
      </div>
        <div className=" flex justify-center items-center">
        <button className="flex justify-center items-center bg-cyan-500 p-5 text-white rounded-lg">Explore more</button>
        </div>
    </div>
  );
};

export default Trending;
