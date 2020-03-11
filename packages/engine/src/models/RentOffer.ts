import Offer, { OfferConstructorInput } from "./Offer";
import { RentPeriod } from "./RentPeriod";

interface RentOfferConstructorInput extends OfferConstructorInput {
  period: RentPeriod;
}

export default class RentOffer extends Offer {
  private period: RentPeriod;

  constructor(input: RentOfferConstructorInput) {
    super(input);
    this.period = input.period;
  }

  public getPeriod() {
    return this.period;
  }

  public setPeriod(period: RentPeriod) {
    this.period = period;
  }
}
