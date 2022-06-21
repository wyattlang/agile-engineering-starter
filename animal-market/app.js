
import express from 'express';
import indexRouter from './routes/index.js';
import animalRouter from './routes/animal-router.js';

const app = express();
const port = 8083;

app.use(express.json())

app.use(indexRouter);
app.use(animalRouter);

app.listen(port, () => {
  console.log(`land-api app listening on port ${port}`);
});
