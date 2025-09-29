import { useFavorites } from "../../hooks/useFavorites";
import { MovieCard } from "../../components/MovieCard/MovieCard";
import styles from "./FavoritePage.module.css";

export const Favorites = () => {
  const { favorites } = useFavorites();

  return (
    <div className={styles.favoritesPage}>
      <h1 className={styles.title}>Favorites</h1>
      {favorites.length === 0 && (
        <p className={styles.emptyText}>No favorites yet</p>
      )}
      <div className={styles.favoritesList}>
        {favorites.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};
