import prisma from '../../libs/prisma'

export const userService = {
  create: async (data: any) => {
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
  update: async (id: string, data: any) => {
    return await prisma.users.update({
      where: {
        id: Number(id)
      },
      data
    })
  },
  delete: async (id: string) => {
    return await prisma.users.delete({
      where: {
        id: Number(id)
      }
    })
  }
}
