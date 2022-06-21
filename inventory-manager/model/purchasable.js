
import InventoryItem from './inventory-item.js';

export default class Purchasable extends InventoryItem {

  constructor(id, owner, price) {
    super(id, owner);
    this.price = price;
  }

}
