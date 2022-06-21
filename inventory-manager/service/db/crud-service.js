
export default class CrudService {

  constructor() {
    if (this.constructor === CrudService) {
      throw new Error('CrudService is an abstract class and is not intended to be instantiated')
    }
  }

  save(entityObj) {
    throw new Error('save(entityObj) is abstract and must be overriden by subclasses');
  }

  findById(id) {
    throw new Error('findById(id) is abstract and must be overriden by subclasses');
  }

  findAll() {
    throw new Error('findAll() is abstract and must be overriden by subclasses');
  }

  update(entityObj) {
    throw new Error('update(entityObj) is abstract and must be overriden by subclasses');
  }

  delete(id) {
    throw new Error('delete(id) is abstract and must be overriden by subclasses');
  }

}
