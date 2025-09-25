import type { Movie } from "../types/movie";
import { usePersistedState } from "./usePersistedState";

export const useFavorites = () => {
  const [favorites, setFavorites] = usePersistedState<Movie[]>(
    "favoriteMovies",
    []
  );

  const addFavorite = (movie: Movie) => {
    if (!favorites.find((m) => m.id === movie.id)) {
      setFavorites([...favorites, movie]);
    }
  };

  const removeFavorite = (id: number) => {
    setFavorites(favorites.filter((m) => m.id !== id));
  };

  const isFavorite = (id: number) => favorites.some((m) => m.id === id);

  return { favorites, addFavorite, removeFavorite, isFavorite };
};
