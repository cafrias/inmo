import fixture from "../data/fixture";
import { User } from "../models";

// TODO: refactor
const OfferType = {
  Selling: "SELLING",
  Rent: "RENT"
};

/**
 * @type {{ [key: string]: import("apollo-server").IResolverObject<any, import("../global").ServerContext> }}
 */
const resolvers = {
  Query: {
    users() {
      return Object.values(fixture.users);
    },

    offer(_, args, ctx) {
      return fixture.offers[args.id];
    },

    offers() {
      return Object.values(fixture.offers);
    }
  },

  Mutation: {
    /**
     *
     * @param {*} _
     * @param {{input: CreateUserInput}} args
     */
    async createUser(_, args) {
      const newUser = User.build(args.input);

      try {
        return await newUser.save();
      } catch (error) {
        console.error("Unable to save User", error);
        throw new Error("Internal Error");
      }
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
