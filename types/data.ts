import { z } from "zod";

export const TodosType = z.object({
  id: z.number(),
  title: z.string(),
  completed: z.boolean(),
  userId: z.number(),
});

export type Todos = z.infer<typeof TodosType>;
