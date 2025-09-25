import axios from "axios";
import type {
  Movie,
  Genre,
  MovieDetails,
  MoviesResponse,
} from "../types/movie";

const API_TOKEN = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export const tmdb = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${API_TOKEN}`,
    accept: "application/json",
  },
});

export const fetchPopularMovies = async (page = 1): Promise<Movie[]> => {
  const { data } = await tmdb.get<MoviesResponse>("/movie/popular", {
    params: { page },
  });
  return data.results;
};

export const fetchGenres = async (): Promise<Record<number, string>> => {
  const { data } = await tmdb.get<{ genres: Genre[] }>("/genre/movie/list");
  return data.genres.reduce((acc: Record<number, string>, g) => {
    acc[g.id] = g.name;
    return acc;
  }, {});
};

export const searchMovies = async (
  query: string,
  page = 1
): Promise<Movie[]> => {
  const { data } = await tmdb.get<MoviesResponse>("/search/movie", {
    params: { query, page },
  });
  return data.results;
};

export const fetchMovieDetails = async (id: string): Promise<MovieDetails> => {
  const { data } = await tmdb.get<MovieDetails>(`/movie/${id}`);
  return data;
};

export const fetchRecommendations = async (id: string): Promise<Movie[]> => {
  const { data } = await tmdb.get<MoviesResponse>(
    `/movie/${id}/recommendations`
  );
  return data.results;
};
