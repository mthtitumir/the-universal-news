import Image from "next/image";
import movieData from "../../../../utils/movie.json";
const SingleMovie = ({ params }) => {
  const id = params.id;
  const singleMovie = movieData;
  const currentMovieDetail = singleMovie.find((movie) => movie.id == id);
  return (
    <div>
      {/* banner */}
      <div className="relative my-10">
        <Image
          alt="banner image"
          width={400}
          height={300}
          className="w-full h-[500px] object-cover object-center "
          src={currentMovieDetail ? currentMovieDetail.backdrop_path : ""}
        ></Image>
        <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="text-white flex lg:flex-row flex-col gap-2 pl-4 lg:pl-28">
            <Image
              alt="banner image"
              width={400}
              height={300}
              className=" z-10 lg:w-[220px] w-[150px] lg:h-[300px] h-[150px] shadow-lg mr-5"
              src={currentMovieDetail ? currentMovieDetail.poster_path : ""}
            ></Image>
            <div className=" text-white flex flex-col">
              <div className="text-shadow(0px 0px 5px #000000) space-y-2">
                <div className=" font-semibold text-3xl">
                  {currentMovieDetail ? currentMovieDetail.original_title : ""}
                </div>
                <div className="">
                  {currentMovieDetail ? currentMovieDetail.tagline : ""}
                </div>
                <div className="">
                  {currentMovieDetail ? currentMovieDetail.vote_average : ""}
                  <span className="">
                    {currentMovieDetail
                      ? "(" + currentMovieDetail.vote_count + ") votes"
                      : ""}
                  </span>
                </div>
                <div className="">
                  {currentMovieDetail
                    ? currentMovieDetail?.runtime + " mins"
                    : ""}
                </div>
                <div className="">
                  {currentMovieDetail
                    ? "Release date: " + currentMovieDetail.release_date
                    : ""}
                </div>
                <div className="my-5 ">
                  {currentMovieDetail && currentMovieDetail.genres
                    ? currentMovieDetail.genres.map((genre) => (
                        <>
                          <span
                            className="p-2 border-2 border-white rounded-2xl mr-2 "
                            id={genre.id}
                          >
                            {genre.name}
                          </span>
                        </>
                      ))
                    : ""}
                </div>
              </div>
              <div className="mt-2">
                <div className="text-xl font-semibold flex items-center">
                  Synopsis
                </div>
                <div>
                  {currentMovieDetail ? currentMovieDetail?.overview : ""}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Cast */}
      <div className="my-10 lg:px-20 px-6">
        <h1 className="text-3xl font-bold mb-5">Top Casts</h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
          {currentMovieDetail && currentMovieDetail.cast
            ? currentMovieDetail.cast.map((data) => (
                <div key={data.image} className="flex flex-col gap-4 items-center" >
                  <Image
                    alt="banner image"
                    width={400}
                    height={300}
                    className=" z-10 w-[200px] h-[200px] shadow-lg rounded-full"
                    src={data.image}
                  ></Image>
                  <p className="text-2xl font-semibold">{data.name}</p>
                </div>
              ))
            : ""}
        </div>
      </div>
      {/* Similar movies */}
      <div className="my-10 lg:px-20 px-6">
        <h1 className="text-3xl font-bold mb-5">Similar Movies</h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-10">
          {currentMovieDetail && currentMovieDetail.similar_movies
            ? currentMovieDetail.similar_movies.map((movie) => (
                <div key={movie.image} className="shadow-lg  rounded-xl h-full">
                  <div className="basis-1/2">
                    <Image
                      alt="banner image"
                      width={400}
                      height={300}
                      className=" z-10 rounded-xl w-full h-[400px]"
                      src={movie.poster_path}
                    ></Image>
                  </div>
                  <div className="basis-1/2 mt-3 flex relative flex-col items-start justify-center p-6">
                    <h1 className="text-2xl font-bold z-30">{movie.title}</h1>
                  </div>
                </div>
              ))
            : ""}
        </div>
      </div>
    </div>
  );
};

export default SingleMovie;
