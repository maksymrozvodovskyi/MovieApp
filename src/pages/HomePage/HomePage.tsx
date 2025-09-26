import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchPopularMovies, fetchGenres, searchMovies } from "../../api/tmdb";
import { SearchForm } from "../../components/SearchForm/SearchForm";
import { MovieList } from "../../components/MovieList/MovieList";
import { Pagination } from "../../components/Pagination/Pagination";
import { usePagination } from "../../hooks/usePagination";

export const HomePage = () => {
  const [query, setQuery] = useState("");

  const { data: genresMap = {} } = useQuery({
    queryKey: ["genres"],
    queryFn: fetchGenres,
  });

  const { data: movies = [], isLoading } = useQuery({
    queryKey: ["movies", query],
    queryFn: () =>
      query ? searchMovies(query, page) : fetchPopularMovies(page),
  });

  const { page, setPage, hasPrev, hasNext, prev, next } = usePagination(
    movies.length
  );

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
        hasPrev={hasPrev}
        hasNext={hasNext}
        onPrev={prev}
        onNext={next}
      />
    </div>
  );
};
