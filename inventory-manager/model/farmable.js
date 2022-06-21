
import Purchasable from './purchasable.js';

export default class Farmable extends Purchasable {
    
    constructor(id, owner, price, species, spaceRequired, successRate, yieldPrice) {
        super(id, owner, price);
        this.species = species;
        this.spaceRequired = spaceRequired;
        this.successRate = successRate;
        this.yieldPrice = yieldPrice;
    }

}
