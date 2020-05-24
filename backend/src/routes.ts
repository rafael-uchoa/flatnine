import Router from 'express';
import {
  getProducts,
  createProduct,
  deleteProduct,
} from './controllers/product.controller';

const routes = Router();

export default routes
  .get('/api', getProducts)
  .post('/api', createProduct)
  .delete('/api/:id', deleteProduct);
