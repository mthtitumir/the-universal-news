import Link from "next/link";
import React from "react";

const NewsCardOne = ({ item }) => {
  // console.log(item);
  return (
    <div className="">
      <Link href={`/news/${item?.category}/${item?._id}`}>
        <h1 className="leading-6 hover:underline">{item?.title}</h1>
      </Link>
      <div className="bg-bl  nack my-2 h-[1px]"></div>
    </div>
  );
};

export default NewsCardOne;
