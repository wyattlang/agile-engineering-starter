
export default class Farmable {

  constructor(id, ownerId, price, species, spaceRequired, successRate, yieldPrice) {
    this.id = id;
    this.ownerId = ownerId;
    this.price = price;
    this.species = species;
    this.spaceRequired = spaceRequired;
    this.successRate = successRate;
    this.yieldPrice = yieldPrice;
    this.survivedLastSeason = true;
  }

  grow() {
    if (this.survivesTheSeason()) {
      return this.yieldPrice;
    }
    console.log(`farmable with id=${this.id} did not survive the season upon growth`);
    return 0;
  }

  survivesTheSeason() {
    if (Math.random() >= this.successRate) {
      return this.survivedLastSeason = false;
    }
    return this.survivedLastSeason;
  }

  toString() {
    JSON.stringify(this);
  }

}
