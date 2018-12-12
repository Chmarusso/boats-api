import userSchema from './user'
import boatSchema from './boat'

const linkSchema = `
  type Query {
    _: Boolean
  }
  type Mutation {
    _: Boolean
  }
`

export default [linkSchema, userSchema, boatSchema];
