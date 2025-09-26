import { MovieList } from "../MovieList/MovieList";
import type { RecommendationsProps } from "../../types/components";

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
