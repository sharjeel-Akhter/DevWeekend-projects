import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegStar } from "react-icons/fa";
import { useTitle } from "../hooks/useTitle";
import { RiLoader4Fill } from "react-icons/ri";

export function MovieDetail() {
  const param = useParams()
  const [movie, setMovie] = useState({})
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  useTitle(`${movie.original_title} | Cinemate`)

  useEffect(() => {
    setLoading(true)
    const fetchMovie = async () => {
      try {
        let res = await fetch(`https://api.themoviedb.org/3/movie/${param.id}?api_key=8339641dab893b1290d5da1bdb441105`)
        let json = await res.json();
        setMovie(json)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    fetchMovie()
  }, [])

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <RiLoader4Fill className="text-5xl animate-spin text-blue-600" />
      </div>
    )
  }
  if (error) {
    return (
      <div className="flex h-screen items-center justify-center">
        <p className="text-red-500 text-lg">{error}</p>
      </div>
    )
  }
  return (
    <section>
<div className="mx-auto flex min-h-[80vh] max-w-7xl flex-col gap-8 px-4 py-6 md:px-6 lg:flex-row lg:items-start lg:gap-12">

  <div className="mx-auto w-full max-w-xs shrink-0 sm:max-w-sm lg:mx-0 lg:max-w-md">
    <img
      className="w-full rounded-xl shadow-lg"
      src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
      alt={movie.original_title}
    />
  </div>

  <div className="flex-1">

    <h2 className="text-3xl font-bold sm:text-4xl">
      {movie.original_title}
    </h2>

    <p className="mt-4 text-base leading-7 text-gray-700 dark:text-gray-300 sm:text-lg">
      {movie.overview}
    </p>

    {movie.genres && (
      <div className="mt-6 flex flex-wrap gap-3">
        {movie.genres.map((genre) => (
          <span
            key={genre.id}
            className="rounded-full border border-gray-300 px-4 py-2 text-sm dark:border-gray-600"
          >
            {genre.name}
          </span>
        ))}
      </div>
    )}

    <div className="mt-8 flex flex-wrap items-center gap-2">
      <svg
        aria-hidden="true"
        className="h-5 w-5 text-yellow-400"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>

      <span className="font-semibold">
        {movie.vote_average}
      </span>

      <span className="h-1 w-1 rounded-full bg-gray-500"></span>

      <span className="text-gray-600 dark:text-gray-300">
        {movie.vote_count} Reviews
      </span>
    </div>

    <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">

      <div>
        <p className="font-semibold">Runtime</p>
        <p>{movie.runtime} min</p>
      </div>

      <div>
        <p className="font-semibold">Release Date</p>
        <p>{movie.release_date}</p>
      </div>

      <div>
        <p className="font-semibold">Budget</p>
        <p>${movie.budget}</p>
      </div>

      <div>
        <p className="font-semibold">Revenue</p>
        <p>${movie.revenue}</p>
      </div>

    </div>

    <div className="mt-8">
      <span className="mr-2 font-semibold">IMDb:</span>

      <a
        href={`https://www.imdb.com/title/${movie.imdb_id}`}
        target="_blank"
        rel="noreferrer"
        className="text-blue-600 hover:underline dark:text-blue-400"
      >
        {movie.imdb_id}
      </a>
    </div>

  </div>

</div>
    </section>
  );
}

