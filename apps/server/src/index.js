import "./bootstrap";
import { ApolloServer } from "apollo-server";

import typeDefs from "./schema";
import resolvers from "./resolvers";
import dbConn from "../db/dbConn";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context(integrationContext) {
    return {
      db: dbConn
    };
  }
});

server
  .listen()
  .then(({ url }) => {
    console.log(`Server ready at ${url}`);
    return dbConn.authenticate();
  })
  .catch(err => {
    console.error(err);
    process.exit();
  });
