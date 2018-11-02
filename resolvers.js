export default {
  Query: {
    allUsers: (parent, args, { models }) => models.User.findAll(),
    getUser: (parent, { id }, { models }) =>
      models.User.findOne({ where: { id } })
  },

  Mutation: {
    createUser: (parent, { firstName, lastName, email }, { models }) =>
      models.User.create({ firstName, lastName, email }),
    updateUser: (parent, { id, firstName, email }, { models }) =>
      models.User.update({ firstName, email }, { where: { id } }),
    deleteUser: (parent, args, { models }) =>
      models.User.destroy({ where: { id: args.id } })
  },
};
