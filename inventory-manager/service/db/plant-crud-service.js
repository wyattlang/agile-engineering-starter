
import InventoryItemCrudService from './inventory-item-crud-service.js';

export default class PlantCrudService extends InventoryItemCrudService {

  constructor(prismaClient) {
    super(prismaClient);
  }

  async save(plant) {
    return this.prismaClient.plant.create({
      data: {
        ownerId: Number.parseInt(plant.ownerId),
        price: Number.parseFloat(plant.price),
        species: plant.species,
        spaceRequired: Number.parseInt(plant.spaceRequired),
        successRate: Number.parseFloat(plant.successRate),
        yieldPrice: Number.parseFloat(plant.yieldPrice)
      }
    });
  }

  async findById(id) {
    return this.prismaClient.plant.findUnique({
      where: {
        id: Number.parseInt(id)
      }
    });
  }

  async findAll() {
    return this.prismaClient.plant.findMany();
  }
  
  async update(plant) {
    return this.prismaClient.plant.update({
      where: {
        id: Number.parseInt(plant.id)
      },
      data: {
        ownerId: Number.parseInt(plant.ownerId),
        price: Number.parseFloat(plant.price),
        species: plant.species,
        spaceRequired: Number.parseInt(plant.spaceRequired),
        successRate: Number.parseFloat(plant.successRate),
        yieldPrice: Number.parseFloat(plant.yieldPrice)
      }
    });
  }

  async delete(id) {
    return this.prismaClient.plant.delete({
      where: {
        id: Number.parseInt(id)
      }
    });
  }

  async findManyByOwnerId(ownerId) {
    return this.prismaClient.plant.findMany({
      where: {
        ownerId: Number.parseInt(ownerId)
      }
    });
  }

}
