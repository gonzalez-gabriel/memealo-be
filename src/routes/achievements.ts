import { Router } from 'express'
import {
  getAllAchievements,
  getAchievements,
  createAchievements,
  updateAchievements,
  deleteAchievements
} from '@/controllers/achievements'

const achievementsRouter = Router()

achievementsRouter.route('/achievements')
.get(getAllAchievements)
.post(createAchievements)

achievementsRouter.route('/achievements/:id')
.get(getAchievements)
.put(updateAchievements)
.delete(deleteAchievements)

export { achievementsRouter }
