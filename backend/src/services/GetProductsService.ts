import Product, { IProduct } from '@models/Product';

class GetProductsService {
  public async run() {
    try {
      const productsArray: IProduct[] = await Product.find();

      if (productsArray.length === 0) {
        throw new Error('No products found.');
      }

      return Object.freeze(productsArray);
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

export default new GetProductsService();
