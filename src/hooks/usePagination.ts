import { useState } from "react";

export const usePagination = (initialPage = 1) => {
  const [page, setPage] = useState(initialPage);

  const prev = () => setPage((p) => Math.max(p - 1, 1));
  const next = () => setPage((p) => p + 1);

  const hasPrev = page > 1;
  const hasNext = true;

  return { page, setPage, prev, next, hasPrev, hasNext };
};
