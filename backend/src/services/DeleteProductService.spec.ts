import mongoose from 'mongoose';
import Product from '@models/Product';
import DeleteProductService from './DeleteProductService';

const testProduct = {
  name: 'Test Product',
  price: 77,
  category: 'Test Category',
  imageUrl: 'http://testproduct.com/testimage.jpg',
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

  it('should delete product successfully', async () => {
    const createdProduct = await Product.create(testProduct);

    const res = await DeleteProductService.run(createdProduct._id);

    expect(res.__v).toBeDefined();
    expect(res._id).toBeDefined();
    expect(res.createdAt).toBeDefined();
    expect(res.name).toBe('Test Product');
    expect(res.price).toBe(77);
    expect(res.category).toBe('Test Category');
    expect(res.imageUrl).toBe('http://testproduct.com/testimage.jpg');
  });

  it('should not delete product that does not exists', async () => {
    try {
      await DeleteProductService.run('unexistingId');
    } catch (error) {
      expect(error.message).toBe('Product not found.');
    }
  });
});
