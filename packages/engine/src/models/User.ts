import Entity, { EntityConstructorInput } from "./Entity";

interface UserConstructorInput extends EntityConstructorInput {
  name: string;
  email: string;
  password: string;
  phone?: string;
}

export default class User extends Entity {
  private name: string;
  private email: string;
  private password: string;
  private phone?: string;

  constructor(input: UserConstructorInput) {
    super(input);
    this.name = input.name;
    this.email = input.email;
    this.password = input.password;
    this.phone = input.phone;
  }

  public getName() {
    return this.name;
  }

  public setName(name: string) {
    this.name = name;
  }

  public getEmail() {
    return this.email;
  }

  public setEmail(email: string) {
    this.email = email;
  }

  public getPassword() {
    return this.password;
  }

  public setPassword(password: string) {
    this.password = password;
  }

  public getPhone() {
    return this.phone;
  }

  public setPhone(phone: string) {
    this.phone = phone;
  }
}
