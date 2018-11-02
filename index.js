import express from 'express'
import graphqlHTTP from 'express-graphql'
import { makeExecutableSchema } from 'graphql-tools'

import typeDefs from './schema'
import resolvers from './resolvers'
import models from './db/models'

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
})

const app = express()
app.use('/graphql', graphqlHTTP({
  schema,
  context: { models },
  graphiql: true,
}));
app.listen(4000)
console.log('Running a GraphQL API server at localhost:4000/graphql')
