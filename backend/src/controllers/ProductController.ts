import { Request, Response } from 'express';

import GetProductsService from '@services/GetProductsService';
import GetProductsInCategoryService from '@services/GetProductsInCategoryService';
import CreateProductService from '@services/CreateProductService';
import DeleteProductService from '@services/DeleteProductService';

interface IProductController {
  getProducts(req: Request, res: Response): Promise<void>;
  getProductsInCategory(req: Request, res: Response): Promise<void>;
  createProduct(req: Request, res: Response): Promise<void>;
  deleteProduct(req: Request, res: Response): Promise<void>;
}

class ProductController implements IProductController {
  // @desc		Get all products
  // @route		GET /api
  public async getProducts(req: Request, res: Response) {
    try {
      const products = await GetProductsService.run();

      res.status(200);
      res.json({ success: true, products });
    } catch (error) {
      res.status(500);
      res.json({ success: false, error: error.message });
    }
  }

  // @desc		Get all products in a category
  // @route		GET /api/:category
  public async getProductsInCategory(req: Request, res: Response) {
    try {
      const products = await GetProductsInCategoryService.run(
        req.params.category
      );

      res.status(200);
      res.json({ success: true, products });
    } catch (error) {
      res.status(500);
      res.json({ success: false, error: error.message });
    }
  }

  // @desc		Create a product
  // @route		POST /api
  public async createProduct(req: Request, res: Response) {
    try {
      const { name, price, category } = req.body;

      const product = await CreateProductService.run(name, price, category);

      res.status(201);
      res.json({ success: true, product });
    } catch (error) {
      res.status(400);
      res.json({ success: false, error: error.message });
    }
  }

  // @desc		Delete a product
  // @route		DELETE /api/:id
  public async deleteProduct(req: Request, res: Response) {
    try {
      const product = await DeleteProductService.run(req.params.id);

      res.status(200);
      res.json({ success: true, product });
    } catch (error) {
      res.status(404);
      res.json({ success: false, error: error.message });
    }
  }
}

export default new ProductController();
