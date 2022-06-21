
export default class UserPurchaseService {

  constructor(userCrudService) {
    this.userCrudService = userCrudService;
  }

  userCanAfford(balance, price) {
    return balance > price;    
  }

  async updateBalance(user, price) {
    user.balance -= price;
    return await this.userCrudService.update(user);
  }

  async tryPurchase(userId, price) {
    const user = await this.userCrudService.findById(userId);
    if (this.userCanAfford(user.balance, price)) {
      await this.updateBalance(user, price);
      return true;
    }
    return false;
  }

}
