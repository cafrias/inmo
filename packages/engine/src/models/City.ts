import Entity, { EntityConstructorInput } from "./Entity";

interface CityConstructorInput extends EntityConstructorInput {
  name: string;
}

export default class City extends Entity {
  private name: string;

  constructor(input: CityConstructorInput) {
    super(input);
    this.name = input.name;
  }

  public getName() {
    return this.name;
  }
}
