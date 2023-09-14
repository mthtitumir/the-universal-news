"use client"
import React, { useState } from "react";
import movieData from "../../utils/movie.json";
import MovieCard from "../MovieCard/MovieCard";

const PopularMovies = () => {
  const popularMovies = movieData;
  const itemsPerPage = 4; // Display 4 items per page
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the total number of pages
  const totalPages = Math.ceil(popularMovies.length / itemsPerPage);

  // Calculate the range of items to display on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentMovies = popularMovies.slice(indexOfFirstItem, indexOfLastItem);

  // Pagination buttons
  const paginationButtons = [];
  for (let i = 1; i <= totalPages; i++) {
    paginationButtons.push(
      <button
        key={i}
        className={`${
          currentPage === i ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
        } py-2 px-4 mr-2 rounded focus:outline-none`}
        onClick={() => setCurrentPage(i)}
      >
        {i}
      </button>
    );
  }

  return (
    <div className=" lg:my-24 relative">
      <h1 className="text-4xl font-bold text-start my-10 ">Popular Movies</h1>
      <div className="w-24 h-1 bg-cyan-600 absolute left-0 top-11"></div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2  grid-cols-1 gap-5 ">
        {currentMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie}></MovieCard>
        ))}
      </div>

      {/* Pagination buttons */}
      <div className="flex justify-center mt-4 space-x-2">{paginationButtons}</div>
    </div>
  );
};

export default PopularMovies;
