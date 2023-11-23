import {Router } from 'express'
import { getAllRooms, createRoom, deleteRoom, getRoom, updateRoom } from '../controllers/roomController'

const router = Router()

router.route('/')
  .get(getAllRooms)
  .post(createRoom)

router.route('/:id')
  .get(getRoom)
  .put(updateRoom)
  .deletm( deleteRoom)

export { router }
