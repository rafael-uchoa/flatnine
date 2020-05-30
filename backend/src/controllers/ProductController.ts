import { Request, Response } from 'express';

import Product from '../models/Product';

class ProductController {
  // @desc		Get all products
  // @route		GET /api
  async getProducts(req: Request, res: Response) {
    try {
      const product = await Product.find();
      return res.status(200).json(product);
    } catch (err) {
      return res.status(500).json({ message: err });
    }
  }

  // @desc		Create a product
  // @route		POST /api
  async createProduct(req: Request, res: Response) {
    try {
      const product = await Product.create(req.body);
      return res.status(201).json(product);
    } catch (err) {
      return res.status(400).json({ message: err });
    }
  }

  // @desc		Delete a product
  // @route		DELETE /api/:id
  async deleteProduct(req: Request, res: Response) {
    try {
      const product = await Product.findByIdAndRemove(req.params.id);
      return res.status(200).json(product);
    } catch (err) {
      return res.status(404).json({ message: err });
    }
  }
}

export default new ProductController();
