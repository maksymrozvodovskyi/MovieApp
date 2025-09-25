import type { Movie } from "../../types/movie";
import { Link } from "react-router-dom";
import { useFavorites } from "../../hooks/useFavorites";
import styles from "./MovieCard.module.css";

interface MovieCardProps {
  movie: Movie;
  genresMap: Record<number, string>;
}

export const MovieCard = ({ movie, genresMap }: MovieCardProps) => {
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  const toggleFavorite = () => {
    if (isFavorite(movie.id)) removeFavorite(movie.id);
    else addFavorite(movie);
  };

  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "https://via.placeholder.com/276x368?text=No+Image";

  const genres = movie.genre_ids?.map((id) => genresMap[id]).join(", ") || "—";

  return (
    <div className={styles.card}>
      <div className={styles.imgWrapper}>
        <Link to={`/movie/${movie.id}`}>
          <img src={posterUrl} alt={movie.title} className={styles.img} />
        </Link>

        <button className={styles.favoriteBtn} onClick={toggleFavorite}>
          <svg width={24} height={24}>
            <use
              href={
                isFavorite(movie.id)
                  ? "/src/assets/icons.svg#icon-heart-fill"
                  : "/src/assets/icons.svg#icon-heart-nofill"
              }
            />
          </svg>
        </button>
      </div>

      <div className={styles.textWrapper}>
        <Link to={`/movie/${movie.id}`} className={styles.name}>
          {movie.title}
        </Link>

        <ul className={styles.details}>
          <li className={styles.year}>
            {movie.release_date?.slice(0, 4) || "—"}
          </li>
          <li className={styles.rating}>
            ⭐ {movie.vote_average?.toFixed(1) || "—"}
          </li>
          <li>{genres}</li>
        </ul>

        <Link to={`/movie/${movie.id}`} className={styles.learnMoreBtn}>
          Learn More
        </Link>
      </div>
    </div>
  );
};
