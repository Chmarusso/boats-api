import userSchema from './user'

const linkSchema = `
  type Query {
    _: Boolean
  }
  type Mutation {
    _: Boolean
  }
`

export default [linkSchema, userSchema];
