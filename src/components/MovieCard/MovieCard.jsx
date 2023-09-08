import Image from "next/image";
import CirCleRating from "../../components/CircleRating/CircleRating";
import React from "react";
import Link from "next/link";

const MovieCard = ({ movie }) => {
  const { id, poster_path, original_title, vote_average, release_date } = movie;
  return (
    <div>
      <Link href={`/tv-show/${id}`} className="shadow-lg  rounded-xl h-full">
        <div className="basis-1/2">
          <Image
            alt="banner image"
            width={400}
            height={300}
            className=" z-10 rounded-xl w-full h-[300px]"
            src={poster_path}
          ></Image>
        </div>
        <div className="basis-1/2 mt-3 flex relative flex-col items-start justify-center p-6">
          <div className="absolute transform left-2 -top-14">
            <CirCleRating rating={vote_average}></CirCleRating>
          </div>
          <h1 className="text-2xl font-bold z-30">{original_title}</h1>
          <p className="text-lg text-gray-500 font-normal ">{release_date}</p>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
