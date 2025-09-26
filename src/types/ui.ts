export interface FavoriteBtnProps {
  isFav: boolean;
  onClick: () => void;
}

export interface FormButtonProps {
  type?: "button" | "submit";
  onClick?: () => void;
  children: React.ReactNode;
}
