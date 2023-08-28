import PodcastBanner from "@/components/PodcastBanner/PodcastBanner";
import SearchBox from "@/components/SearchBox/SearchBox";
import React from "react";

const Podcast = () => {
  return (
    <div className="mt-2">
      <div>
        <PodcastBanner />
      </div>
      <div>
        <SearchBox></SearchBox>
      </div>
    </div>
  );
};

export default Podcast;
