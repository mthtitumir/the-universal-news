import React from 'react'

const PopularMovies = () => {
    const [popularMovies, setPopularMovies] = useState([]);

    useEffect(() => {
      fetch(
        "https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US"
      )
        .then((res) => res.json())
        .then((data) => setPopularMovies(data.results));
    }, []);
  return (
    <div>
      
    </div>
  )
}

export default PopularMovies
