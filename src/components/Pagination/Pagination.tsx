import styles from "./Pagination.module.css";
import type { PaginationProps } from "../../types/components";

export const Pagination = ({
  page,
  hasPrev,
  hasNext,
  onPrev,
  onNext,
}: PaginationProps) => {
  return (
    <div className={styles.pagination}>
      <button className={styles.button} onClick={onPrev} disabled={!hasPrev}>
        Prev
      </button>
      <span className={styles.pageInfo}>{page}</span>
      <button className={styles.button} onClick={onNext} disabled={!hasNext}>
        Next
      </button>
    </div>
  );
};
