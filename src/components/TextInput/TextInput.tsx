import styles from "../SearchForm/SearchForm.module.css";
import type { TextInputProps } from "../../types/forms";

export const TextInput = ({ placeholder, register }: TextInputProps) => (
  <input {...register} placeholder={placeholder} className={styles.input} />
);
