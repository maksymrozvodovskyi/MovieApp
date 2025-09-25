import { useFavorites } from "../../hooks/useFavorites";
import { MovieCard } from "../../components/MovieCard/MovieCard";

export const Favorites = () => {
  const { favorites } = useFavorites();

  return (
    <div>
      <h1>Favorites</h1>
      {favorites.length === 0 && <p>No favorites yet</p>}
      {favorites.map((movie) => (
        <MovieCard key={movie.id} movie={movie} genresMap={{}} />
      ))}
    </div>
  );
};
