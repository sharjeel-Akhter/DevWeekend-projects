import Card from "../Components/Card";
import { useFetch } from "../hooks/useFetch";
import { useSearchParams } from "react-router";
import { useTitle } from "../hooks/useTitle";

export function Search({apiPath}) {
    const [searchParam ] = useSearchParams();
    let queryTerm = searchParam.get('q')
   useTitle(`Result for ${queryTerm} | Cinemate`)
   
    const { data: movies } = useFetch(apiPath, queryTerm);

    return (
    
  <>
 <section className="min-h-[80vh] max-w-7xl mx-auto px-5 py-7">
  {movies.length === 0 ? (
    <div className="flex items-center justify-center h-full">
      <p className="text-3xl dark:text-white">
        No results found for "{queryTerm}"
      </p>
    </div>
  ) : (
    <>
      <p className="text-3xl dark:text-white mb-8">
        Results for "{queryTerm}"
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {movies.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  )}
</section>
  
</>

        
    );
}

