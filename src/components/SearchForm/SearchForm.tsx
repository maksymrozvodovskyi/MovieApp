import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import styles from "./SearchForm.module.css";
import { searchSchema, type SearchFormValues } from "../../shema/validation";
import { FormButton } from "../FormButton/FormButton";
import { TextInput } from "../TextInput/TextInput";

interface SearchFormProps {
  onSearch: (query: string) => void;
}

export const SearchForm = ({ onSearch }: SearchFormProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SearchFormValues>({
    resolver: zodResolver(searchSchema),
  });

  const onSubmit = (data: SearchFormValues) => onSearch(data.query);

  const handleReset = () => {
    reset({ query: "" });
    onSearch("");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <TextInput placeholder="Search movies..." register={register("query")} />
      <div className={styles.buttons}>
        <FormButton type="submit">Search</FormButton>
        <FormButton type="button" onClick={handleReset}>
          Reset
        </FormButton>
      </div>
      {errors.query && <p className={styles.error}>{errors.query.message}</p>}
    </form>
  );
};
