import MovieBannerLeft from "@/components/MovieBannerLeft/MovieBannerLeft";
import NextMovieBanner from "@/components/NextMovieBanner/NextMovieBanner";
import PopularMovies from "@/components/PopularMovies/PopularMovies";
import EntertainmentNews from "@/components/EntertainmentNews/EntertainmentNews";
import Advertisement from "@/components/EntertainmentNews/Advertisement";
import { GetAllMoviesFromDB } from "@/services/GetAllNewsFromDB";

const TvShow =async () => {
  const data = await GetAllMoviesFromDB();
  return (
    <div className="mt-10 c-auto md:px-0 lg:px-20 px-6">
      <div className="w-full flex lg:flex-row flex-col justify-between items-start gap-5">
        <div className="lg:w-[68%] w-full">
          <MovieBannerLeft data={data} />
        </div>
        <div className="lg:w-[30%] w-full h-[500px] overflow-y-scroll overflow-x-hidden card1">
          <NextMovieBanner />
        </div>
      </div>
      <div>
        <PopularMovies data={data} />
      </div>
      <div className="w-full flex lg:flex-row flex-col justify-between items-start gap-5 mt-32 ">
        <div className="lg:w-[68%] w-full">
          <EntertainmentNews text={"Latest News"} />
        </div>
        <div className="lg:w-[30%] w-full h-[500px]">
          <Advertisement />
        </div>
      </div>
      <div className="w-full flex lg:flex-row flex-col justify-between items-start gap-5 mt-32 ">
        <div className="lg:w-[68%] w-full">
        <EntertainmentNews text={"Lifestyle"} />
        </div>
        <div className="lg:w-[30%] w-full h-[500px]">
          <Advertisement />
        </div>
      </div>
    </div>
  );
};

export default TvShow;
