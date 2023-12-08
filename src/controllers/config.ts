import { Response, Request, NextFunction } from 'express'
import { serviceConfigAll, serviceConfigOne } from '@/services/config'
import { httpResponse } from '@/helpers/httpStatus'

const getAllConfig = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const { getSituations, getAchievements, getCosmetics, getGameStats, getTwistCard } = serviceConfigAll
    const config = {
      situations: await getSituations(),
      gameStats: await getGameStats(),
      achievements: await getAchievements(),
      cosmetics: await getCosmetics(),
      twistCard: await getTwistCard()
    }
    return httpResponse.OK(res, config)
  } catch (error) {
    next(error)
  }
}

const getOneConfig = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const { getOneSituation, getOneStatus, getOneAchievement, getOneCosmetic, getOneTwistCard } = serviceConfigOne
    const config = {
      situation: await getOneSituation(id),
      status: await getOneStatus(id),
      achievement: await getOneAchievement(id),
      cosmetic: await getOneCosmetic(id),
      twistCard: await getOneTwistCard(id)
    }
    return httpResponse.OK(res, config)
  } catch (error) {
    next(error)
  }
}

export { getOneConfig, getAllConfig }
