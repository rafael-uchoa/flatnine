import request from 'supertest';
import server from '../App';
import Product from '@models/Product';

interface ITestProduct {
  name: string;
  price: 77;
  category: string;
  imageUrl: string;
}

const testProduct = {
  name: 'Test Product',
  price: 77,
  category: 'Test Category',
  imageUrl: 'http://testproduct.com/testimage.jpg',
};

function expectProduct(product: ITestProduct) {
  expect(product.name).toBe('Test Product');
  expect(product.price).toBe(77);
  expect(product.category).toBe('Test Category');
  expect(product.imageUrl).toBe('http://testproduct.com/testimage.jpg');
}

describe('Product Controller Test', () => {
  beforeEach(async () => await Product.deleteMany(testProduct));

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
    await request(server).post('/api').send(testProduct);

    const res = await request(server).get(`/api/${testProduct.category}`);

    const { success, products } = res.body;

    expectProduct(products[0]);

    expect(success).toBe(true);
    expect(res.status).toBe(200);
  });

  it('should not find products in an unexisting category', async () => {
    const res = await request(server).get('/api/UnexistingCategory');

    const { success, error } = res.body;

    expect(success).toBe(false);
    expect(error).toBe('No products found in this category.');
    expect(res.status).toBe(500);
  });

  // @desc		ProductController.createProduct
  // @route		POST /api
  it('should create a new product', async () => {
    const res = await request(server).post('/api').send(testProduct);

    const { success, product } = res.body;

    expectProduct(product);

    expect(success).toBe(true);
    expect(res.status).toBe(201);
  });

  it('should ignore extra params when creating a new product', async () => {
    const res = await request(server)
      .post('/api')
      .send({ ...testProduct, cool: true });

    const { success, product } = res.body;

    expectProduct(product);

    expect(success).toBe(true);
    expect(res.status).toBe(201);
  });

  it('should not create a new product without name', async () => {
    const { price, category, imageUrl } = testProduct;

    const res = await request(server)
      .post('/api')
      .send({ price, category, imageUrl });

    const { success, error } = res.body;

    expect(success).toBe(false);
    expect(error).toBe('Missing product name.');
    expect(res.status).toBe(400);
  });

  it('should not create a new product with empty name', async () => {
    const { price, category, imageUrl } = testProduct;

    const res = await request(server)
      .post('/api')
      .send({ name: '', price, category, imageUrl });

    const { success, error } = res.body;

    expect(success).toBe(false);
    expect(error).toBe('Missing product name.');
    expect(res.status).toBe(400);
  });

  it('should not create a new product without price', async () => {
    const { name, category, imageUrl } = testProduct;

    const res = await request(server)
      .post('/api')
      .send({ name, category, imageUrl });

    const { success, error } = res.body;

    expect(success).toBe(false);
    expect(error).toBe('Missing product price.');
    expect(res.status).toBe(400);
  });

  it('should not create a new product that costs 0', async () => {
    const { name, category, imageUrl } = testProduct;

    const res = await request(server)
      .post('/api')
      .send({ name, price: 0, category, imageUrl });

    const { success, error } = res.body;

    expect(success).toBe(false);
    expect(error).toBe('Missing product price.');
    expect(res.status).toBe(400);
  });

  it('should not create a new product without category', async () => {
    const { name, price, imageUrl } = testProduct;

    const res = await request(server)
      .post('/api')
      .send({ name, price, imageUrl });

    const { success, error } = res.body;

    expect(success).toBe(false);
    expect(error).toBe('Missing product category.');
    expect(res.status).toBe(400);
  });

  it('should not create a new product with empty category', async () => {
    const { name, price, imageUrl } = testProduct;

    const res = await request(server)
      .post('/api')
      .send({ name, price, category: '', imageUrl });

    const { success, error } = res.body;

    expect(success).toBe(false);
    expect(error).toBe('Missing product category.');
    expect(res.status).toBe(400);
  });

  it('should not create a new product without image url', async () => {
    const { name, price, category } = testProduct;

    const res = await request(server)
      .post('/api')
      .send({ name, price, category });

    const { success, error } = res.body;

    expect(success).toBe(false);
    expect(error).toBe('Missing product image url.');
    expect(res.status).toBe(400);
  });

  it('should not create a new product with empty image url', async () => {
    const { name, price, category } = testProduct;

    const res = await request(server)
      .post('/api')
      .send({ name, price, category, imageUrl: '' });

    const { success, error } = res.body;

    expect(success).toBe(false);
    expect(error).toBe('Missing product image url.');
    expect(res.status).toBe(400);
  });

  // @desc		ProductController.deleteProduct
  // @route		DELETE /api/:id
  it('should delete a product', async () => {
    const createdProduct = await request(server).post('/api').send(testProduct);

    const res = await request(server).delete(
      `/api/${createdProduct.body.product._id}`
    );

    const { success, product } = res.body;

    expectProduct(product);

    expect(success).toBe(true);
    expect(res.status).toBe(200);
  });

  it('should not delete a product that does not exist', async () => {
    const res = await request(server).delete('/api/UnexistingId');

    const { success, error } = res.body;

    expect(success).toBe(false);
    expect(error).toBe('Product not found.');
    expect(res.status).toBe(404);
  });
});
