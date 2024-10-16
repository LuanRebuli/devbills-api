import { z } from 'zod';

export const createCategorySchema = {
  title: z.string().min(1),
  color: z
    .string()
    .regex(/^#[A-Fa-f0-9]{6}$/)
    .min(1),
};

const createCategoryObject = z.object(createCategorySchema);
export type CreateCategoryDTO = z.infer<typeof createCategoryObject>;
