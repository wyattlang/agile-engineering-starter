
import Purchasable from './purchasable.js';

export default class Land extends Purchasable {

    constructor(id, owner, price, address, acreage) {
        super(id, owner, price);
        this.address = address;
        this.acreage = acreage;
    }

}
