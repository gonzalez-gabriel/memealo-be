import prisma from '@/libs/prisma'
import type  { BodyUserType } from '@/types/user'

export const userService = {
  create: async (data: BodyUserType) => {
    return await prisma.users.create({
      data
    })
  },
  getAll: async () => {
    return await prisma.users.findMany()
  },
  getOne: async (id: string) => {
    return await prisma.users.findUnique({
      where: {
        id: Number(id)
      }
    })
  },
  update: async (id: string, newData: Partial<BodyUserType>) => {
    return await prisma.users.update({
      where: {
        id: Number(id)
      },
      ...newData
    })
  }
}
