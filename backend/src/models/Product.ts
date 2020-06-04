import { Schema, model } from 'mongoose';

import IProduct from '../types/IProduct';

const ProductSchema: Schema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export default model<IProduct>('Product', ProductSchema);
