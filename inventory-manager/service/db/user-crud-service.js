
import { PrismaClient } from '@prisma/client';

import CrudService from './crud-service.js';

const prisma = new PrismaClient();

export default class UserCrudService extends CrudService {

  async save(user) {
    delete user.id;
    return prisma.user.create({
      data: user
    });
  }

  async findById(id) {
    return prisma.user.findUnique({
      where: {
        id: Number.parseInt(id)
      }
    });
  }

  async findAll() {
    return prisma.user.findMany();
  }

  async update(user) {
    return prisma.user.update({
      where: {
        id: Number.parseInt(user.id)
      },
      data: {
        balance: Number.parseFloat(user.balance)
      }
    });
  }

  async delete(id) {
    return prisma.user.delete({
      where: {
        id: Number.parseInt(id)
      }
    });
  }

}
