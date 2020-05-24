import mongoose from 'mongoose';
import './env';

try {
  mongoose.connect(
    `${process.env.MONGO_URI}`,
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    },
    () => console.log(`MongoDB connected successfully`)
  );
} catch (err) {
  console.log(err.message);
  process.exit();
}
