
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default class LandService {

  async save(address, acreage, price) {
    return prisma.land.create({
      data: {
        address: address,
        acreage: Number.parseInt(acreage),
        price: Number.parseFloat(price)
      }
    });
  }

  async findById(id) {
    return prisma.land.findUnique({
      where: {
        id: Number.parseInt(id)
      }
    });
  }

  async findAll() {
    return prisma.land.findMany();
  }

}

