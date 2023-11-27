import type { Response } from 'express'

enum HttpStatus {
  OK = 200,
  CREATED = 201,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
  INTERNAL_SERVER_ERROR = 500
}

export const httpResponse = {
  OK: (res: Response, data?: any) => {
    return res.status(HttpStatus.OK).json({
      status: HttpStatus.OK,
      message: 'Success',
      data
    })
  },
  CREATED: (res: Response, data: any) => {
    return res.status(HttpStatus.CREATED).json({
      status: HttpStatus.CREATED,
      message: 'Created',
      data
    })
  },
  NOT_FOUND: (res: Response, message: string) => {
    return res.status(HttpStatus.NOT_FOUND).json({
      status: HttpStatus.NOT_FOUND,
      message
    })
  },
  BAD_REQUEST: (res: Response, message: string, errorData: any) => {
    return res.status(HttpStatus.BAD_REQUEST).json({
      status: HttpStatus.BAD_REQUEST,
      message,
      error: errorData
    })
  },
  UNAUTHORIZED: (res: Response, message: string) => {
    return res.status(HttpStatus.UNAUTHORIZED).json({
      status: HttpStatus.UNAUTHORIZED,
      message
    })
  }
}
