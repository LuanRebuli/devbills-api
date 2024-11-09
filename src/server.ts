import 'dotenv/config';
import express, { json } from 'express';
import { setupMongo } from './database';
import { routes } from './routes';

import cors from 'cors';
import { errorHandler } from './middlewares/error-handler.middleware';

setupMongo().then(() => {
  const app = express();

  app.use(
    cors({
      origin: process.env.FRONT_URL,
    }),
  );
  app.use(json());
  app.use(routes);
  app.use(errorHandler);
  app.listen(3333, () => console.log('🚀 Server is running at port 3333!'));
});
