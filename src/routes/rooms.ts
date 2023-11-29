import { Router } from 'express'
import { getAllRooms, createRoom, getRoom, updateRoom } from '@/controllers/room.controller'

const router = Router()

router.route('/')
  .get(getAllRooms)
  .post(createRoom)

router.route('/:id')

  .get(getRoom)
  .put(updateRoom)

export { router }
