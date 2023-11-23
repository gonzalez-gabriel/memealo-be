import httpStatus from '../helpers/httpStatus'
import { Request, Response, NextFunction } from 'express'

const getAllRooms = (req: Request, res: Response, next: NextFunction) => {
    res.status(httpStatus.OK).json({ message: 'Get All Rooms' })
}

const getRoom = (req: Request, res: Response, next: NextFunction) => {
    res.status(httpStatus.OK).json({ message: 'Get Room' })

}
const createRoom = (req: Request, res: Response, next: NextFunction) => {
    res.status(httpStatus.CREATED).json({ message: 'Create Room' })
}

const deleteRoom = (req: Request, res: Response, next: NextFunction) => {
    res.status(httpStatus.OK).json({ message: 'Delete Room' })
}

const updateRoom = (req: Request, res: Response, next: NextFunction) => {
    res.status(httpStatus.OK).json({ message: 'Update Room' })
}

export {
    getAllRooms,
    getRoom,
    createRoom,
    deleteRoom,
    updateRoom
}

