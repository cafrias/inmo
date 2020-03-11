import Entity, { EntityConstructorInput } from "./Entity";
import Address from "./Address";

interface PropertyConstructorInput extends EntityConstructorInput {
  address: Address;
  smokingAllowed: boolean;
  petsAllowed: boolean;
  description: string;
}

export default class Property extends Entity {
  private address: Address;
  private smokingAllowed: boolean;
  private petsAllowed: boolean;
  private description: string;

  constructor(input: PropertyConstructorInput) {
    super(input);
    this.address = input.address;
    this.smokingAllowed = input.smokingAllowed;
    this.petsAllowed = input.petsAllowed;
    this.description = input.description;
  }

  public getAddress() {
    return this.address;
  }

  public setAddress(address: Address) {
    this.address = address;
  }

  public getSmokingAllowed() {
    return this.smokingAllowed;
  }

  public setSmokingAllowed(smokingAllowed: boolean) {
    this.smokingAllowed = smokingAllowed;
  }

  public getPetsAllowed() {
    return this.petsAllowed;
  }

  public setPetsAllowed(petsAllowed: boolean) {
    this.petsAllowed = petsAllowed;
  }

  public getDescription() {
    return this.description;
  }

  public setDescription(description: string) {
    this.description = description;
  }
}
