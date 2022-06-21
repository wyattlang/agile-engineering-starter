
import express from 'express';
import AnimalService from '../service/animal-service.js'

const router = express.Router(); 
const animalService = new AnimalService();

router.use(express.json())

router.post('/animal', async (req, res) => {
  const price = req.body.price;
  const species = req.body.species;
  const spaceRequired = req.body.spaceRequired;
  const successRate = req.body.successRate;
  const yieldPrice = req.body.yieldPrice;
  const age = req.body.age;
  const animalSaved = await animalService.save(price, species, spaceRequired, successRate, yieldPrice, age);
  console.log(`POST saved new animal: ${animalSaved}`);
  res.send(animalSaved);
});

router.get('/animal', async (req, res) => {
  const allAnimals = await animalService.findAll();
  console.log('GET all animals');
  res.send(allAnimals);
});

router.get('/animal/:id', async (req, res) => {
  const animalFound = await animalService.findById(req.params.id);
  console.log(`GET animal: ${animalFound}`)
  res.send(animalFound);
});

export default router;
