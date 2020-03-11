export interface EntityConstructorInput {
  id: string;
}

export default class Entity {
  private id: string;

  constructor(input: EntityConstructorInput) {
    this.id = input.id;
  }

  public getId() {
    return this.id;
  }
}
