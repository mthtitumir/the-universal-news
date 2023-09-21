import MovieCard from '@/components/MovieCard/MovieCard'
import { GetAllMoviesFromDB } from '@/services/GetAllNewsFromDB';
const HomeMovie =async () => {
    const data = await GetAllMoviesFromDB();
    // console.log(data);
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