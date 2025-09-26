import styles from "../SearchForm/SearchForm.module.css";
import type { UseFormRegisterReturn } from "react-hook-form";

interface TextInputProps {
  placeholder?: string;
  register: UseFormRegisterReturn;
}

export const TextInput = ({ placeholder, register }: TextInputProps) => (
  <input {...register} placeholder={placeholder} className={styles.input} />
);
