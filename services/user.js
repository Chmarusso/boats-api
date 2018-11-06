import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import models from '../db/models'

const generateToken = (user) =>
  jwt.sign({ userId: user.id }, 'secret', { expiresIn: '30d' })

export const register = async (firstName, lastName, email, password) => {
  const passwordHash = await bcrypt.hash(password, 10)
  return models.User.create({ firstName, lastName, email, passwordHash })
}

export const login = async (email, password) => {
  const user = await models.User.findOne({ where: { email } })
  if (!user) { throw new Error('User not found') }

  const valid = await bcrypt.compare(password, user.passwordHash)
  if (!valid) { throw new Error('Wrong password') }

  return { token: generateToken(user), user }
}
