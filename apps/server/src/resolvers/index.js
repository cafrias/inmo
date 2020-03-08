import fixture from "../data/fixture";

// TODO: refactor
const OfferType = {
  Selling: "SELLING",
  Rent: "RENT"
};

const resolvers = {
  Query: {
    users() {
      return Object.values(fixture.users);
    },

    offer(_, args) {
      return fixture.offers[args.id];
    },

    offers() {
      return Object.values(fixture.offers);
    }
  },

  Offer: {
    __resolveType(obj) {
      switch (obj.type) {
        case OfferType.Selling:
          return "SellingOffer";
        case OfferType.Rent:
          return "RentOffer";
        default:
          throw new Error(`Unknown offer type '${obj.type}'`);
      }
    }
  }
};

export default resolvers;
