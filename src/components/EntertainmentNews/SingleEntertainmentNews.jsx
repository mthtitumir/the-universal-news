import Image from "next/image";
import React from "react";

const SingleEntertainmentNews = ({ news , newses, index }) => {
  const { title, image, description, posted_time, author } = news;
  return (
    <div className={`border-b-2 ${index === newses.length - 1 ? "border-none" : "border-gray-500"}  py-6 flex lg:flex-row flex-col-reverse justify-between gap-5 group`}>
      <div className="basis-3/4 space-y-3">
        <div className="flex gap-1 flex-col">
          <h1 className="text-3xl font-bold group-hover:text-cyan-600">{title}</h1>
          <div className="flex gap-2">
            <p className="text-gray-500 text-lg">{posted_time}</p>
            <span className="text-gray-500 text-lg">|</span>
            <p className="text-gray-500 text-lg">{author}</p>
          </div>
          <p className="overflow-hidden">{description}</p>
        </div>
      </div>
      <div className="basis-1/4">
        <Image
          alt="banner image"
          width={300}
          height={250}
          className=" z-10 rounded-xl w-full h-[250px]"
          src={image}
        ></Image>
      </div>
    </div>
  );
};

export default SingleEntertainmentNews;
