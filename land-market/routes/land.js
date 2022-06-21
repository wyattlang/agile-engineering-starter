
import express from 'express';

import LandService from '../service/land-service.js';

const router = express.Router(); 
const landService = new LandService();

router.use(express.json())

router.post('/land', async (req, res) => {
  const address = req.body.address;
  const acreage = req.body.acreage;
  const price = req.body.price;
  const landSaved = await landService.save(address, acreage, price);
  console.log(`POST new land saved: ${landSaved}`);
  res.send(landSaved);
});

router.get('/land', async (req, res) => {
  const allLand = await landService.findAll();
  console.log('GET all land');
  res.send(allLand);
});

router.get('/land/:id', async (req, res) => {
  const landFound = await landService.findById(req.params.id);
  console.log(`GET land: ${landFound}`)
  res.send(landFound);
});

export default router;
