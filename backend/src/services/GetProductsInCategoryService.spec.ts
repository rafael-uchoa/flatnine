import mongoose from 'mongoose';
import Product from '@models/Product';
import GetProductsInCategoryService from './GetProductsInCategoryService';

const testProduct = {
  name: 'Test Product',
  price: 77,
  category: 'Test Category',
};

describe('DeleteProductService Test', () => {
  beforeAll(async () => {
    if (!process.env.MONGO_URL)
      throw new Error('MongoDB server not initialized');

    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
  });

  afterAll(async () => await mongoose.connection.close());

  beforeEach(async () => await Product.deleteMany({}));

  it('should get product in category successfully', async () => {
    const createdProduct = await Product.create(testProduct);

    const res = await GetProductsInCategoryService.run(createdProduct.category);

    expect(res[0].__v).toBeDefined();
    expect(res[0]._id).toBeDefined();
    expect(res[0].createdAt).toBeDefined();
    expect(res[0].name).toBe('Test Product');
    expect(res[0].price).toBe(77);
    expect(res[0].category).toBe('Test Category');
  });

  it('should not find products in empty category', async () => {
    try {
      await GetProductsInCategoryService.run('unexistingCategory');
    } catch (error) {
      expect(error.message).toBe('No products found in this category.');
    }
  });
});
