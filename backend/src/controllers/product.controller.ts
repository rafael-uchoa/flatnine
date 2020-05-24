import { Request, Response } from 'express';
import Product, { IProduct } from '../models/product.model';

// @desc		Get all products
// @route		GET /api
const getProducts = async (req: Request, res: Response) => {
  try {
    const product: IProduct[] = await Product.find();
    res.status(200);
    res.json(product);
  } catch (err) {
    res.status(500);
    res.json({ message: err });
  }
};

// @desc		Create a product
// @route		POST /api
const createProduct = async (req: Request, res: Response) => {
  try {
    const product: IProduct = await Product.create(req.body);
    res.status(201);
    res.json(product);
  } catch (err) {
    res.status(400);
    res.json({ message: err });
  }
};

// @desc		Delete a product
// @route		DELETE /api/:id
const deleteProduct = async (req: Request, res: Response) => {
  try {
    const product: IProduct | null = await Product.findByIdAndRemove(
      req.params.id
    );
    res.status(200);
    res.json(product);
  } catch (err) {
    res.status(404);
    res.json({ message: err });
  }
};

export { getProducts, createProduct, deleteProduct };
