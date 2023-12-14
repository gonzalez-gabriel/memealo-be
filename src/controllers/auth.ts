import { type Request, type Response, type NextFunction } from 'express'
import type { BodyUserType } from '@/types/user'
import bcrypt from 'bcryptjs'
import { httpResponse } from '@/helpers/httpStatus'
import { userService } from '@/services/user'
import { authServices } from '@/services/auth'


const register = async (req: Request<unknown, unknown, BodyUserType>, res: Response, next: NextFunction) => {
  try {
    const { body } = req
    const user = await authServices.create(body)
    return httpResponse.CREATED(res, user)
  } catch (error) {
    next(error)
  }
}

const login = async (req: Request<unknown, unknown, Pick<BodyUserType, 'username' | 'password' >>, res: Response, next: NextFunction) => {
  try {
    const { body } = req
    const user = await userService.getOne(body.username)
    if (user === null) {
      return httpResponse.NOT_FOUND(res, 'Datos invalidos')
    }
    const isPasswordValid = await bcrypt.compare(body.password, user.password)
    if (!isPasswordValid) {
      return httpResponse.NOT_FOUND(res, 'Datos invalidos')
    }

    const logedUser = await authServices.login(user)

    if (logedUser === null) {
      return httpResponse.NOT_FOUND(res, 'Por favor intenta de nuevo')
    }
    return httpResponse.OK(res, logedUser)

  } catch (error) {
    next(error)
  }
}

const refresh = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { refreshToken } = req.body
    const token = await authServices.refresh(refreshToken)

    if (token === null) {
      return httpResponse.UNAUTHORIZED(res, 'Por favor inicia sesión nuevamente')
    }

    return httpResponse.OK(res, token)

  } catch (error) {
    next(error)
  }
}

export { register, login, refresh }
