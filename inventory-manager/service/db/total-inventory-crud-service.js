
import { PrismaClient } from '@prisma/client';

import Animal from '../../model/animal.js';
import Plant from '../../model/plant.js';
import Land from '../../model/land.js';

const prismaClient = new PrismaClient();

export default class TotalInventoryCrudService {

  constructor(animalCrudService, plantCrudService, landCrudService) {
    this.animalCrudService = animalCrudService;
    this.plantCrudService = plantCrudService;
    this.landCrudService = landCrudService;
  }

  async save(entity) {
    
    // TODO for lab 3.3
    
  }

  async findAllByOwnerId(ownerId) {
    return {
      'animals': await this.animalCrudService.findManyByOwnerId(ownerId),
      'plants': await this.plantCrudService.findManyByOwnerId(ownerId),
      'land': await this.landCrudService.findManyByOwnerId(ownerId)
    };
  }

  async findAll() {
    return {
      'animals': await this.animalCrudService.findAll(),
      'plants': await this.plantCrudService.findAll(),
      'land': await this.landCrudService.findAll()
    };
  }

  async updateAll(newInventory) {
    return {
      'animals': await this.updateAllAnimals(newInventory.animals),
      'plants': await this.updateAllPlants(newInventory.plants),
      'land': await this.updateAllLand(newInventory.land)
    }
  }

  async updateAllAnimals(newAnimals) {
    const allAnimals = []
    for (const animal of newAnimals) {
      if (await prismaClient.animal.findUnique({
        where: {
          id: Number.parseInt(animal.id)
        }
      })) {
        allAnimals.push(await this.animalCrudService.update(animal));
      } else {
        await this.animalCrudService.delete(animal.id);
      }
    }
    return allAnimals;
  }

  async updateAllPlants(newPlants) {
    const allPlants = [];
    for (const plant of newPlants) {
      if (await prismaClient.plant.findUnique({
        where: {
          id: Number.parseInt(plant.id)
        }
      })) {
        allPlants.push(await this.plantCrudService.update(plant));
      } else {
        await this.plantCrudService.delete(plant.id);
      }
    }
    return allPlants;
  }

  async updateAllLand(newLand) {
    const allLand = []
    for (const land of newLand) {
      if (await this.landCrudService.findById(land.id)) {
        allLand.push(await this.landCrudService.update(land));
      } else {
        await this.landCrudService.delete(land.id);
      }
    }
    return allLand;
  }

}
