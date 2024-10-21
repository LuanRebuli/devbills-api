import { z } from 'zod';
import { TransactionType } from '../entities/transactions.entity';
import { title } from 'process';

export const createTransactionsSchema = {
  title: z.string().min(1),
  amount: z.number().int().positive(),
  type: z.nativeEnum(TransactionType),
  date: z.coerce.date(),
  categoryId: z.string().length(24),
};

const createTransaction = z.object(createTransactionsSchema);
export type CreateTransactionDTO = z.infer<typeof createTransaction>;

export const indexTransactionsSchema = {
  title: z.string().optional(),
  categoryId: z.string().length(24).optional(),
  beginDate: z.coerce.date().optional(),
  endDate: z.coerce.date().optional(),
};

const indexTransactionsObject = z.object(indexTransactionsSchema);
export type IndexTransactionsDTO = z.infer<typeof indexTransactionsObject>;
