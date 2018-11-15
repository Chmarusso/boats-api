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

extend type Query {
  me: User
  allUsers: [User!]!
  getUser(id: Int!): User
}

extend type Mutation {
  registerUser(firstName: String!, lastName: String!, email: String!, password: String!): User
  loginUser(email: String!, password: String!): AuthenticatedUser
  updateUser(id: Int!, firstName: String, lastName: String, email: String, password: String): [Int!]
  deleteUser(id: Int!): Int!
}
`
