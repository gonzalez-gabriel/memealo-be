import { httpResponse } from '@/helpers/httpStatus'
import { roomService } from '@/services/rooms.service'

import type { Request, Response, NextFunction } from 'express'

const getAllRooms = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const rooms = await roomService.getAll()
    if (rooms === null) {
      return httpResponse.NOT_FOUND(res, 'rooms not found')
    }
    return httpResponse.OK(res, rooms)
  } catch (error) {
    next(error)
  }
}

const getRoom = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const rooms = await roomService.getOne(id)
    if (rooms === null) {
      return httpResponse.NOT_FOUND(res, 'room not found')
    }
    return httpResponse.OK(res, rooms)
  } catch (error) {
    next(error)
  }
}

const createRoom = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { data } = req.body
    const rooms = await roomService.create(data)
    if (rooms === null) {
      return httpResponse.NOT_FOUND(res, 'not found create')
    }
    return httpResponse.CREATED(res, rooms)
  } catch (error) {
    next(error)
  }
}

const updateRoom = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const { body } = req.body
    const rooms = await roomService.update(id, body)
    if (rooms === null) {
      return httpResponse.NOT_FOUND(res, 'not found update')
    }
    return httpResponse.OK(res, rooms)
  } catch (error) {
    next(error)
  }
}

export {
  getAllRooms,
  getRoom,
  createRoom,
  updateRoom
}
