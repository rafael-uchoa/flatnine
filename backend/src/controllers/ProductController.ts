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
      const products = await Product.find();

      res.status(200);
      res.json({ success: true, products });
    } catch (error) {
      res.status(500);
      res.json({ success: false, error });
    }
  }

  // @desc		Get all products in a category
  // @route		GET /api/:category
  public async getProductsInCategory(req: Request, res: Response) {
    try {
      const { category } = req.params;

      const products = await Product.find({ category });

      if (products.length === 0) {
        res.status(400);
        res.json({ success: false, error: 'Category not found.' });

        return;
      }

      res.status(200);
      res.json({ success: true, products });
    } catch (error) {
      res.status(500);
      res.json({ success: false, error });
    }
  }

  // @desc		Create a product
  // @route		POST /api
  public async createProduct(req: Request, res: Response) {
    try {
      const { name, price, category } = req.body;

      if (!name || !price || !category) {
        res.status(400);
        res.json({ success: false, error: 'Validation error.' });

        return;
      }

      const product = await Product.create({ name, price, category });

      res.status(201);
      res.json({ success: true, product });
    } catch (error) {
      res.status(400);
      res.json({ success: false, error });
    }
  }

  // @desc		Delete a product
  // @route		DELETE /api/:id
  public async deleteProduct(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const product = await Product.findByIdAndRemove(id);

      if (!product) {
        res.status(400);
        res.json({ success: false, error: 'Product not found.' });

        return;
      }

      res.status(200);
      res.json({ success: true, product });
    } catch (error) {
      res.status(404);
      res.json({ success: false, error });
    }
  }
}

export default new ProductController();
