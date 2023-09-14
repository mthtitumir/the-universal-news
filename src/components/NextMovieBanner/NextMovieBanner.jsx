"use client";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import movieData from "../../utils/movie.json"
const NextMovieBanner = () => {
  const data = movieData
  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">Up Next</h1>

      <div className="flex flex-col gap-5">
        {data?.map((movie) => (
          <div
            key={movie.id}
            className="flex items-center justify-between gap-2 shadow-lg relative rounded-xl"
          >
            <div className="basis-1/2">
              <Image
                alt="banner image"
                width={200}
                height={200}
                className=" z-10 rounded-xl"
                src={movie.backdrop_path}
              ></Image>
            </div>
            <div className="basis-1/2 mt-3">
              <h1 className="text-xl font-medium z-30">
                {movie.original_title}
              </h1>
              <div className="flex items-center gap-1">
                <AiFillStar className="text-yellow-400" />
                <span>{movie.vote_average}</span>
              </div>
            </div>
            <div className="absolute top-0 right-0 bg-cyan-600 text-white p-1 rounded-bl-md z-20">
              <p>{movie.release_date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NextMovieBanner;
