import PodcastBanner from "@/components/PodcastBanner/PodcastBanner";
import Banner from "@/components/PodcastBanner/Banner";
import SearchBox from "@/components/SearchBox/SearchBox";
import Trending from "@/components/Trending/Trandings";
import React from "react";

const Podcast = () => {
  return (
    <div className="mt-10">
      <div>
        <p className="text-center text-4xl font-bold text-cyan-600 mb-6">
          Universal podcast
        </p>
      </div>
      <div>
        <Banner />
      </div>
      <div className="my-12">
        <SearchBox></SearchBox>
      </div>
      <div>
        <Trending />
      </div>
    </div>
  );
};

export default Podcast;
