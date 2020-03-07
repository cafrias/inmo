import books from "../data/demo";

const resolvers = {
  Query: {
    books() {
      return books;
    }
  }
};

export default resolvers;
