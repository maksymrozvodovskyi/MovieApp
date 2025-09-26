import type { UseFormRegisterReturn } from "react-hook-form";

export interface SearchFormProps {
  onSearch: (query: string) => void;
}

export interface TextInputProps {
  placeholder?: string;
  register: UseFormRegisterReturn;
}
