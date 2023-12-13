import type { Response, Request, NextFunction } from 'express'
import { serviceConfigAll } from '@/services/config'
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


export { getAllConfig }
