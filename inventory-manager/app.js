
import express from 'express';

import indexRouter from './routes/index-router.js';
import inventoryRouter from './routes/inventory-router.js';
import buyRouter from './routes/buy-router.js';
import userRouter from './routes/user-router.js';

const app = express();
const port = 8081;

app.use(indexRouter);
app.use(inventoryRouter);
app.use(buyRouter);
app.use(userRouter);

app.listen(port, () => {
  console.log(`inventory-manager app listening on port ${port}`);
});
