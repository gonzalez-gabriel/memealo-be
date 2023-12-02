import { Router } from 'express'
import { getAllUsers, createUser, getUser, updateUser } from '@/controllers/user'

const userRouter = Router()

userRouter.route('/users')
  .get(getAllUsers)
  .post(createUser)

userRouter.route('/users/:id')
  .get(getUser)
  .put(updateUser)
  
export { userRouter }
