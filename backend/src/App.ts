import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';

import ProductRouter from './routes/ProductRouter';

class App {
  public express: express.Application;

  constructor() {
    this.express = express();
    this.setEnvironment();
    this.database();
    this.middleware();
    this.routes();
  }

  private setEnvironment(): void {
    dotenv.config({ path: '.env' });
  }

  private database(): void {
    mongoose.connect(`${process.env.MONGO_URI}`, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });

    mongoose.connection.on('connected', () => {
      console.log('MongoDB connected successfully!');
    });

    mongoose.connection.on('error', () => {
      console.log(
        'MongoDB connection error. Please make sure MongoDB is running.'
      );
      process.exit();
    });
  }

  private middleware(): void {
    this.express.use(express.json());
    this.express.use(cors());
  }

  private routes(): void {
    this.express.use(ProductRouter);
  }
}

export default new App().express;
