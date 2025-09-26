import styles from "../MovieCard/MovieCard.module.css";

interface FavoriteBtnProps {
  isFav: boolean;
  onClick: () => void;
}

export const FavoriteBtn = ({ isFav, onClick }: FavoriteBtnProps) => (
  <button className={styles.favoriteBtn} onClick={onClick}>
    <svg width={24} height={24}>
      <use
        href={`/src/assets/icons.svg#icon-heart${isFav ? "-fill" : "-nofill"}`}
      />
    </svg>
  </button>
);
