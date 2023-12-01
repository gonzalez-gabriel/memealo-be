import prisma from '../../libs/prisma'

export const achievementsService = {
  getAll: async () => {
    return await prisma.achievements.findMany()
  },
  getOne: async (id: string) => {
    return await prisma.achievements.findUnique({
      where: {
        id: Number(id)
      }
    })
  },
  create: async (data: any) => {
    return await prisma.achievements.create({
      data
    })
  },
  update: async (id: string, data: any) => {
    return await prisma.achievements.update({
      where: {
        id: Number(id)
      },
      data
    })
  },
  delete: async (id: string) => {
    return await prisma.achievements.delete({
      where: {
        id: Number(id)
      }
    })
  }
}
