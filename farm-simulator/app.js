
import express from 'express';

import indexRouter from './routes/index.js';
import simulationRouter from './routes/simulation-router.js';

const app = express();
const port = 8082;

app.use(indexRouter);
app.use(simulationRouter);

app.listen(port, () => {
  console.log(`farm-simulator app listening on port ${port}`);
});