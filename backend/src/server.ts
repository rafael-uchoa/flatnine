import express from 'express';
import cors from 'cors';
import routes from './routes';
import './config/db';
import './config/env';

const app = express();
const { PORT } = process.env;

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
