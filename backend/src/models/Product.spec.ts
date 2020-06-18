import mongoose from 'mongoose';
import Product from './Product';

const testUser = {
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
    await Product.create(testUser);

    const res = await Product.find();

    expect(res[0].__v).toBeDefined();
    expect(res[0]._id).toBeDefined();
    expect(res[0].createdAt).toBeDefined();
    expect(res[0].name).toBe('Test Product');
    expect(res[0].price).toBe(77);
    expect(res[0].category).toBe('Test Category');
  });

  it('should not create user with wrong params', async () => {
    let error = null;

    try {
      const res = await Product.create({ cool: true });
      await res.validate();
    } catch (err) {
      error = err;
    }

    expect(error).not.toBeNull();
  });
});
