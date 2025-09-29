import { createContext } from "react";
import type { ReactNode } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchGenres } from "../api/tmdb";

type GenreMap = Record<number, string>;

const GenreContext = createContext<GenreMap>({});

export const GenreProvider = ({ children }: { children: ReactNode }) => {
  const { data: genresMap = {} } = useQuery({
    queryKey: ["genres"],
    queryFn: fetchGenres,
  });

  return (
    <GenreContext.Provider value={genresMap}>{children}</GenreContext.Provider>
  );
};
