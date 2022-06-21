
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default class LandService {

  async save(price, species, spaceRequired, successRate, yieldPrice, age) {
    return prisma.animal.create({
      data: {
        price: Number.parseFloat(price),
        species: species,
        spaceRequired: Number.parseInt(spaceRequired),
        successRate: Number.parseFloat(successRate),
        yieldPrice: Number.parseFloat(yieldPrice),
        age: Number.parseInt(age)
      }
    });
  }

  async findById(id) {
    return prisma.animal.findUnique({
      where: {
        id: Number.parseInt(id)
      }
    });
  }

  async findAll() {
    return prisma.animal.findMany();
  }

}
