import Card from "../Components/Card";
import { useFetch } from "../hooks/useFetch";
import { useTitle } from "../hooks/useTitle";
import { RiLoader4Fill } from "react-icons/ri";

export function MovieList({ apiPath, title }) {
    useTitle(title);

    const { data: movies, loading, error } = useFetch(apiPath);
    if (loading) {
        return (
            <div className="flex h-screen items-center justify-center">
                <RiLoader4Fill className="text-5xl animate-spin text-blue-600" />
            </div>
        )}

    if (error) {
        return (
            <div className="flex h-screen items-center justify-center">
                <p className="text-red-500 text-lg">{error}</p>
            </div>
        )}

    return (
        <section className="m-auto py-7 max-w-7xl">
            <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
                {movies.map((movie) => (
                    <Card key={movie.id} movie={movie} />
                ))}
            </div>
        </section>
    );
}

