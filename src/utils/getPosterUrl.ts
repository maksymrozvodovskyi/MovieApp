export const getPosterUrl = (path?: string | null) =>
  path
    ? `https://image.tmdb.org/t/p/w500${path}`
    : "https://via.placeholder.com/276x368?text=No+Image";
