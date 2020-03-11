import Entity, { EntityConstructorInput } from "./Entity";
import Property from "./Property";
import Money from "./Money";
import User from "./User";

export interface OfferConstructorInput extends EntityConstructorInput {
  property: Property;
  cost: Money;
  user: User;
}

export default abstract class Offer extends Entity {
  protected property: Property;
  protected cost: Money;
  protected user: User;

  constructor(input: OfferConstructorInput) {
    super(input);
    this.property = input.property;
    this.cost = input.cost;
    this.user = input.user;
    // TODO: validate money for offer is greater than 0
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
