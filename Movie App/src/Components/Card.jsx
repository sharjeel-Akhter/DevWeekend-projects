import movie from "../assets/movie.webp";
function Card({movie}) {
  return (
    <div className="max-w-sm rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-md overflow-hidden">
      <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`?`https://image.tmdb.org/t/p/w500/${movie.poster_path}`: {movie} } alt="Movie" className="w-full h-80 object-cover"/>

      <div className="p-5">
        <h5 className="mb-3 text-2xl font-bold text-gray-900 dark:text-white">
          {movie.original_title}
        </h5>

        <p className="mb-5 text-gray-900 dark:text-gray-white  dark:text-white">
          {movie.overview}
        </p>

      </div>
    </div>
  );
}

export default Card;