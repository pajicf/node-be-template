import express, { Router, Request, Response } from 'express';
import * as bodyParser from 'body-parser';
import { CONFIG } from './config';
import api from './api';
import cookieParser from 'cookie-parser';
import cors from 'cors';

const { NODE_PORT, NODE_HOST } = CONFIG;
const app = express();

app.set('port', NODE_PORT);
app.set('host', NODE_HOST);

app.use(cors(CONFIG.CORS_OPTIONS));
app.use(bodyParser.json());
app.use(cookieParser());

app.use(express.static('public'));

// Routes
const apiRouter = Router();
apiRouter.use('/api', api);
app.use(apiRouter);

// 404
app.use('*', (request: Request, response: Response) => {
  return response.status(404).json({message: 'Not Found'});
});

export default app;
