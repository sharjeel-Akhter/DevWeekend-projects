import { useState, useEffect } from "react";

export const  useFetch = (apiPath, queryTerm) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    let url = `https://api.themoviedb.org/3/${apiPath}?api_key=${import.meta.env.VITE_API_KEY}&query=${queryTerm}`
  
      useEffect(()=>{
        setLoading(true);
        async function fetchMovies() {
            try {
            let res = await fetch(url);
            let json = await res.json();
            setData(json.results || [])
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }
        fetchMovies(url);
    },[apiPath, queryTerm])

    return {data, loading, error}
} 