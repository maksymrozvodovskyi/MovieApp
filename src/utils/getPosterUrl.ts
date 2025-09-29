import noImage from "../assets/no-image.jpg";

export const getPosterUrl = (path?: string | null) =>
  path ? `https://image.tmdb.org/t/p/w500${path}` : noImage;
