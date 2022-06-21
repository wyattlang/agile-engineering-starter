
import { PrismaClient } from '@prisma/client';

import UserCrudService from './db/user-crud-service.js';
import AnimalCrudService from './db/animal-crud-service.js';
import PlantCrudService from './db/plant-crud-service.js';
import LandCrudService from './db/land-crud-service.js';
import TotalInventoryCrudService from './db/total-inventory-crud-service.js';

import AnimalMarketClient from './http-client/animal-market-client.js';
import PlantMarketClient from './http-client/plant-market-client.js';
import LandMarketClient from './http-client/land-market-client.js';

import UserPurchaseService from './user-purchase-service.js';

export default class LazySingletonServiceFactory {

  static prismaClient;

  static userCrudService;
  static animalCrudService;
  static plantCrudService;
  static landCrudService;
  static totalInventoryCrudService;

  static animalMarketClient;
  static plantMarketClient;
  static landMarketClient;

  static userPurchaseService;

  static getPrismaClient() {
    if (!this.prismaClient) {
      this.prismaClient = new PrismaClient();
    }
    return this.prismaClient;
  }

  static getUserCrudService() {
    if (!this.userCrudService) {
      this.userCrudService = new UserCrudService(this.getPrismaClient());
    }
    return this.userCrudService;
  }

  static getAnimalCrudService() {
    if (!this.animalCrudService) {
      this.animalCrudService = new AnimalCrudService(this.getPrismaClient());
    }
    return this.animalCrudService;
  }

  static getPlantCrudService() {
    if (!this.plantCrudService) {
      this.plantCrudService = new PlantCrudService(this.getPrismaClient());
    }
    return this.plantCrudService;
  }

  static getLandCrudService() {
    if (!this.landCrudService) {
      this.landCrudService = new LandCrudService(this.getPrismaClient());
    }
    return this.landCrudService;
  }

  static getTotalInventoryCrudService() {
    if (!this.totalInventoryCrudService) {
      this.totalInventoryCrudService = new TotalInventoryCrudService(this.getAnimalCrudService(), 
          this.getPlantCrudService(), this.getLandCrudService());
    }
    return this.totalInventoryCrudService;
  }

  static getAnimalMarketClient() {
    if (!this.animalMarketClient) {
      this.animalMarketClient = new AnimalMarketClient();
    }
    return this.animalMarketClient;
  }

  static getPlantMarketClient() {
    if (!this.plantMarketClient) {
      this.plantMarketClient = new PlantMarketClient();
    }
    return this.plantMarketClient;
  }

  static getLandMarketClient() {
    if (!this.landMarketClient) {
      this.landMarketClient = new LandMarketClient();
    }
    return this.landMarketClient;
  }

  static getUserPurchaseService() {
    if (!this.userPurchaseService) {
      this.userPurchaseService = new UserPurchaseService(this.getUserCrudService());
    }
    return this.userPurchaseService;
  }

}
