import httpStatus from '../helpers/httpStatus'
import type { Request, Response, NextFunction } from 'express'

const getAllRooms = async (_req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.OK).json({ message: 'Get All Rooms' })
}

const getRoom = async (_req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.OK).json({ message: 'Get Room' })
}
const createRoom = async (_req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.CREATED).json({ message: 'Create Room' })
}

const deleteRoom = async (_req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.OK).json({ message: 'Delete Room' })
}

const updateRoom = async (_req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.OK).json({ message: 'Update Room' })
}

export {
  getAllRooms,
  getRoom,
  createRoom,
  deleteRoom,
  updateRoom
}
