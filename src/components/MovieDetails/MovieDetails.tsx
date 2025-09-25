import type { Movie, Genre } from "../../types/movie";
import { useFavorites } from "../../hooks/useFavorites";
import styles from "./MovieDetails.module.css";

interface MovieDetailsProps {
  movie: Movie & { genres: Genre[] };
}

export const MovieDetails = ({ movie }: MovieDetailsProps) => {
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  const toggleFavorite = () => {
    if (isFavorite(movie.id)) removeFavorite(movie.id);
    else addFavorite(movie);
  };

  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "https://via.placeholder.com/300x450?text=No+Image";

  return (
    <div className={styles.detailsWrapper}>
      <img src={posterUrl} alt={movie.title} className={styles.poster} />
      <div className={styles.info}>
        <h1 className={styles.title}>{movie.title}</h1>
        <p className={styles.genres}>
          {movie.genres.map((g) => g.name).join(", ")}
        </p>
        <p className={styles.overview}>{movie.overview}</p>
        <div className={styles.meta}>
          <span className={styles.year}>{movie.release_date?.slice(0, 4)}</span>
          <span className={styles.rating}>
            ⭐ {movie.vote_average?.toFixed(1)}
          </span>
        </div>
        <button className={styles.favoriteBtn} onClick={toggleFavorite}>
          {isFavorite(movie.id) ? "Remove from Favorites" : "Add to Favorites"}
        </button>
      </div>
    </div>
  );
};
