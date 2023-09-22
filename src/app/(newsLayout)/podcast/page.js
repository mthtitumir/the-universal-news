import Banner from "@/components/PodcastBanner/Banner";
import ScrollToTopButton from "@/components/ScrollToTop/ScrollToTopButton";
import Trending from "@/components/Trending/Trandings";
import React from "react";

const Podcast = () => {
  return (
    <div className="c-auto lg:px-20 px-6">
      <div className="mt-2 mb-6">
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
