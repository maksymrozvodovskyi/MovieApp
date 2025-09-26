import { useFavorites } from "../../hooks/useFavorites";
import styles from "./MovieDetails.module.css";
import { getPosterUrl } from "../../utils/getPosterUrl";
import { getGenresDetails } from "../../utils/getGenresDetails";
import { FavoriteBtn } from "../FavoriteBtn/FavoriteBtn";
import { getYear } from "../../utils/getYear";
import { getRating } from "../../utils/getRating";
import type { MovieDetailsProps } from "../../types/components";

export const MovieDetails = ({ movie }: MovieDetailsProps) => {
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  const toggleFavorite = () => {
    if (isFavorite(movie.id)) removeFavorite(movie.id);
    else addFavorite(movie);
  };

  return (
    <div className={styles.detailsWrapper}>
      <img
        src={getPosterUrl(movie.poster_path)}
        alt={movie.title}
        className={styles.poster}
      />
      <div className={styles.info}>
        <h1 className={styles.title}>{movie.title}</h1>
        <p className={styles.genres}>{getGenresDetails(movie.genres)}</p>
        <p className={styles.overview}>{movie.overview}</p>
        <div className={styles.meta}>
          <span className={styles.year}>{getYear(movie.release_date)}</span>
          <span className={styles.rating}>{getRating(movie.vote_average)}</span>
        </div>
        <FavoriteBtn isFav={isFavorite(movie.id)} onClick={toggleFavorite} />
      </div>
    </div>
  );
};
