
import express from 'express';

import SimulationService from '../service/simulation-service.js';

const router = express.Router();
router.use(express.json());

const simulationService = new SimulationService();

router.post('/simulate/user/:id', async (req, res) => {
  const userIdToSimulate = req.params.id;
  const inventoryOfUser = await simulationService.findUserInventory(userIdToSimulate);
  const updatedInventory = await simulationService.completeSimulation(inventoryOfUser);
  const inventoryManagerWasUpdated = await simulationService.updateInventoryManager(updatedInventory);
  res.send(inventoryManagerWasUpdated);
});

export default router;
