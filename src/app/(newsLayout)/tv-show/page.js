import MovieBannerLeft from "@/components/MovieBannerLeft/MovieBannerLeft";
import NextMovieBanner from "@/components/NextMovieBanner/NextMovieBanner";
import PopularMovies from "@/components/PopularMovies/PopularMovies";
import EntertainmentNews from "@/components/EntertainmentNews/EntertainmentNews";
import CelebrityLifeStyle from "@/components/EntertainmentNews/CelebrityLifeStyle";
import Advertisement from "@/components/EntertainmentNews/Advertisement";

const TvShow = () => {
  return (
    <div className="mt-10 c-auto md:px-0 lg:px-20 px-6">
      <div className="w-full flex lg:flex-row flex-col justify-between items-start gap-5">
        <div className="lg:w-[68%] w-full">
          <MovieBannerLeft />
        </div>
        <div className="lg:w-[30%] w-full h-[500px] overflow-y-scroll overflow-x-hidden card1">
          <NextMovieBanner />
        </div>
      </div>
      <div>
        <PopularMovies />
      </div>
      <div className="w-full flex lg:flex-row flex-col justify-between items-start gap-5 mt-32 ">
        <div className="lg:w-[68%] w-full">
          <EntertainmentNews />
        </div>
        <div className="lg:w-[30%] w-full h-[500px]">
          <Advertisement />
        </div>
      </div>
      <div className="w-full flex lg:flex-row flex-col justify-between items-start gap-5 mt-32 ">
        <div className="lg:w-[68%] w-full">
          <CelebrityLifeStyle />
        </div>
        <div className="lg:w-[30%] w-full h-[500px]">
          <Advertisement />
        </div>
      </div>
    </div>
  );
};

export default TvShow;
