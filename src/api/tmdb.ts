import axios from "axios";
import type { Genre, MovieDetails, MoviesResponse } from "../types/movie";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export const tmdb = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});

export const getPopularMovies = (page = 1) =>
  tmdb.get<MoviesResponse>("/movie/popular", { params: { page } });

export const searchMovies = (query: string, page = 1) =>
  tmdb.get<MoviesResponse>("/search/movie", { params: { query, page } });

export const getGenres = () =>
  tmdb.get<{ genres: Genre[] }>("/genre/movie/list");

export const getMovieDetails = (id: number) =>
  tmdb.get<MovieDetails>(`/movie/${id}`);

export const getRecommendations = (id: number) =>
  tmdb.get<MoviesResponse>(`/movie/${id}/recommendations`);
