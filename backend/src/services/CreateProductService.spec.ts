import mongoose from 'mongoose';
import Product from '@models/Product';
import CreateProductService from './CreateProductService';

const testProduct = {
  name: 'Test Product',
  price: 77,
  category: 'Test Category',
  imageUrl: 'http://testproduct.com/testimage.jpg',
};

describe('CreateProductService Test', () => {
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

  it('should create a new product', async () => {
    const { name, price, category, imageUrl } = testProduct;

    const res = await CreateProductService.run(name, price, category, imageUrl);

    expect(res.__v).toBeDefined();
    expect(res._id).toBeDefined();
    expect(res.createdAt).toBeDefined();
    expect(res.name).toBe('Test Product');
    expect(res.price).toBe(77);
    expect(res.category).toBe('Test Category');
    expect(res.imageUrl).toBe('http://testproduct.com/testimage.jpg');
  });

  it('should not create a new product without name', async () => {
    const { price, category, imageUrl } = testProduct;

    try {
      await CreateProductService.run('', price, category, imageUrl);
    } catch (error) {
      expect(error.message).toBe('Missing product name.');
    }
  });

  it('should not create a new product without price', async () => {
    const { name, category, imageUrl } = testProduct;

    try {
      await CreateProductService.run(name, 0, category, imageUrl);
    } catch (error) {
      expect(error.message).toBe('Missing product price.');
    }
  });

  it('should not create a new product without category', async () => {
    const { name, price, imageUrl } = testProduct;

    try {
      await CreateProductService.run(name, price, '', imageUrl);
    } catch (error) {
      expect(error.message).toBe('Missing product category.');
    }
  });

  it('should not create a new product without image url', async () => {
    const { name, price, category } = testProduct;

    try {
      await CreateProductService.run(name, price, category, '');
    } catch (error) {
      expect(error.message).toBe('Missing product image url.');
    }
  });
});
