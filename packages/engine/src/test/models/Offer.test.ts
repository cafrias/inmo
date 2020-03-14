import Offer, { OfferInvalidCostError } from "../../models/Offer";
import Money from "../../models/Money";
import { Currency } from "../../models/Currency";
import { properties, users } from "../data/fixture";

class DummyOffer extends Offer {}

describe("Offer", () => {
  describe("instantiation", () => {
    it("cost should be positive", () => {
      expect(() => {
        new DummyOffer({
          id: "offer",
          cost: new Money({
            amount: -12,
            currency: Currency.ARS
          }),
          property: properties["downtown house"],
          user: users.molly
        });
      }).toThrow(OfferInvalidCostError);
    });
  });
});
