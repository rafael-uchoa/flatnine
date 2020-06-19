import Product, { IProduct } from '@models/Product';

class CreateProductService {
  public async run(name: string, price: number, category: string) {
    try {
      if (!name) {
        throw new Error('Missing product name.');
      }

      if (!price) {
        throw new Error('Missing product price.');
      }

      if (!category) {
        throw new Error('Missing product category.');
      }

      const newProduct: IProduct = await Product.create({
        name,
        price,
        category,
      });

      return Object.freeze(newProduct);
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

export default new CreateProductService();
