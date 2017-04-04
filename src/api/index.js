import Koa from 'koa';
import compress from 'koa-compress';
import logger from 'koa-logger';
import mount from 'koa-mount';
import cors from './middleware/cors';

import apiRoutes from './api';

const api = new Koa();

api.use(compress());
api.use(cors());
api.use(mount('/api', apiRoutes));

if (process.env.NODE_ENV === 'development') {
  api.use(logger());
}

export default api;
