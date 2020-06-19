import mongoose from 'mongoose';
import Product from './Product';

const testProduct = {
  name: 'Test Product',
  price: 77,
  category: 'Test Category',
};

describe('Product Model Test', () => {
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

  it('should create & save user successfully', async () => {
    await Product.create(testProduct);

    const res = await Product.find();

    expect(res[0].__v).toBeDefined();
    expect(res[0]._id).toBeDefined();
    expect(res[0].createdAt).toBeDefined();
    expect(res[0].name).toBe('Test Product');
    expect(res[0].price).toBe(77);
    expect(res[0].category).toBe('Test Category');
  });

  it('should not create user without name', async () => {
    let error = null;

    const { price, category } = testProduct;

    try {
      const res = await Product.create(price, category);
      await res.validate();
    } catch (err) {
      error = err;
    }

    expect(error).not.toBeNull();
  });

  it('should not create user without price', async () => {
    let error = null;

    const { name, category } = testProduct;

    try {
      const res = await Product.create(name, category);
      await res.validate();
    } catch (err) {
      error = err;
    }

    expect(error).not.toBeNull();
  });

  it('should not create user without category', async () => {
    let error = null;

    const { name, price } = testProduct;

    try {
      const res = await Product.create(name, price);
      await res.validate();
    } catch (err) {
      error = err;
    }

    expect(error).not.toBeNull();
  });
});
