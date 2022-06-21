
import CrudService from './crud-service.js';

export default class InventoryItemCrudService extends CrudService {

  constructor(prismaClient) {
    super();
    if (this.constructor === InventoryItemCrudService) {
      throw new Error('InventoryItemCrudService is an abstract class and is not intended to be instantiated')
    }
    this.prismaClient = prismaClient;
  }

  async findManyByOwnerId(ownerId) {
    throw new Error('findManyByOwnerId(ownerId) is abstract and must be overriden by subclasses');
  }

}
