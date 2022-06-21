
import express from 'express';

import LazySingletonServiceFactory from '../service/lazy-singleton-service-factory.js';

const router = express.Router();
router.use(express.json());

const inventoryCrudService = LazySingletonServiceFactory.getTotalInventoryCrudService();

const animalCrudService = LazySingletonServiceFactory.getAnimalCrudService();
const plantCrudService = LazySingletonServiceFactory.getPlantCrudService();
const landCrudService = LazySingletonServiceFactory.getLandCrudService();

/* GET all inventory items */
router.get('/inventory/:userId', async (req, res) => {
  const inventory = await inventoryCrudService.findAllByOwnerId(req.params.userId);
  res.send(inventory);
});

/* GET all animal items */
router.get('/inventory/:userId/animal', async (req, res) => {
  const allAnimals = await animalCrudService.findManyByOwnerId(req.params.userId);
  res.send(allAnimals);
});

/* GET all plant items */
router.get('/inventory/:userId/plant', async (req, res) => {
  const allPlants = await plantCrudService.findManyByOwnerId(req.params.userId);
  res.send(allPlants);
});

/* GET all land items */
router.get('/inventory/:userId/land', async (req, res) => {
  const allLand = await landCrudService.findManyByOwnerId(req.params.userId);
  res.send(allLand);
});

router.put('/inventory', async (req, res) => {
  const inventoryFromRequest = {
    animals: req.body.animals,
    plants: req.body.plants,
    land: req.body.land
  }
  const updatedInventory = await inventoryCrudService.updateAll(inventoryFromRequest);
  res.send(updatedInventory);
});

export default router;
