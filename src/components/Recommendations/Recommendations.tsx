import { MovieList } from "../MovieList/MovieList";
import type { RecommendationsProps } from "../../types/components";
import styles from "./Recommendations.module.css";

export const Recommendations = ({
  movies,
  genresMap,
}: RecommendationsProps) => {
  if (!movies.length) return null;

  return (
    <div className={styles.recommendations}>
      <h2 className={styles.title}>Recommended Movies</h2>
      <div className={styles.moviesGrid}>
        <MovieList movies={movies} genresMap={genresMap} />
      </div>
    </div>
  );
};
