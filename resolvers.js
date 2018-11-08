import * as user from './services/user'

export default {
  Query: {
    me: (parent, args, { models, userId }) => {
      if (userId) {
        return models.User.findOne({ where: { id: userId } })
      } else {
        return null
      }
    },
    allUsers: (parent, args, { models }) => models.User.findAll(),
    getUser: (parent, { id }, { models }) =>
      models.User.findOne({ where: { id } })
  },

  Mutation: {
    registerUser: (parent, { firstName, lastName, email, password }, { models }) =>
      user.register(firstName, lastName, email, password),
    loginUser: (parent, { email, password }, { models }) =>
      user.login(email, password),
    updateUser: (parent, { id, firstName, email }, { models }) =>
      models.User.update({ firstName, email }, { where: { id } }),
    deleteUser: (parent, args, { models }) =>
      models.User.destroy({ where: { id: args.id } })
  },
};
