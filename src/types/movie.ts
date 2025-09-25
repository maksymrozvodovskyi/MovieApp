export interface Movie {
  id: number;
  title: string;
  poster_path: string | null;
  overview: string;
  genre_ids: number[];
  release_date?: string;
  vote_average?: number;
}

export interface Genre {
  id: number;
  name: string;
}

export interface MovieDetails extends Movie {
  genres: Genre[];
  release_date: string;
  runtime: number;
}

export interface MoviesResponse {
  results: Movie[];
  page: number;
  total_pages: number;
}
