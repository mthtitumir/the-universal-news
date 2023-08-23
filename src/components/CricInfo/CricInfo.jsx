import React from "react";
import NewsCardOne from "../newsCards/NewsCardOne";
import { allNews } from "@/hooks/useAllNews";
import NewsCardTwo from "../newsCards/NewsCardTwo";
import NewsCardFour from "../newsCards/NewsCardFour";
const CricInfo = async () => {
  const news = await allNews();
  // console.log(news);
  const data = news.slice(0, 20);
  const data1 = news.slice(0, 20);
  return (
    <div>
      <div className="mt-5 ">
        <div className="grid md:grid-cols-12 gap-5  mb-10">
          <div className="card1 col-span-3  p-5  h-fit">
            <h3 className="text-3xl font-bold mb-4">Latest News</h3>
            {data.map((item) => (
              <NewsCardOne key={item.id} item={item}></NewsCardOne>
            ))}
          </div>

          <div className="card1 col-span-6 flex flex-col gap-3 overflow-y-scroll overflow-x-hidden  p-5">
            <h3 className="text-3xl font-bold mb-4">Related Posts</h3>

            {data1.map((item) => (
              <NewsCardTwo key={item.id} item={item}></NewsCardTwo>
            ))}
          </div>

          <div className="card1 col-span-3 overflow-y-scroll overflow-x-hidden  p-5 h-fit">
            <h3 className="text-3xl font-bold mb-4">Featured News</h3>
            {data1.map((item) => (
              <NewsCardFour key={item.id} item={item}></NewsCardFour>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CricInfo;
