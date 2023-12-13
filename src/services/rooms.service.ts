import prisma from '@/libs/prisma' 

export const roomService = {

  getAll: async () => {
    return await prisma.rooms.findMany()
  },
  getOne: async (id: string) => {
    return await prisma.rooms.findUnique({
      where: {
        id: Number(id)
      }
    })
  },
  create: async (data:any) => {
    const config = await prisma.rooms.create({
      data
    })
    return config
  },
  update: async (id: string, data: any) => {
    return await prisma.rooms.update({
      where: {
        id: Number(id)
      },
      data
    })
  }
}
