import { useState, useEffect } from "react";

export const  useFetch = (apiPath, queryTerm) => {
    const [data, setData] = useState([]);
    let url = `https://api.themoviedb.org/3/${apiPath}?api_key=${import.meta.env.VITE_API_KEY}&query=${queryTerm}`
    console.log(url)
      useEffect(()=>{
        async function fetchMovies() {
            let res = await fetch(url);
            let json = await res.json();
            setData(json.results || [])
            console.log(json.results)
        }
        fetchMovies(url);
    },[apiPath, queryTerm])

    return {data}
} 