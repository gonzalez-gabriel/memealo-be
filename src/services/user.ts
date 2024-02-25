import prisma from '@/libs/prisma'
import type { BodyUserType, IdUserType } from '@/types/user'

export const userService = {
  create: async (data:BodyUserType) => {
    return await prisma.users.create({
      data: {
        ...data,
        // password: data.password, hacer lo de bycrypt
      }
    })
  },
  getAll: async () => {
    return await prisma.users.findMany()
  },
  getOne: async (id: IdUserType) => {
    return await prisma.users.findUnique({
      where: {
        id: Number(id)
      }
    })
  },
  update: async (id: IdUserType, data: BodyUserType) => {
    return await prisma.users.update({
      where: {
        id: Number(id)
      },
      data
    })
  }
}
