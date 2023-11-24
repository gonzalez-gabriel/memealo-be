import httpStatus from '../helpers/httpStatus'
import type { Request, Response, NextFunction } from 'express'

const getAllRooms = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    return res.status(httpStatus.OK).json({ message: 'Get All Rooms' })
  } catch (error) {
    next(error)
  }
}

const getRoom = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    return res.status(httpStatus.OK).json({ message: 'Get Room' })
  } catch (error) {
    next(error)
  }
}

const createRoom = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    return res.status(httpStatus.CREATED).json({ message: 'Create Room' })
  } catch (error) {
    next(error)
  }
}

const deleteRoom = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    return res.status(httpStatus.OK).json({ message: 'Delete Room' })
  } catch (error) {
    next(error)
  }
}

const updateRoom = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    return res.status(httpStatus.OK).json({ message: 'Update Room' })
  } catch (error) {
    next(error)
  }
}

export {
  getAllRooms,
  getRoom,
  createRoom,
  deleteRoom,
  updateRoom
}
