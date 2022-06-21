
import express from 'express';
import indexRouter from './routes/index.js';
import landRouter from './routes/land.js';

const app = express();
const port = 8085;

app.use(express.json())

app.use(landRouter);
app.use(indexRouter);

app.listen(port, () => {
  console.log(`land-api app listening on port ${port}`);
});
