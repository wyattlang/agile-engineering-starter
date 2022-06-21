
export default class LandEntity {

  LandEntity(id, address, acreage, price) {
    this.id = id;
    this.address = address;
    this.acreage = acreage;
    this.price = price;
  }

  getId() {
    return this.id;
  }

  getAddress() {
    return this.address;
  }

  getAcreage() {
    return this.acreage;
  }

  getPrice() {
    return this.price;
  }

}
