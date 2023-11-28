import type { CustomResponseData, CustomResponseMessage, CustomResponseMessageError } from '@/types/response'

const HttpStatus = {
  OK: (res: CustomResponseData, data: any) => {
    return res.json({
      statusMsg: 'OK',
      status: 200,
      data
    })
  },
  CREATED: (res: CustomResponseData, data: any) => {
    return res.json({
      statusMsg: 'Created',
      status: 201,
      data
    })
  },
  NO_CONTENT: (res: CustomResponseMessageError, message: string, errorData: any) => {
    return res.json({
      statusMsg: 'not content king',
      status: 204,
      message,
      error: errorData
    })
  },
  BAD_REQUEST: (res: CustomResponseMessageError, message: string, errorData: any) => {
    return res.json({
      statusMsg: 'Bad Request',
      status: 400,
      message,
      error: errorData
    })
  },
  UNAUTHORIZED: (res: CustomResponseMessage, message: string) => {
    return res.json({
      statusMsg: 'Unauthorized',
      status: 401,
      message
    })
  },
  FORBIDDEN: (res: CustomResponseMessage, message: string) => {
    return res.json({
      statusMsg: 'Forbidden',
      status: 403,
      message
    })
  },
  NOT_FOUND: (res: CustomResponseMessageError, message: string, errorData: any) => {
    return res.json({
      statusMsg: 'Not Found',
      status: 404,
      message,
      error: errorData
    })
  },
  UNPROCESSABLE_ENTITY: (res: CustomResponseMessageError, message: string, errorData: any) => {
    return res.json({
      statusMsg: 'Unprocessable Entity',
      status: 422,
      message,
      error: errorData
    })
  },
  INTERNAL_SERVER_ERROR: (res: CustomResponseMessageError, message: string, errorData: any) => {
    return res.json({
      statusMsg: 'Internal Server Error',
      status: 500,
      message,
      error: errorData
    })
  }
} as const

export { HttpStatus }
