import { useState, useEffect } from "react";

export const  useFetch = (apiPath) => {
    const [data, setData] = useState([]);
   const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${import.meta.env.VITE_API_KEY}`
      useEffect(()=>{
        async function fetchMovies() {
            let res = await fetch(url);
            let json = await res.json();
            setData(json.results)
        }
        fetchMovies(url);
    },[apiPath])

    return {data}
} 