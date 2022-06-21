
import InventoryItemCrudService from './inventory-item-crud-service.js';

export default class LandCrudService extends InventoryItemCrudService {

  constructor(prismaClient) {
    super(prismaClient);
  }

  async save(land) {
    return this.prismaClient.land.create({
      data: {
        ownerId: Number.parseInt(land.ownerId),
        price: Number.parseFloat(land.price),
        address: land.address,
        acreage: Number.parseInt(land.acreage)
      }
    });
  }

  async findById(id) {
    return this.prismaClient.land.findUnique({
      where: {
        id: Number.parseInt(id)
      }
    });
  }

  async findAll() {
    return this.prismaClient.land.findMany();
  }

  async update(land) {
    return this.prismaClient.land.update({
      where: {
        id: Number.parseInt(land.id)
      },
      data: {
        ownerId: Number.parseInt(land.ownerId),
        price: Number.parseFloat(land.price),
        address: land.address,
        acreage: Number.parseInt(land.acreage)
      }
    });
  }

  async delete(id) {
    return this.prismaClient.land.delete({
      where: {
        id: Number.parseInt(id)
      }
    });
  }

  async findManyByOwnerId(ownerId) {
    return this.prismaClient.land.findMany({
      where: {
        ownerId: Number.parseInt(ownerId)
      }
    });
  }

}
