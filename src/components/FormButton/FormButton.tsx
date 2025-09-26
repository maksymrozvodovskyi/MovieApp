import styles from "../SearchForm/SearchForm.module.css";
import type { FormButtonProps } from "../../types/ui";

export const FormButton = ({
  type = "button",
  onClick,
  children,
}: FormButtonProps) => (
  <button type={type} className={styles.button} onClick={onClick}>
    {children}
  </button>
);
