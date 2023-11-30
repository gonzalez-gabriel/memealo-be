import { Router } from 'express'
import { getAllUsers, createUser, getUser, updateUser } from '@/controllers/user'

const router = Router()

router.route('/').get(getAllUsers).post(createUser)

router.route('/:id').get(getUser).put(updateUser)
export { router }
