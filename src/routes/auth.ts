import { Router } from 'express'
import { login, register, refresh } from '@/controllers/auth'

const authRouter = Router()

authRouter.route('/auth/login')
  .post(login)

authRouter.route('/auth/refresh')
  .post(refresh)

authRouter.route('/register')
  .post(register)
