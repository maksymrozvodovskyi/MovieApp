export const getYear = (releaseDate?: string) =>
  releaseDate?.slice(0, 4) || "—";
