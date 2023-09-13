import Banner from "@/components/PodcastBanner/Banner";
import ScrollToTopButton from "@/components/ScrollToTop/ScrollToTopButton";
import SearchBox from "@/components/SearchBox/SearchBox";
import Trending from "@/components/Trending/Trandings";
import React from "react";

const Podcast = () => {
  return (
    <div className="c-auto">
      <div className="my-8">
        <SearchBox></SearchBox>
      </div>
      <div className="mb-6">
        <Banner />
      </div>
      <div>
        <Trending />
      </div>
      <div>
        <ScrollToTopButton />
      </div>
    </div>
  );
};

export default Podcast;
