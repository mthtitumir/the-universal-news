"use client";
import React, { useState } from "react";
import TrendingCast from "../../utils/podcast.json";
import SingleCast from "./SingleCast";
import Headline from "../miniComponents/Headline";
const Trending = () => {
  const data = TrendingCast;
  const [img, setImg] = useState("");
  const [title, setTitle] = useState("");
  // console.log(data);
  const handleSrc = (src, title) => {
    const imgSrc = src;
    const titleSrc = title;
    setImg(imgSrc);
    setTitle(titleSrc);
  };
  console.log(img, title);
  return (
    <div>
      <div className="flex flex-col justify-center px-10">
        <iframe
          src={
            img ? img : "https://www.youtube.com/embed/VYDdvW-nN9k?si=Vqc-pbRnZVC5u4cC"
          }
          title="YouTube video player"
          frameborder="0"
          className="w-full lg:h-[700px] h-[250px] "
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <div className="mt-5">
          <h1 className="md:text-4xl">{title || "Science, Religion, Philosophy: Perspectives Podcast (Podcast-01) | Yahiya Amin and @sadmansadic"}</h1>
        </div>
      </div>

      {/* more on this topic  */}
      <div className="">
        <div className="divider"></div>
        <h1 className="text-2xl md:text-4xl text-cyan-600">Listen More Like This</h1>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 mb-10 my-6">
          {data.map((TrendingCast) => (
            <SingleCast
              key={TrendingCast.id}
              TrendingCast={TrendingCast}
              handleSrc={handleSrc}
            ></SingleCast>
          ))}
        </div>
      </div>
      <div className=" flex justify-center items-center">
        <button className="flex justify-center items-center bg-cyan-500 p-5 text-white rounded-lg">Explore More</button>
      </div>
    </div>
  );
};

export default Trending;
