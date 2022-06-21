
import InventoryItemCrudService from './inventory-item-crud-service.js';

export default class AnimalCrudService extends InventoryItemCrudService {

  constructor(prismaClient) {
    super(prismaClient);
  }

  async save(animal) {
    return this.prismaClient.animal.create({
      data: {
        ownerId: Number.parseInt(animal.ownerId),
        price: Number.parseFloat(animal.price),
        species: animal.species,
        spaceRequired: Number.parseInt(animal.spaceRequired),
        successRate: Number.parseFloat(animal.successRate),
        yieldPrice: Number.parseFloat(animal.yieldPrice),
        health: Number.parseInt(animal.health),
        age: Number.parseInt(animal.age)
      }
    });
  }

  async findById(id) {
    return this.prismaClient.animal.findUnique({
      where: {
        id: Number.parseInt(id)
      }
    });
  }

  async findAll() {
    return this.prismaClient.animal.findMany();
  }
  
  async update(animal) {
    return this.prismaClient.animal.update({
      where: {
        id: Number.parseInt(animal.id)
      },
      data: {
        ownerId: Number.parseInt(animal.ownerId),
        price: Number.parseFloat(animal.price),
        species: animal.species,
        spaceRequired: Number.parseInt(animal.spaceRequired),
        successRate: Number.parseFloat(animal.successRate),
        yieldPrice: Number.parseFloat(animal.yieldPrice),
        health: Number.parseInt(animal.health),
        age: Number.parseInt(animal.age)
      }
    });
  }

  async delete(id) {
    return this.prismaClient.animal.delete({
      where: {
        id: Number.parseInt(id)
      }
    });
  }

  findManyByOwnerId(ownerId) {
    return this.prismaClient.animal.findMany({
      where: {
        ownerId: Number.parseInt(ownerId)
      }
    });
  }

}