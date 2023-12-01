import { Router } from 'express'
import { getAllRooms, createRoom, getRoom, updateRoom } from '@/controllers/room.controller'

const roomsRouter = Router()

roomsRouter.route('/rooms')
  .get(getAllRooms)
  .post(createRoom)

roomsRouter.route('/rooms/:id')
  .get(getRoom)
  .put(updateRoom)

export { roomsRouter }
