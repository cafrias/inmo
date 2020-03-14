import Entity, { EntityConstructorInput } from "./Entity";
import Property from "./Property";
import Money from "./Money";
import User from "./User";

export interface OfferConstructorInput extends EntityConstructorInput {
  property: Property;
  cost: Money;
  user: User;
}

export class OfferInvalidCostError extends Error {
  constructor(id: string, cost: Money) {
    super(`Offer '${id}': Invalid cost '${cost.getAmount()}'`);
  }
}

export default abstract class Offer extends Entity {
  private static validateCost(offerId: string, cost: Money) {
    if (cost.getAmount() <= 0) {
      throw new OfferInvalidCostError(offerId, cost);
    }
  }

  private static validateInput(input: OfferConstructorInput) {
    this.validateCost(input.id, input.cost);
  }

  protected property: Property;
  protected cost: Money;
  protected user: User;

  /**
   * @param input
   * @throws {}
   */
  constructor(input: OfferConstructorInput) {
    Offer.validateInput(input);

    super(input);
    this.property = input.property;
    this.cost = input.cost;
    this.user = input.user;
  }

  public getProperty() {
    return this.property;
  }

  public getCost() {
    return this.cost;
  }

  public setCost(cost: Money) {
    this.cost = cost;
  }

  public getUser() {
    return this.user;
  }
}
