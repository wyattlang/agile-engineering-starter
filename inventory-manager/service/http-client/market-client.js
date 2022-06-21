
export default class MarketClient {

  constructor() {
    if (this.constructor === MarketClient) {
      throw new Error('MarketClient is an abstract class and is not intended to be instantiated')
    }
  }

  findById() {
    throw new Error('findById() is abstract and must be overriden by subclasses')
  }

  findAll() {
    throw new Error('findAll() is abstract and must be overriden by subclasses')
  }

}
