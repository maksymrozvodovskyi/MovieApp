import styles from "../SearchForm/SearchForm.module.css";

interface FormButtonProps {
  type?: "button" | "submit";
  onClick?: () => void;
  children: React.ReactNode;
}

export const FormButton = ({
  type = "button",
  onClick,
  children,
}: FormButtonProps) => (
  <button type={type} className={styles.button} onClick={onClick}>
    {children}
  </button>
);
