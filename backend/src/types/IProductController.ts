import { Request, Response } from 'express';

export default interface IProductController {
  getProducts(req: Request, res: Response): Promise<void>;
  getProductsInCategory(req: Request, res: Response): Promise<void>;
  createProduct(req: Request, res: Response): Promise<void>;
  deleteProduct(req: Request, res: Response): Promise<void>;
}
