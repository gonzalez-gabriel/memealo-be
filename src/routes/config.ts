import { Router } from 'express'
import { getAllConfig } from '@/controllers/config'

const configRouter = Router()

configRouter.route('/config')
    .get(getAllConfig)

export { configRouter }