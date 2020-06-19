import Product, { IProduct } from '@models/Product';

class DeleteProductService {
  public async run(id: string) {
    try {
      const deletedProduct = await Product.findByIdAndRemove(id);

      if (!deletedProduct) {
        throw new Error('Product not found.');
      }

      return Object.freeze(deletedProduct);
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

export default new DeleteProductService();
