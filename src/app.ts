import express from 'express';
import { errorHandler } from './middleware/error-handler.middleware';

let app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(errorHandler);

export default app;
