import React from "react";
import AllNewses from "../../utils/entertainment.json";
import SingleEntertainmentNews from "./SingleEntertainmentNews";
const EntertainmentNews = () => {
  const newses = AllNewses;
  console.log(newses);
  return (
    <div>
      <div className="relative">
        <h2 className="text-4xl font-bold my-2 text-start">Latest News</h2>
        <div className="w-24 h-1 bg-cyan-600 absolute left-0 top-11"></div>
        <div className="flex flex-col gap-4 px-4">
          {newses.map((news, index) => (
            <SingleEntertainmentNews
              key={news.id}
              news={news}
              newses = {newses}
              index = {index}
            ></SingleEntertainmentNews>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EntertainmentNews;
