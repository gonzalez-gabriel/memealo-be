import { Router } from 'express'
import {
  getAllAchievements,
  getAchievements,
  createAchievements,
  updateAchievements,
  deleteAchievements
} from '@/controllers/achievements'

const router = Router()

router.route('/').get(getAllAchievements).post(createAchievements)

router.route('/:id').get(getAchievements).put(updateAchievements).delete(deleteAchievements)

export { router }
