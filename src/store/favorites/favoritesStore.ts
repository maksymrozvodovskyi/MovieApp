import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { MovieDetails } from "../../types/movie";

interface FavoritesState {
  favorites: MovieDetails[];
  addToFavorites: (movie: MovieDetails) => void;
  removeFromFavorites: (id: number) => void;
  isFavorite: (id: number) => boolean;
}

export const useFavoritesStore = create<FavoritesState>()(
  persist(
    (set, get) => ({
      favorites: [],
      addToFavorites: (movie) =>
        set({ favorites: [...get().favorites, movie] }),
      removeFromFavorites: (id) =>
        set({ favorites: get().favorites.filter((m) => m.id !== id) }),
      isFavorite: (id) => get().favorites.some((m) => m.id === id),
    }),
    { name: "favorites" }
  )
);
