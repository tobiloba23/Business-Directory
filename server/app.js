import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

import apiRoutesv1 from './routes/api/v1';

dotenv.config();

const app = express();

app.use(logger('dev'));

app.use(bodyParser.json({ limit: '50mb' }));

const port = parseInt(process.env.PORT, 10) || 8020;

app.set('Port', port);

app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

app.use('/api/v1', apiRoutesv1);

const server = app.listen(app.get('Port'), () => {
  const portCheck = server.address().port;
  console.log('Magic happens on port ', portCheck);
});


export default app;
