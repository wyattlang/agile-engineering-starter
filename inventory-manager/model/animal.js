
import Farmable from './farmable.js';

export default class Animal extends Farmable {

    constructor(id, owner, price, species, spaceRequired, successRate, yieldPrice, health, age) {
        super(id, owner, price, species, spaceRequired, successRate, yieldPrice);
        this.health = health;
        this.age = age;
    }

}
