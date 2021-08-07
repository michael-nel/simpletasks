import 'reflect-metadata';
import express, { Request, Response, NextFunction } from 'express';
import 'dotenv/config';
import swaggerUi from 'swagger-ui-express';
import cors from 'cors';
import 'express-async-errors';
import { errors } from 'celebrate';

import '@main/config/bootstrapper';

import AppError from '@shared/errors/AppError';

import swaggerDocs from '@main/swagger.json';
import rateLimiter from './middlewares/rateLimiter';
import routes from './routes';

const app = express();

app.use(rateLimiter);
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(routes);
app.use(errors());

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }
  return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
});

app.listen(3333, () => {
  console.log('Check the documentation: http://localhost:3333/api-docs');
  console.log('👀 Server started on port 3333');
});
