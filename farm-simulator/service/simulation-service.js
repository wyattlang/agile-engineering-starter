
import axios from 'axios';

import Plant from '../model/plant.js';
import Animal from '../model/animal.js';

export default class SimulationService {

  async findUserInventory(userIdToSimulate) {
    const userFromManager = await axios.get(`http://localhost:8081/user/${userIdToSimulate}`).then(response => response.data);
    const inventoryFromManager = await axios.get(`http://localhost:8081/inventory/${userIdToSimulate}`).then(response => response.data);
    return {
      user: userFromManager,
      animals: inventoryFromManager.animals,
      plants: inventoryFromManager.plants,
      land: inventoryFromManager.land
    }
  }

  async completeSimulation(inventoryOfUser) {
    const totalAcreage = this.calculateSumOfAcreage(inventoryOfUser.land);
    const plantsOfClass = this.mapAllJsonPlantsToClassInstances(inventoryOfUser.plants);
    console.log(plantsOfClass);
    const animalsOfClass = this.mapAllJsonAnimalsToClassInstances(inventoryOfUser.animals);
    console.log(animalsOfClass);
    // add validation for animals and plants fitting on the farm
    let totalYield = this.growAll(plantsOfClass);
    totalYield += this.growAll(animalsOfClass);
    console.log(`Total yield is: ${totalYield}`);
    inventoryOfUser.user.balance += totalYield;
    this.removeNonSurvivingFarmables(inventoryOfUser, animalsOfClass, plantsOfClass);
    return inventoryOfUser;
  }

  async updateInventoryManager(updatedInventory) {
    const responseFromUpdatingUser = await axios.put('http://localhost:8081/user', {
      id: updatedInventory.user.id,
      balance: updatedInventory.user.balance
    }).then(response => response.data);
    const responseFromUpdatingInventory = await axios.put('http://localhost:8081/inventory', {
      animals: updatedInventory.animals,
      plants: updatedInventory.plants,
      land: updatedInventory.land
    }).then(response => response.data);
    return {
      user: responseFromUpdatingUser,
      animals: responseFromUpdatingInventory.animals,
      plants: responseFromUpdatingInventory.plants,
      land: responseFromUpdatingInventory.land
    }
  }

  calculateSumOfAcreage(allLand) {
    let sum = 0;
    for (const land of allLand) {
      sum += land.acreage;
    }
    return sum;
  }

  mapAllJsonPlantsToClassInstances(plantsAsJson) {
    const plantsAsInstances = [];
    plantsAsJson.forEach((plant) => {
      plantsAsInstances.push(new Plant(plant.id, plant.ownerId, plant.price, plant.species, 
          plant.spaceRequired, plant.successRate, plant.yieldPrice));
    });
    return plantsAsInstances;
  }

  mapAllJsonAnimalsToClassInstances(animalsAsJson) {
    const animalsAsInstances = [];
    animalsAsJson.forEach((animal) => {
      animalsAsInstances.push(new Animal(animal.id, animal.ownerId, animal.price, animal.species, 
          animal.spaceRequired, animal.successRate, animal.yieldPrice, animal.health, animal.age));
    });
    return animalsAsInstances;
  }

  growAll(farmables) {
    let totalYield = 0;
    for (const farmable of farmables) {
      totalYield += farmable.grow();
    }
    return totalYield;
  }

  removeNonSurvivingFarmables(inventoryOfUser, animalsOfClassAfterGrowth, plantsOfClassAfterGrowth) {
    for (let i = 0; i < animalsOfClassAfterGrowth.length; i++) {
      if (!animalsOfClassAfterGrowth[i].survivedLastSeason) {
        inventoryOfUser.animals.splice(i, 1);
      }
    }
    for (let i = 0; i < plantsOfClassAfterGrowth.length; i++) {
      if (!plantsOfClassAfterGrowth[i].survivedLastSeason) {
        inventoryOfUser.plants.splice(i, 1);
      }
    }
  }

}
