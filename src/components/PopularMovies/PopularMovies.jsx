"use client";
import React from "react";
import movieData from "../../utils/movie.json"
import MovieCard from "../MovieCard/MovieCard";

const PopularMovies = () => {
  const popularMovies = movieData
  return (
    <div className=" lg:my-24 relative">
      <h1 className="text-4xl font-bold text-start my-10 ">Popular Movies</h1>
      <div className="w-24 h-1 bg-cyan-600 absolute left-0 top-11"></div>
      <div className="grid lg:grid-cols-5 md:grid-cols-3  grid-cols-2 gap-5 ">
        {popularMovies.slice(0,10).map((movie) => (
          <MovieCard key={movie.id} movie={movie}></MovieCard>
        ))}
      </div>
    </div>
  );
};

export default PopularMovies;
