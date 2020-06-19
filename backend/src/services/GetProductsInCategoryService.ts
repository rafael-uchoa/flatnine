import Product, { IProduct } from '@models/Product';

class GetProductsInCategoryService {
  public async run(category: string) {
    try {
      const productsArray: IProduct[] = await Product.find({ category });

      if (productsArray.length === 0) {
        throw new Error('No products found in this category.');
      }

      return Object.freeze(productsArray);
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

export default new GetProductsInCategoryService();
