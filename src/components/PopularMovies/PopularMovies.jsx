"use client";
import React, { useEffect, useState } from "react";
import MovieCard from "../MovieCard/MovieCard";

const PopularMovies = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US"
    )
      .then((res) => res.json())
      .then((data) => setPopularMovies(data.results));
  }, []);
  return (
    <div className=" lg:my-24 relative">
      <h1 className="text-4xl font-bold text-start my-10 ">Popular Movies</h1>
      <div className="w-24 h-1 bg-cyan-600 absolute left-0 top-11"></div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2  grid-cols-1 gap-5 ">
        {popularMovies.slice(0,6).map((movie) => (
          <MovieCard key={movie.id} movie={movie}></MovieCard>
        ))}
      </div>
    </div>
  );
};

export default PopularMovies;
