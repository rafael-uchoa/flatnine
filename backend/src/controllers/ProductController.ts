import { Request, Response } from 'express';

import Product from '@models/Product';

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
      const product = await Product.find();

      res.status(200).json(product);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  // @desc		Get all products in a category
  // @route		GET /api/:category
  public async getProductsInCategory(req: Request, res: Response) {
    try {
      const product = await Product.find({ category: req.params.category });

      if (product.length === 0) {
        res.status(400).json('Category not found');
        return;
      }

      res.status(200).json(product);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  // @desc		Create a product
  // @route		POST /api
  public async createProduct(req: Request, res: Response) {
    try {
      const product = await Product.create(req.body);

      res.status(201).json(product);
    } catch (err) {
      res.status(400).json(err);
    }
  }

  // @desc		Delete a product
  // @route		DELETE /api/:id
  public async deleteProduct(req: Request, res: Response) {
    try {
      const product = await Product.findByIdAndRemove(req.params.id);

      if (!product) {
        res.status(400).json('Product not found');
        return;
      }

      res.status(200).json(product);
    } catch (err) {
      res.status(404).json(err);
    }
  }
}

export default new ProductController();
