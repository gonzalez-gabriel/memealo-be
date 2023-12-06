import { Router } from 'express'
import { getAllUsers, createUser, getUser, updateUser } from '@/controllers/user'
import { bodyUserSchema, idUserSchema, updateUserSchema } from '@/schemas/user'
import { schemaValidator } from '@/middlewares/schemaValidator'

const userRouter = Router()

userRouter.route('/users')
  .get(getAllUsers)
  .post(schemaValidator(bodyUserSchema),createUser)

userRouter.route('/users/:id')
  .get(schemaValidator(idUserSchema), getUser)
  .put(schemaValidator(updateUserSchema), updateUser)
  
export { userRouter }
