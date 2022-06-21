
import Farmable from './farmable.js';

export default class Plant extends Farmable {

    constructor(id, owner, price, species, spaceRequired, successRate, yieldPrice) {
        super(id, owner, price, species, spaceRequired, successRate, yieldPrice);
    }

}
