import { Currency } from "./Currency";

interface MoneyConstructorInput {
  amount: number;
  currency: Currency;
}

export default class Money {
  private amount: number;
  private currency: Currency;

  constructor(input: MoneyConstructorInput) {
    this.amount = input.amount;
    this.currency = input.currency;
  }

  public getAmount() {
    return this.amount;
  }

  public setAmount(amount: number) {
    this.amount = amount;
  }

  public getCurrency() {
    return this.currency;
  }

  public setCurrency(currency: Currency) {
    this.currency = currency;
  }
}
