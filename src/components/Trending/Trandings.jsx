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
  const [playingIndex, setPlayingIndex] = useState(0); // Initialize as -1, meaning nothing is playing

  // Pagination settings
  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);

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

  // Calculate pagination parameters
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = data.slice(indexOfFirstItem, indexOfLastItem);

  // Calculate total number of pages
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Pagination buttons
  const paginationButtons = [];
  for (let i = 1; i <= totalPages; i++) {
    paginationButtons.push(
      <button
        key={i}
        className={`${
          currentPage === i
            ? "bg-blue-500 text-white"
            : "bg-gray-200 text-gray-700"
        } py-2 px-4 mr-2 rounded focus:outline-none`}
        onClick={() => setCurrentPage(i)}
      >
        {i}
      </button>
    );
  }

  return (
    <div>
      <div className="flex flex-col justify-center">
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
          {currentData.map((TrendingCast, index) => (
            <SingleCast
              key={TrendingCast.id}
              TrendingCast={TrendingCast}
              handleSrc={() =>
                handleSrc(
                  TrendingCast.src,
                  TrendingCast.title,
                  index + indexOfFirstItem
                )
              }
              isPlaying={playingIndex === index + indexOfFirstItem}
              scrollToIframe={scrollToIframe}
            />
          ))}
        </div>

        {/* Pagination buttons */}
        <div className="flex justify-center mt-4 space-x-2">
          {paginationButtons}
        </div>
      </div>
    </div>
  );
};

export default Trending;
