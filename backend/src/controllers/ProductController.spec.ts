import request from 'supertest';
import server from '../App';
import Product from '@models/Product';

interface ITestBody {
  __v: string;
  _id: string;
  name: string;
  price: 77;
  category: string;
  createdAt: Date;
}

const testBody = {
  name: 'Test Product',
  price: 77,
  category: 'Test Category',
};

function expectBody(body: ITestBody) {
  expect(body.__v).toBeDefined();
  expect(body._id).toBeDefined();
  expect(body.createdAt).toBeDefined();
  expect(body.name).toBe('Test Product');
  expect(body.price).toBe(77);
  expect(body.category).toBe('Test Category');
}

describe('Product Controller Test', () => {
  beforeEach(async () => await Product.deleteMany(testBody));

  // @desc		ProductController.getProducts
  // @route		GET /api
  it('should get all products', async () => {
    const res = await request(server).get('/api');

    expect(res.body).toBeDefined();
    expect(res.status).toBe(200);
  });

  // @desc		ProductController.getProductsInCategory
  // @route		GET /api/:category
  it('should get all products in a category', async () => {
    await request(server).post('/api').send(testBody);

    const res = await request(server).get(`/api/${testBody.category}`);

    expectBody(res.body[0]);
    expect(res.status).toBe(200);
  });

  it('should not find products in an unexisting category', async () => {
    const res = await request(server).get('/api/UnexistingCategory');

    expect(res.body).toBe('Category not found');
    expect(res.status).toBe(400);
  });

  // @desc		ProductController.createProduct
  // @route		POST /api
  it('should create a new product', async () => {
    const res = await request(server).post('/api').send(testBody);

    expectBody(res.body);
    expect(res.status).toBe(201);
  });

  it('should not create a new product with wrong params', async () => {
    const res = await request(server).post('/api').send({ cool: true });

    expect(res.body._message).toBe('Product validation failed');
    expect(res.status).toBe(400);
  });

  // @desc		ProductController.deleteProduct
  // @route		DELETE /api/:id
  it('should delete a product', async () => {
    const createdProduct = await request(server).post('/api').send(testBody);

    const res = await request(server).delete(`/api/${createdProduct.body._id}`);

    expectBody(res.body);
    expect(res.status).toBe(200);
  });

  it('should not delete a product that does not exist', async () => {
    const res = await request(server).delete('/api/UnexistingId');

    expect(res.body).toBe('Product not found');
    expect(res.status).toBe(400);
  });
});
