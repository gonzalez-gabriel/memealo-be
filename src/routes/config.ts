import { Router } from 'express'
import { getAllConfig, getOneConfig  } from '@/controllers/config'

const configRouter = Router()

configRouter.route('/config')
    .get(getAllConfig)

configRouter.route('/config/:id')
    .get(getOneConfig)

export { configRouter }