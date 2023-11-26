import type { Request, Response, NextFunction } from 'express'
import { userService } from '@/services/user'
import { httpResponse } from '@/helpers/httpStatus'

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { body } = req
    const user = await userService.create(body)
    return httpResponse.CREATED(res, user)
  } catch (error) {
    next(error)
  }
}

const getAllUsers = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await userService.getAll()
    return httpResponse.OK(res, users)
  } catch (error) {
    next(error)
  }
}

const getUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const user = await userService.getOne(id)
    if (user !== null) {
      return httpResponse.NOT_FOUND(res, 'User not found')
    }
    return httpResponse.OK(res, user)
  } catch (error) {
    next(error)
  }
}

const updateUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { body, params } = req
    const { id } = params
    const updatedUser = await userService.update(id, body)
    return httpResponse.OK(res, updatedUser)
  } catch (error) {
    next(error)
  }
}

export {
  createUser,
  getAllUsers,
  getUser,
  updateUser
}
