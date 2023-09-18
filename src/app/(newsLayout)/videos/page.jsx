"use client";
import React, { useState } from "react";
import { RiVideoFill } from "react-icons/ri";
import videosData from "../../../utils/videos.json";
import SingleVideoCard from "@/components/VedioComponent/SingleVideoCard";

const Videos = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleButtonClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="c-auto my-6">
      <div className="flex justify-between mb-4">
        <div className="flex gap-1 items-center justify-center">
          <p>
            <RiVideoFill className="text-3xl text-red-700"></RiVideoFill>
          </p>
          <h3 className="text-3xl font-bold">Universal Tube</h3>
        </div>
        <button className="btn bg-slate-400 mr-40">Short by view</button>
        <button className="btn btn-info">Blog</button>
      </div>
      <hr />

      {/* <div className='flex justify-center items-center gap-3 my-6'>
                <button className='btn bg-red-500 text-white'>All</button>
                <button className='btn'>Music</button>
                <button className='btn'>Movie</button>
                <button className='btn'>Tv Show</button>
            </div> */}
      <div className="flex justify-center items-center gap-3 my-6">
        <button
          className={`btn ${selectedCategory === "all" ? "bg-red-500" : ""}`}
          onClick={() => handleButtonClick("all")}
        >
          All
        </button>
        <button
          className={`btn ${selectedCategory === "music" ? "bg-red-500" : ""}`}
          onClick={() => handleButtonClick("music")}
        >
          Music
        </button>
        <button
          className={`btn ${selectedCategory === "movie" ? "bg-red-500" : ""}`}
          onClick={() => handleButtonClick("movie")}
        >
          Movie
        </button>
        <button
          className={`btn ${
            selectedCategory === "tv-show" ? "bg-red-500" : ""
          }`}
          onClick={() => handleButtonClick("tv-show")}
        >
          Tv Show
        </button>
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 my-6">
        {videosData.map((data) => (
          <SingleVideoCard key={data.id} data={data}></SingleVideoCard>
        ))}
      </div>
    </div>
  );
};

export default Videos;
