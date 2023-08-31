"use client";
import React, { useState, useRef } from "react";
import TrendingCast from "../../utils/podcast.json";
import SingleCast from "./SingleCast";
import Headline from "../miniComponents/Headline";

const Trending = () => {
  const data = TrendingCast;
  const [img, setImg] = useState("");
  const [title, setTitle] = useState("");
  const iframeRef = useRef(null);
  const [playingIndex, setPlayingIndex] = useState(-1); // Initialize as -1, meaning nothing is playing

  const handleSrc = (src, title, index) => {
    if (playingIndex === index) {
      // Clicked on the currently playing item, pause it
      setPlayingIndex(-1);
      setImg("");
    } else {
      // Clicked on a new item, play it
      setImg(src);
      setTitle(title);
      setPlayingIndex(index);
    }
  };

  const scrollToIframe = () => {
    iframeRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div>
      <div className="flex flex-col justify-center px-10">
        <iframe
          ref={iframeRef}
          src={
            img
              ? img
              : "https://www.youtube.com/embed/VYDdvW-nN9k?si=Vqc-pbRnZVC5u4cC"
          }
          title="YouTube video player"
          frameBorder="0"
          className="w-full lg:h-[700px] h-[250px] "
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <div className="mt-5">
          <h1 className="md:text-4xl">
            {title ||
              "Science, Religion, Philosophy: Perspectives Podcast (Podcast-01) | Yahiya Amin and @sadmansadic"}
          </h1>
        </div>
      </div>

      {/* more on this topic  */}
      <div className="">
        <div className="divider"></div>
        <Headline headline={"Listen More Like This"}></Headline>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 mb-10 my-6">
          {data.map((TrendingCast, index) => (
            <SingleCast
              key={TrendingCast.id}
              TrendingCast={TrendingCast}
              handleSrc={() =>
                handleSrc(TrendingCast.src, TrendingCast.title, index)
              }
              isPlaying={playingIndex === index}
              scrollToIframe={scrollToIframe}
            />
          ))}
        </div>
      </div>
      <div className=" flex justify-center items-center">
        <button className="flex justify-center items-center bg-cyan-500 p-5 text-white rounded-lg">
          Explore More
        </button>
      </div>
    </div>
  );
};

export default Trending;
