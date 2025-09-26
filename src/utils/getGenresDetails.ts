export const getGenresDetails = (genres?: { name: string }[]) =>
  genres?.map((g) => g.name).join(", ") || "—";
