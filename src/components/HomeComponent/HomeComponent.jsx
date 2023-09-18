import React from "react";
import NewsCardOne from "../newsCards/NewsCardOne";
import NewsCardTwo from "../newsCards/NewsCardTwo";
import NewsCardThree from "../newsCards/NewsCardThree";
import Headline from "../miniComponents/Headline";
import "./HomeComponent.css";
import { GetAllNews } from "@/services/GetAllNews";

const HomeComponent = async () => {
    const news = await GetAllNews();
    // console.log(news);
    const data = news.slice(0,20);
    const data1 = news.slice(0, 10);
    const data2 = news.slice(0,10);
  
  return (
    <div className="">
      <Headline headline={"Recent News"} seeMore={""} path={""} />

      <div className="grid sm:grid-cols-3 md:grid-cols-12 gap-3 md:h-[70vh]">
        <div className="card1 md:col-span-3 overflow-y-scroll overflow-x-hidden ">
          {data.map((item) => (
            <NewsCardOne key={item.id} item={item}></NewsCardOne>
          ))}
        </div>
        <div className="card1 order-first md:order-none md:col-span-5 flex flex-col gap-3 overflow-y-scroll overflow-x-hidden ">
          {data1.map((item) => (
            <NewsCardTwo key={item.id} item={item}></NewsCardTwo>
          ))}
        </div>
        <div className="card1 md:col-span-4 flex flex-col gap-3 overflow-y-scroll overflow-x-hidden ">
          {data2.map((item) => (
            <NewsCardThree key={item.id} item={item}></NewsCardThree>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
