import SingleEntertainmentNews from "./SingleEntertainmentNews";
import { GetAllLifestyleFromDB } from "@/services/GetAllNewsFromDB";
const EntertainmentNews = async ({text}) => {
  const allNews = await GetAllLifestyleFromDB();
  return (
    <div>
      <div className="relative">
        <h2 className="text-4xl font-bold my-2 text-start">{text}</h2>
        <div className="w-24 h-1 bg-cyan-600 absolute left-0 top-11"></div>
        <div className="flex flex-col gap-4 px-4">
          {allNews?.map((news, index) => (
            <SingleEntertainmentNews
              key={news?.id}
              news={news}
            ></SingleEntertainmentNews>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EntertainmentNews;
