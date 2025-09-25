import type { Movie } from "../../types/movie";
import { MovieList } from "../MovieList/MovieList";

interface RecommendationsProps {
  movies: Movie[];
  genresMap: Record<number, string>;
}

export const Recommendations = ({
  movies,
  genresMap,
}: RecommendationsProps) => {
  if (!movies.length) return null;

  return (
    <div>
      <h2>Recommended Movies</h2>
      <MovieList movies={movies} genresMap={genresMap} />
    </div>
  );
};
