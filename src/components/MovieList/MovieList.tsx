import type { Movie } from "../../types/movie";
import { MovieCard } from "../MovieCard/MovieCard";
import styles from "./MovieList.module.css";

interface MovieListProps {
  movies: Movie[];
  genresMap: Record<number, string>;
}

export const MovieList = ({ movies, genresMap }: MovieListProps) => {
  if (!movies.length)
    return <p className={styles.noMovies}>No movies found.</p>;

  return (
    <div className={styles.list}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} genresMap={genresMap} />
      ))}
    </div>
  );
};
