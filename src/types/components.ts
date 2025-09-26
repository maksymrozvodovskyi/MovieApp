import type { Movie, Genre } from "./movie";

export interface MovieCardProps {
  movie: Movie;
  genresMap: Record<number, string>;
}

export interface MovieDetailsProps {
  movie: Movie & { genres: Genre[] };
}

export interface MovieListProps {
  movies: Movie[];
  genresMap: Record<number, string>;
}

export interface PaginationProps {
  page: number;
  hasPrev: boolean;
  hasNext: boolean;
  onPrev: () => void;
  onNext: () => void;
}

export interface RecommendationsProps {
  movies: Movie[];
  genresMap: Record<number, string>;
}
