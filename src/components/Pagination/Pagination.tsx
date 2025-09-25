import styles from "./Pagination.module.css";

interface PaginationProps {
  page: number;
  hasPrev: boolean;
  hasNext: boolean;
  onPrev: () => void;
  onNext: () => void;
}

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
