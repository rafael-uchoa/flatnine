import Router from 'express';
import ProductController from '@controllers/ProductController';

const router = Router();

router.get('/api', ProductController.getProducts);
router.get('/api/:category', ProductController.getProductsInCategory);
router.post('/api', ProductController.createProduct);
router.delete('/api/:id', ProductController.deleteProduct);

export default router;
