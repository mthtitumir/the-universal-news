import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import React from "react";

const MovieCard = ({ movie }) => {
  const { poster_path, original_title, vote_average, overview } = movie;
  return (
    <div>
      <div className="shadow-lg relative rounded-xl h-[800px]">
        <div className="basis-1/2">
          <Image
            alt="banner image"
            width={400}
            height={300}
            className=" z-10 rounded-xl w-full h-[450px]"
            src={`https://image.tmdb.org/t/p/original${poster_path}`}
          ></Image>
        </div>
        <div className="basis-1/2 mt-3 flex flex-col items-start justify-center p-6">
          <h1 className="text-2xl font-bold z-30">{original_title}</h1>
          <div className="flex  gap-1">
            <AiFillStar className="text-yellow-400" />
            <span>{vote_average}</span>
          </div>
          <p>{overview}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
