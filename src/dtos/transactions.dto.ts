import { z } from 'zod';
import { TransactionType } from '../entities/transactions.entity';

export const createTransactionsSchema = {
  title: z.string().min(1),
  amount: z.number().int().positive(),
  type: z.nativeEnum(TransactionType),
  date: z.coerce.date(),
  categoryId: z.string(),
};

const createTransaction = z.object(createTransactionsSchema);
export type CreateTransactionDTO = z.infer<typeof createTransaction>;
