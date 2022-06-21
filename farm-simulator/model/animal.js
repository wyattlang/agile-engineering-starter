
import Farmable from './farmable.js';

export default class Animal extends Farmable {

  constructor(id, ownerId, price, species, spaceRequired, successRate, yieldPrice, health, age) {
    super(id, ownerId, price, species, spaceRequired, successRate, yieldPrice);
    this.health = health;
    this.age = age;
  }

  grow() {
    this.age += 1;
    return super.grow();
  }

  survivesTheSeason() {
    if (Math.random() >= (this.successRate - (this.age / 100) - (Math.abs((this.health - 100) / 100)))) {
      return this.survivedLastSeason = false;
    }
    return this.survivedLastSeason;
  }

}
