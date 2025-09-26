export const getRating = (voteAverage?: number) =>
  voteAverage != null ? `⭐ ${voteAverage.toFixed(1)}` : "—";
