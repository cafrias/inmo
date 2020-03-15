import { gql } from "apollo-server";

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
    password: String!
    phone: String
  }

  type Property {
    id: ID!
    address: Address!
    smokingAllowed: Boolean!
    petsAllowed: Boolean!
    description: String!
  }

  interface Offer {
    id: ID!
    property: Property!
    cost: Money!
    user: User!
  }

  type SellingOffer implements Offer {
    id: ID!
    property: Property!
    user: User!
    cost: Money!
  }

  type RentOffer implements Offer {
    id: ID!
    property: Property!
    period: PeriodEnum!
    cost: Money!
    user: User!
  }

  enum PeriodEnum {
    DAILY
    MONTHLY
  }

  enum Currency {
    USD
    ARS
  }

  type Money {
    amount: Float!
    currency: Currency!
  }

  type Address {
    street: String!
    area: Area!
    city: City!
    coordinates: String
  }

  type City {
    id: ID!
    name: String!
  }

  type Area {
    id: ID!
    name: String!
  }

  input CreateUserInput {
    name: String!
    email: String!
    password: String!
    phone: String
  }

  # -------------------------------------------
  # Query
  # -------------------------------------------
  type Query {
    users: [User!]!

    offers: [Offer!]!
    offer(id: ID!): Offer
  }

  # -------------------------------------------
  # Mutation
  # -------------------------------------------
  type Mutation {
    createUser(input: CreateUserInput!): User!
  }
`;

export default typeDefs;
