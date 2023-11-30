import type { Response, Request, NextFunction } from 'express'
import { httpResponse } from '@/helpers/httpStatus'
import { achievementsService } from '@/services/achievements'

const createAchievements = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { body } = req
    const achievements = await achievementsService.create(body)
    return httpResponse.CREATED(res, achievements)
  } catch (error) {
    next(error)
  }
}

const getAllAchievements = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const achievements = await achievementsService.getAll()
    return httpResponse.OK(res, achievements)
  } catch (error) {
    next(error)
  }
}

const getAchievements = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { params } = req
    const { id } = params
    const achievements = await achievementsService.getOne(id)
    if (achievements === null) {
      return httpResponse.NOT_FOUND(res, 'Achievements not found')
    }
    return httpResponse.OK(res, achievements)
  } catch (error) {
    next(error)
  }
}

const updateAchievements = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { body, params } = req
    const { id } = params
    const achievements = await achievementsService.update(id, body)
    if (achievements === null) {
      return httpResponse.NOT_FOUND(res, 'Achievements not found')
    }
    return httpResponse.OK(res, achievements)
  } catch (error) {
    next(error)
  }
}

const deleteAchievements = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { params } = req
    const { id } = params
    await achievementsService.delete(id)
    return httpResponse.OK(res, 'successfully deleted')
  } catch (error) {
    next(error)
  }
}

export {
  createAchievements,
  getAllAchievements,
  getAchievements,
  updateAchievements,
  deleteAchievements
}
