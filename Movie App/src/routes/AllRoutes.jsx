import { Routes, Route } from 'react-router'
import { MovieDetail, MovieList, PageNotFound, Search } from '../Pages'

export const AllRoutes = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<MovieList />} />               
                <Route path='movies/top' element={<MovieList />} />
                <Route path='movies/upcoming' element={<MovieList />} />
                <Route path='movies/popular' element={<MovieList />} />
                <Route path='movie/:id' element={<MovieDetail />} />
                <Route path='*' element={<PageNotFound />} />
                <Route path='search?' element={<Search />} />
            </Routes>
        </>
    )
}

