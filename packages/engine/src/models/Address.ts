import Area from "./Area";
import City from "./City";

export interface AddressConstructorInput {
  street: string;
  area: Area;
  city: City;
  coordinates: string;
}

export default class Address {
  street: string;
  area: Area;
  city: City;
  coordinates: string;

  constructor(input: AddressConstructorInput) {
    this.street = input.street;
    this.area = input.area;
    this.city = input.city;
    this.coordinates = input.coordinates;
  }
}
