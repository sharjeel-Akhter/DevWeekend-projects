import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegStar } from "react-icons/fa";
import { useTitle } from "../hooks/useTitle";

export function MovieDetail() {
    const param = useParams()
    const [movie, setMovie] = useState({})
    useTitle(`${movie.original_title} | Cinemate`)

    useEffect(()=>{
      const fetchMovie = async () =>{
            let res = await fetch(`https://api.themoviedb.org/3/movie/${param.id}?api_key=8339641dab893b1290d5da1bdb441105`)
            let json = await res.json();
            setMovie(json)
            console.log(json)
        }
        fetchMovie()
    },[])
    return (
<section>
  <div className="min-h-[80vh] max-w-7xl mx-auto flex items-start gap-8 py-5 px-5">
    
    <div className="shrink-0">
      <img
        className="rounded"
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.original_title}
      />
    </div>

    <div className="flex-1">
      <h2 className="text-4xl">{movie.original_title}</h2>

      <p className="text-xl py-2">{movie.overview}</p>

      {movie.genres && (
        <p className="my-7 flex flex-wrap gap-2">
          {movie.genres.map((genre) => (
            <span
              key={genre.id}
              className="border border-gray-200 rounded dark:border-gray-600 px-3 py-2"
            >
              {genre.name}
            </span>
          ))}
        </p>
      )}
        {/* flowBite Template */}
      <div className="flex items-center">
        <svg
          aria-hidden="true"
          className="w-5 h-5 text-yellow-400"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Rating star</title>
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>

        <p className="ml-2 text-gray-900 dark:text-white">
          {movie.vote_average}
        </p>

        <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>

        <span className="text-gray-900 dark:text-white">
          {movie.vote_count} reviews
        </span>
      </div>

      <p className="my-7">
        <span className="mr-2 font-bold">Runtime:</span>
        <span>{movie.runtime} min.</span>
      </p>

      <p className="my-7">
        <span className="mr-2 font-bold">Budget:</span>
        <span>${movie.budget}</span>
      </p>

      <p className="my-7">
        <span className="mr-2 font-bold">Revenue:</span>
        <span>${movie.revenue}</span>
      </p>

      <p className="my-7">
        <span className="mr-2 font-bold">Release Date:</span>
        <span>{movie.release_date}</span>
      </p>

      <p className="my-4">
        <span className="mr-2 font-bold">IMDB Code:</span>
        <a
          href={`https://www.imdb.com/title/${movie.imdb_id}`}
          target="_blank"
          rel="noreferrer"
          className="text-blue-500 hover:underline"
        >
          {movie.imdb_id}
        </a>
      </p>
    </div>
  </div>
</section>
    );
}

