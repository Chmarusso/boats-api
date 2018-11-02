export default `
  type User {
    id: Int!
    firstName: String!
    lastName: String!
    email: String!
    createdAt: String!
    updatedAt: String!
  }

  type Query {
    allUsers: [User!]!
    getUser(id: Int!): User
  }

  type Mutation {
    createUser(firstName: String!, lastName: String!, email: String!, password: String!): User
    updateUser(id: Int!, firstName: String, lastName: String, email: String, password: String): [Int!]
    deleteUser(id: Int!): Int!
  }

`
