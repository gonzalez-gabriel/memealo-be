import type { NextFunction, Response, Request } from 'express'
import { ZodError } from 'zod'
import { httpResponse } from '@/helpers/httpStatus'

const ERROR_HANDLER = {
  validationError: ( res: Response, err: ZodError) => {
    const message = 'validation error on request zod'
    const errorData = err.issues.map((issue) => ({
      message: issue.message,
      path: issue.path
    }))
    return httpResponse.UNPROCESSABLE_ENTITY(res, message, errorData)
  },
  defaultError: (res: Response, err: any) => {
    const message = 'internal server error'
    return httpResponse.INTERNAL_SERVER_ERROR(res, message, err)
  }
  
}

export const errorHandler = (err: any, _req: Request, res: Response, _next: NextFunction) => {
  let option = err?.name

  if (err instanceof ZodError) {
    option = 'validationError'
  }

  const handler = ERROR_HANDLER[option as keyof typeof ERROR_HANDLER] ?? ERROR_HANDLER.defaultError
  handler(res, err)
}
