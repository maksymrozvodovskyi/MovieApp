export const getGenres = (
  ids: number[] | undefined,
  genresMap: Record<number, string>
) => ids?.map((id) => genresMap[id]).join(", ") || "—";
