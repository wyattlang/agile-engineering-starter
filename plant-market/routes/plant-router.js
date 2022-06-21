
import express from 'express';
import PlantService from '../service/plant-service.js';
import Plant from '../service/plant.js';

const router = express.Router();
const plantService = new PlantService();

router.use(express.json());

router.post('/plant', async (req, res) => {
  const species = req.body.species;
  const price = req.body.price;
  const spaceRequired = req.body.spaceRequired;
  const successRate = req.body.successRate;
  const yieldPrice = req.body.yieldPrice;
  const plant = new Plant(null, species, price, spaceRequired, successRate, yieldPrice);
  const plantSaved = await plantService.save(plant);
  res.send(plantSaved);
});

router.get('/plant', async (req, res) => {
  const allPlants = await plantService.findAll();
  res.send(allPlants);
});

router.get('/plant/:id', async (req, res) => {
  const plantFound = await plantService.findById(req.params.id);
  res.send(plantFound);
});

export default router;
