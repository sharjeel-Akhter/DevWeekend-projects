import { Routes, Route } from 'react-router'
import { MovieDetail, MovieList, PageNotFound, Search } from '../Pages'

export const AllRoutes = () => {
    return (
        <>
        <div className='dark:bg-gray-800 dark:text-white'>
            <Routes>
                <Route path='/' element={<MovieList apiPath = 'movie/now_playing' title = 'Home | Cinemate'/>} />
                <Route path='movies/upcoming' element={<MovieList apiPath = 'movie/upcoming' title = 'Upcoming | Cinemate'/>} />
                <Route path='movies/popular' element={<MovieList apiPath = 'movie/popular' title = 'Popular | Cinemate'/>} />
                <Route path='movies/top' element={<MovieList apiPath = 'movie/top_rated' title = 'Top Rated | Cinemate'/>} />
                <Route path='movie/:id' element={<MovieDetail />} />
                <Route path='*' element={<PageNotFound />} />
                <Route path='/search' element={<Search apiPath = 'search/movie'/>} />
            </Routes>
        </div>
        </> 
    )
}

