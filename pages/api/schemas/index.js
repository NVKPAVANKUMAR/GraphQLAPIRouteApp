import { gql } from "apollo-server-micro";

export const typeDefs = gql`
type User {
  id: ID
  login: String
  avatar_url: String
}

type Query {
  getUsers: [User]
  getUser(name: String!): User!
  getPersons: [Person]
  getPerson(id: ID!): Person!
}

type Person {
  id: ID
  email: String
  firstname: String
  lastname: String
  avatar_url: String
}

`;