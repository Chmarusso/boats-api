export default `
  type User {
    id: Int!
    firstName: String!
    lastName: String!
    email: String!
    createdAt: String!
    updatedAt: String!
  }

  type AuthenticatedUser {
    token: String!
    user: User!
  }

  type Query {
    allUsers: [User!]!
    getUser(id: Int!): User
  }

  type Mutation {
    registerUser(firstName: String!, lastName: String!, email: String!, password: String!): User
    loginUser(email: String!, password: String!): AuthenticatedUser
    updateUser(id: Int!, firstName: String, lastName: String, email: String, password: String): [Int!]
    deleteUser(id: Int!): Int!
  }

`
