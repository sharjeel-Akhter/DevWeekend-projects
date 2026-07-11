import { Routes, Route } from 'react-router'
import { MovieDetail, MovieList, PageNotFound, Search } from '../Pages'

export const AllRoutes = () => {
    return (
        <>
        <div className='dark:bg-gray-800 dark:text-white'>
            <Routes>
                <Route path='/' element={<MovieList apiPath = 'movie/now_playing'/>} />
                <Route path='movies/upcoming' element={<MovieList apiPath = 'movie/upcoming'/>} />
                <Route path='movies/popular' element={<MovieList apiPath = 'movie/popular'/>} />
                <Route path='movies/top' element={<MovieList apiPath = 'movie/top_rated'/>} />
                <Route path='movie/:id' element={<MovieDetail />} />
                <Route path='*' element={<PageNotFound />} />
                <Route path='search?' element={<Search />} />
            </Routes>
        </div>
        </>
    )
}

