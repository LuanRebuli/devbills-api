import { CategoriesRepository } from '../database/repositories/categories.repository';
import { TransactionsRepository } from '../database/repositories/transactions.repository';
import { CategoryModel } from '../database/schemas/category.schema';
import { TransactionModel } from '../database/schemas/transactions.schema';
import { TransactionService } from '../services/transactions.service';

export class TransactionsFactory {
  private static transactionsService: TransactionService;

  static getServiceInstance() {
    if (this.transactionsService) {
      return this.transactionsService;
    }

    const repository = new TransactionsRepository(TransactionModel);
    const categoriesRepository = new CategoriesRepository(CategoryModel);
    const service = new TransactionService(repository, categoriesRepository);

    this.transactionsService = service;

    return service;
  }
}
