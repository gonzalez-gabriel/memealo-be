import { Router } from 'express'
import { getAllAchievements, getAchievements, createAchievements, updateAchievements } from '@/controllers/achievements';

const router = Router();

router.route('/')
  .get(getAllAchievements)
  .post(createAchievements)

router.route('/:id')
  .get(getAchievements)
  .put(updateAchievements)

export { router }