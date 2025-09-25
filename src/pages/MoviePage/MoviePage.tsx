import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchMovieDetails, fetchRecommendations } from "../../api/tmdb";
import { MovieDetails } from "../../components/MovieDetails/MovieDetails";
import { Recommendations } from "../../components/Recommendations/Recommendations";

export const MoviePage = () => {
  const { id } = useParams<{ id: string }>();

  const { data: movie, isLoading } = useQuery({
    queryKey: ["movie", id],
    queryFn: () => fetchMovieDetails(id!),
    enabled: !!id,
  });

  const { data: recommendations = [] } = useQuery({
    queryKey: ["recommendations", id],
    queryFn: () => fetchRecommendations(id!),
    enabled: !!id,
  });

  if (isLoading) return <p>Loading...</p>;
  if (!movie) return <p>Movie not found.</p>;

  return (
    <div>
      <MovieDetails movie={movie} />
      <Recommendations movies={recommendations} genresMap={{}} />
    </div>
  );
};
