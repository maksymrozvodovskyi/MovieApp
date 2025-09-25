import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import styles from "./SearchForm.module.css";

const schema = z.object({
  query: z.string().min(1, "Enter a search query"),
});

type FormValues = z.infer<typeof schema>;

interface SearchFormProps {
  onSearch: (query: string) => void;
}

export const SearchForm = ({ onSearch }: SearchFormProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormValues) => onSearch(data.query);

  const handleReset = () => {
    reset({ query: "" });
    onSearch("");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <input
        {...register("query")}
        placeholder="Search movies..."
        className={styles.input}
      />
      <div className={styles.buttons}>
        <button type="submit" className={styles.button}>
          Search
        </button>
        <button type="button" className={styles.button} onClick={handleReset}>
          Reset
        </button>
      </div>
      {errors.query && <p className={styles.error}>{errors.query.message}</p>}
    </form>
  );
};
