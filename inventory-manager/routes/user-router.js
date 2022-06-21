
import express from 'express';

import LazySingletonServiceFactory from '../service/lazy-singleton-service-factory.js';

const router = express.Router();
router.use(express.json());

const userCrudService = LazySingletonServiceFactory.getUserCrudService();

router.post('/user', async (req, res) => {
  const balance = req.body.balance;
  const userSaved = await userCrudService.save({
    balance: balance
  });
  res.send(userSaved);
});

router.get('/user', async (req, res) => {
  const allUsers = await userCrudService.findAll();
  res.send(allUsers);
});

router.get('/user/:id', async (req, res) => {
  const userFound = await userCrudService.findById(req.params.id);
  res.send(userFound);
});

router.put('/user', async (req, res) => {
  const id = req.body.id;
  const balance = req.body.balance;
  const updatedUser = await userCrudService.update({id: id, balance: balance});
  res.send(updatedUser);
});

export default router;
