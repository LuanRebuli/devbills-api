import { Router } from 'express';

import { createTransactionsSchema } from '../dtos/transactions.dto';
import { TransactionsController } from '../controllers/transactions.controller';
import { TransactionsFactory } from '../factories/transactions.factory';
import { ParamsType, validator } from '../middlewares/validator.middleware';

export const transactionsRoutes = Router();

const controller = new TransactionsController(
  TransactionsFactory.getServiceInstance(),
);

transactionsRoutes.post(
  '/',
  validator({
    schema: createTransactionsSchema,
    type: ParamsType.BODY,
  }),
  controller.create,
);
