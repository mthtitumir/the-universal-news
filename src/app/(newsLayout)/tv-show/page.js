import MovieBannerLeft from "@/components/MovieBannerLeft/MovieBannerLeft";
import NextMovieBanner from "@/components/NextMovieBanner/NextMovieBanner";
import React from "react";

const TvShow = () => {
  return (
    <div className="mt-10 c-auto lg:px-20 px-6">
      <div className="w-full flex justify-between items-start gap-5">
        <div className="lg:w-[70%] w-full">
          <MovieBannerLeft />
        </div>
        <div className="lg:w-[30%] w-full h-[500px] overflow-y-scroll overflow-x-hidden card1">
          <h1 className="text-3xl font-bold mb-2">Up Next</h1>
          <NextMovieBanner />
        </div>
      </div>
    </div>
  );
};

export default TvShow;
