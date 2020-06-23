import Product, { IProduct } from '@models/Product';

class CreateProductService {
  public async run(
    name: string,
    price: number,
    category: string,
    imageUrl: string
  ) {
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

      if (!imageUrl) {
        throw new Error('Missing product image url.');
      }

      const newProduct: IProduct = await Product.create({
        name,
        price,
        category,
        imageUrl,
      });

      return Object.freeze(newProduct);
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

export default new CreateProductService();
