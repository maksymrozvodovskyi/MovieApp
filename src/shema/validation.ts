import { z } from "zod";

export const searchSchema = z.object({
  query: z.string().min(1, "Enter a search query"),
});

export type SearchFormValues = z.infer<typeof searchSchema>;
