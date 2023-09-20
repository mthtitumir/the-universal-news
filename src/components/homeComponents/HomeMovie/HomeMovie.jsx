import MovieCard from '@/components/MovieCard/MovieCard';
import data from '@/utils/movie.json'
const HomeMovie = () => {
    console.log(data);
    return (
        <div>
            <div className="grid lg:grid-cols-4 md:grid-cols-2  grid-cols-1 gap-5 ">
                {data?.map((movie) => (
                    <MovieCard key={movie?.id} movie={movie}></MovieCard>
                ))}
            </div>
        </div>
    );
};

export default HomeMovie;