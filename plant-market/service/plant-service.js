
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default class PlantService {

  async save(plant) {
    return prisma.plant.create({
      data: {
        species: plant.species,
        price: plant.price,
        spaceRequired: plant.spaceRequired,
        successRate: plant.successRate,
        yieldPrice: plant.yieldPrice
      }
    });
  }

  async findById(id) {
    return prisma.plant.findUnique({
      where: {
        id: Number.parseInt(id)
      }
    });
  }

  async findAll() {
    return prisma.plant.findMany();
  }

}
