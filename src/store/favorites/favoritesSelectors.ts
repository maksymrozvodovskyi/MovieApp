import { useFavoritesStore } from "./favoritesStore";

export const useAddToFavorites = () =>
  useFavoritesStore((state) => state.addToFavorites);

export const useRemoveFromFavorites = () =>
  useFavoritesStore((state) => state.removeFromFavorites);

export const useIsFavorite = () =>
  useFavoritesStore((state) => state.isFavorite);
