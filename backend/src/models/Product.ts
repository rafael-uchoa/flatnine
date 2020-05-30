import { Schema, Document, model } from 'mongoose';

export interface IProduct extends Document {
  name: string;
  price: number;
  category: string;
  createdAt: Date;
}

const ProductSchema: Schema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export default model<IProduct>('Product', ProductSchema);
