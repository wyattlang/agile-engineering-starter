
import express from 'express';

import LazySingletonServiceFactory from '../service/lazy-singleton-service-factory.js';

import Animal from '../model/animal.js';
import Plant from '../model/plant.js';
import Land from '../model/land.js';

const router = express.Router();
router.use(express.json());

const animalMarketClient = LazySingletonServiceFactory.getAnimalMarketClient();
const plantMarketClient = LazySingletonServiceFactory.getPlantMarketClient();
const landMarketClient = LazySingletonServiceFactory.getLandMarketClient();

const inventoryCrudService = LazySingletonServiceFactory.getTotalInventoryCrudService();
const userCrudService = LazySingletonServiceFactory.getUserCrudService();

const userPurchaseService = LazySingletonServiceFactory.getUserPurchaseService();

router.get('/inventory/buy/:userId', async (req, res) => {
  const user = await userCrudService.findById(req.params.userId);
  const allAnimalsForSale = await animalMarketClient.findAll();
  const allPlantsForSale = await plantMarketClient.findAll();
  const allLandForSale = await landMarketClient.findAll();
  res.send({
    userBalance: user.balance,
    allAnimalsForSale: allAnimalsForSale,
    allPlantsForSale: allPlantsForSale,
    allLandForSale: allLandForSale
  });
});

router.get('/inventory/buy/:userId/animal/:animalId', async (req, res) => {
  const animalFromMarket = await animalMarketClient.findById(req.params.animalId);
  const userId = req.params.userId;
  const purchasable = await userPurchaseService.tryPurchase(userId, animalFromMarket.price);
  if (purchasable) {
    const animalAsInstanceOfClass = new Animal(animalFromMarket.id, userId, animalFromMarket.price, 
        animalFromMarket.species, animalFromMarket.spaceRequired, animalFromMarket.successRate, 
        animalFromMarket.yieldPrice, animalFromMarket.health, animalFromMarket.age);
    const animalSavedInInventory = await inventoryCrudService.save(animalAsInstanceOfClass);
    res.send(animalSavedInInventory);
  } else {
    res.send(`User ${userId} could not afford`);
  }
});

router.get('/inventory/buy/:userId/plant/:plantId', async (req, res) => {
  const plantFromMarket = await plantMarketClient.findById(req.params.plantId);
  const userId = req.params.userId;
  const purchasable = await userPurchaseService.tryPurchase(userId, plantFromMarket.price);
  if (purchasable) {
    const plantAsInstanceOfClass = new Plant(plantFromMarket.id, userId, plantFromMarket.price, 
        plantFromMarket.species, plantFromMarket.spaceRequired, plantFromMarket.successRate, 
        plantFromMarket.yieldPrice);
    const plantSavedInInventory = await inventoryCrudService.save(plantAsInstanceOfClass);
    res.send(plantSavedInInventory);
  } else {
    res.send(`User ${userId} could not afford`);
  }
});

router.get('/inventory/buy/:userId/land/:landId', async (req, res) => {
  const landFromMarket = await landMarketClient.findById(req.params.landId);
  const userId = req.params.userId;
  const purchasable = await userPurchaseService.tryPurchase(userId, landFromMarket.price);
  if (purchasable) {
    const landAsInstanceOfClass = new Land(landFromMarket.id, userId, landFromMarket.price, 
        landFromMarket.address, landFromMarket.acreage);
    const landSavedInInventory = await inventoryCrudService.save(landAsInstanceOfClass);
    res.send(landSavedInInventory);
  } else {
    res.send(`User ${userId} could not afford`);    
  }
});

export default router;
