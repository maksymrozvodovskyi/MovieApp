import type { Movie } from "../../types/movie";
import { Link } from "react-router-dom";
import { useFavorites } from "../../hooks/useFavorites";
import styles from "./MovieCard.module.css";
import { getPosterUrl } from "../../utils/getPosterUrl";
import { getGenres } from "../../utils/getGenres";
import { FavoriteBtn } from "../FavoriteBtn/FavoriteBtn";

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

  return (
    <div className={styles.card}>
      <div className={styles.imgWrapper}>
        <img
          src={getPosterUrl(movie.poster_path)}
          alt={movie.title}
          className={styles.img}
        />
        <FavoriteBtn isFav={isFavorite(movie.id)} onClick={toggleFavorite} />
      </div>

      <div className={styles.textWrapper}>
        <div className={styles.name}>{movie.title}</div>

        <ul className={styles.details}>
          <li className={styles.year}>
            {movie.release_date?.slice(0, 4) || "—"}
          </li>
          <li className={styles.rating}>
            ⭐ {movie.vote_average?.toFixed(1) || "—"}
          </li>
          <li>{getGenres(movie.genre_ids, genresMap)}</li>
        </ul>

        <Link to={`/movie/${movie.id}`} className={styles.learnMoreBtn}>
          Learn More
        </Link>
      </div>
    </div>
  );
};
