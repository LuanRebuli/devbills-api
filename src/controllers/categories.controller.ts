import { NextFunction, Request, Response } from 'express';

import { CategoriesService } from '../services/categories.service';
import { CategoryModel } from '../database/schemas/category.schema';
import { CategoriesRepository } from '../database/repositories/categories.repository';
import { CreateCategoryDTO } from '../dtos/categories.dto';

export class CategoriesController {
  async create(
    req: Request<unknown, unknown, CreateCategoryDTO>,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const { title, color } = req.body;

      const repository = new CategoriesRepository(CategoryModel);
      const service = new CategoriesService(repository);

      const result = await service.create({ title, color });

      return res.status(201).json(result);
    } catch (err) {
      next(err);
    }
  }
}
