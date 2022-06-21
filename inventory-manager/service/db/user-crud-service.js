
import { PrismaClient } from '@prisma/client';

import CrudService from './crud-service.js';

export default class UserCrudService extends CrudService {

  constructor() {
    this.prismaClient = new PrismaClient();
  }

  /**
   *
   * implement the 5 CrudService methods here
   *
   */

}
