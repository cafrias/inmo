import Entity, { EntityConstructorInput } from "./Entity";

interface AreaConstructorInput extends EntityConstructorInput {
  name: string;
}

export default class Area extends Entity {
  private name: string;

  constructor(input: AreaConstructorInput) {
    super(input);
    this.name = input.name;
  }

  public getName() {
    return this.name;
  }
}
