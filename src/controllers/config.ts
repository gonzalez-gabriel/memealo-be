import { Response, Request, NextFunction } from 'express'
import { serviceConfig } from '@/services/config'
import { httpResponse } from '@/helpers/httpStatus'

const getAllConfig = async (_req: Request, res: Response, next: NextFunction) => {
    try{
      const config = await serviceConfig.getAll()
      return httpResponse.OK(res, config)
    } catch (error) {
        next(error)
    } finally{
        return httpResponse.NOT_FOUND(res, 'el get all se chingo')
    }
}

const getOneConfig = async (req:Request, res:Response, next:NextFunction) => {
    try {
        const { id } = req.params
        const config = await serviceConfig.getOne(id)
        return httpResponse.OK(res, config)
    } catch (error) {
        next(error)
    }   finally {
        return httpResponse.NOT_FOUND(res, 'el get one se chingo')
    }
}

export {
    getOneConfig,
    getAllConfig
}