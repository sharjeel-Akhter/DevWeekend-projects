import Card from "../Components/Card";
import { useFetch } from "../hooks/useFetch";
import { useTitle } from "../hooks/useTitle";

export function MovieList({apiPath, title}) {
    useTitle(title);
    
    const {data : movies} = useFetch(apiPath);
    
    return (
            <section className="m-auto py-7 max-w-7xl">
                <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  { movies.map((movie)=>(
                        <Card key={movie.id} movie = {movie}/>
                   ))}
                 
                </div>
            </section>
    );
}

