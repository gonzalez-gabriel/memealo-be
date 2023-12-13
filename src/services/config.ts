import prisma from '@/libs/prisma'

const serviceConfigAll = {
  getSituations: async () => {
    return await prisma.situations.findMany()
  },
  getGameStats: async () => {
      return await prisma.gameStats.findMany()
    },
   getAchievements: async () => {
      return await prisma.achievements.findMany()
   },
   getCosmetics: async () => {
      return await prisma.cosmetics.findMany()
   },
   getTwistCard:async() => {
      return await prisma.twistCards.findMany()
   }
}

export { serviceConfigAll }