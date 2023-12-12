import prisma from '@/libs/prisma'
import type { BodyUserType } from '@/types/user'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import 'types/token'


export const authServices = {
 create: async (user:BodyUserType) => {
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(user.password, salt)

  const newData = {
    ...user,
    password: hashedPassword
  }
  return await prisma.users.create({
    newData
  })
 },
 login: async (user: Pick<BodyUserType, 'username'>) => {
   const token = jwt.sign({
    name: user.username
  }, process.env.SECRET_KEY, { expiresIn: '1h' })

  const refreshToken = jwt.sign({
    name: user.username
  }, process.env.SECRET_REFRESH_KEY, { expiresIn: '12h' })
  
  return {
    token,
    refreshToken
  }
 },
 refresh: async (refreshToken: string)=> {
  const decodedToken = jwt.verify(refreshToken, process.env.SECRET_REFRESH_KEY)

  const token = jwt.sign({
    name: decodedToken.name,
    role: decodedToken.role
  }, process.env.SECRET_KEY, { expiresIn: '1h' })

  return token
 }

}