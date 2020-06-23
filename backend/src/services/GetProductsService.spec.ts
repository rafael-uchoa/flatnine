import mongoose from 'mongoose';
import Product from '@models/Product';
import GetProductsService from './GetProductsService';

const testProduct = {
  name: 'Test Product',
  price: 77,
  category: 'Test Category',
  imageUrl: 'http://testproduct.com/testimage.jpg',
};

describe('GetProductsService Test', () => {
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

  it('should get 3 test products', async () => {
    await Product.create(testProduct);
    await Product.create(testProduct);
    await Product.create(testProduct);

    const res = await GetProductsService.run();

    expect(res.length).toEqual(3);

    expect(res[0].name).toBe('Test Product');
    expect(res[0].price).toBe(77);
    expect(res[0].category).toBe('Test Category');
    expect(res[0].imageUrl).toBe('http://testproduct.com/testimage.jpg');

    expect(res[0].name).toEqual(res[1].name);
    expect(res[0].price).toEqual(res[1].price);
    expect(res[0].category).toEqual(res[1].category);
    expect(res[0].imageUrl).toEqual(res[1].imageUrl);

    expect(res[0].name).toEqual(res[2].name);
    expect(res[0].price).toEqual(res[2].price);
    expect(res[0].category).toEqual(res[2].category);
    expect(res[0].imageUrl).toEqual(res[2].imageUrl);

    expect(res[0].__v).toBeDefined();
    expect(res[0]._id).toBeDefined();
    expect(res[0].createdAt).toBeDefined();

    expect(res[1].__v).toBeDefined();
    expect(res[1]._id).toBeDefined();
    expect(res[1].createdAt).toBeDefined();

    expect(res[2].__v).toBeDefined();
    expect(res[2]._id).toBeDefined();
    expect(res[2].createdAt).toBeDefined();
  });

  it('should not get any products', async () => {
    try {
      await GetProductsService.run();
    } catch (error) {
      expect(error.message).toBe('No products found.');
    }
  });
});
