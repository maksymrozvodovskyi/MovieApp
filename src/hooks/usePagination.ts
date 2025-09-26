import { useState } from "react";

export const usePagination = (itemsLength: number) => {
  const [page, setPage] = useState(1);

  const hasPrev = page > 1;
  const hasNext = itemsLength > 0;

  const prev = () => {
    if (hasPrev) setPage((p) => p - 1);
  };

  const next = () => {
    if (hasNext) setPage((p) => p + 1);
  };

  return { page, setPage, hasPrev, hasNext, prev, next };
};
