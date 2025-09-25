import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchPopularMovies, fetchGenres, searchMovies } from "../../api/tmdb";
import { SearchForm } from "../../components/SearchForm/SearchForm";
import { MovieList } from "../../components/MovieList/MovieList";
import { Pagination } from "../../components/Pagination/Pagination";

export const HomePage = () => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  const { data: genresMap = {} } = useQuery({
    queryKey: ["genres"],
    queryFn: fetchGenres,
  });

  const { data: movies = [], isLoading } = useQuery({
    queryKey: ["movies", query, page],
    queryFn: () =>
      query ? searchMovies(query, page) : fetchPopularMovies(page),
  });

  const handlePrev = () => {
    if (page > 1) setPage((p) => p - 1);
  };

  const handleNext = () => {
    if (movies.length > 0) setPage((p) => p + 1);
  };

  return (
    <div>
      <SearchForm
        onSearch={(q) => {
          setQuery(q);
          setPage(1);
        }}
      />
      {isLoading && <p>Loading...</p>}
      <MovieList movies={movies.slice(0, 18)} genresMap={genresMap} />
      <Pagination
        page={page}
        hasPrev={page > 1}
        hasNext={true}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </div>
  );
};
