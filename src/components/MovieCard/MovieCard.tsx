import { useFavorites } from "../../hooks/useFavorites";
import { useGenres } from "../../context/genreContext";
import { getPosterUrl } from "../../utils/getPosterUrl";
import { getGenres } from "../../utils/getGenres";
import { FavoriteBtn } from "../FavoriteBtn/FavoriteBtn";
import { getYear } from "../../utils/getYear";
import { getRating } from "../../utils/getRating";
import type { MovieCardProps } from "../../types/components";
import styles from "./MovieCard.module.css";
import { Link } from "react-router-dom";

export const MovieCard = ({ movie }: Omit<MovieCardProps, "genresMap">) => {
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();
  const genresMap = useGenres();

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
          <li>{getGenres(movie.genre_ids, genresMap)}</li>
          <li className={styles.yearRating}>
            <span className={styles.year}>{getYear(movie.release_date)}</span>
            <span className={styles.rating}>
              {getRating(movie.vote_average)}
            </span>
          </li>
        </ul>
        <Link to={`/movie/${movie.id}`} className={styles.learnMoreBtn}>
          Learn More
        </Link>
      </div>
    </div>
  );
};
