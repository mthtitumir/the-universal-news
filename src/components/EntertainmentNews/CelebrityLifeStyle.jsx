import React from 'react'
import celebrityData from "../../utils/lifeStyles.json";
import SingleEntertainmentNews from './SingleEntertainmentNews';
const CelebrityLifeStyle = () => {
    const newses = celebrityData;
    // console.log(newses);
  return (
    <div>
       <div>
      <div className="relative">
        <h2 className="text-4xl font-bold my-2 text-start">Life Style</h2>
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
    </div>
  )
}

export default CelebrityLifeStyle
