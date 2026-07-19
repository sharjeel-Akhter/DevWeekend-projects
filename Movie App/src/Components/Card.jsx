import { Link } from "react-router";
import movieBg from "../assets/movie.jpg";




function Card({movie}) {
  return (
    <div className="max-w-sm rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-md overflow-hidden ">
              <Link to={`/movie/${movie.id}`}>
             <img src={movie.poster_path ?`https://image.tmdb.org/t/p/w500/${movie.poster_path}`: movieBg } alt="Movie" className="w-full h-95 object-cover"/>
        </Link>
     

      <div className="p-5">
        <h5 className="mb-3 text-2xl font-bold text-gray-900 dark:text-white">
          {movie.original_title}
        </h5>

        <div className="flex justify-between mt-5 flex-col text-gray-600 dark:text-gray-400">
          
        <p>{movie.overview}</p>
        </div>

      </div>
    </div>
  );
}

export default Card;