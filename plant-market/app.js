import express from 'express';
import indexRouter from './routes/index.js';
import plantRouter from './routes/plant-router.js';

const app = express();
const port = 8084;

app.use(express.json())

app.use(indexRouter);
app.use(plantRouter);

app.listen(port, () => {
  console.log(`plant-api app listening on port ${port}`);
});