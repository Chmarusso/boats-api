import { skip } from 'graphql-resolvers'

export const isAuthenticated = (parent, args, { userId }) =>
  userId ? skip : new Error('Unauthorized')
