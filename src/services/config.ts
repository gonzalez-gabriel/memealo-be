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

const serviceConfigOne = {
    getOneSituation: async (id: String) => {
      return await prisma.situations.findUnique({
        where: {
          id: Number(id)
        }
      })
    },
    
    getOneStatus: async (id: String) => {
      return await prisma.gameStats.findUnique({
        where: {
          id: Number(id)
        }
      })
    },
    getOneAchievement: async (id: String) => {
        return await prisma.achievements.findUnique({
        where: {
          id: Number(id)
        }
      })   
    },
    getOneCosmetic: async (id: String) => {
        return await prisma.cosmetics.findUnique({
        where: {
          id: Number(id)
        }
      })   
    },
    getOneTwistCard: async (id: String) => {
        return await prisma.twistCards.findUnique({
        where: {
          id: Number(id)
        }
      })      
    },  
}

export { serviceConfigAll, serviceConfigOne }