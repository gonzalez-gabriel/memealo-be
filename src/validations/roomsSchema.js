import Joi from 'joi'

export const roomsSchema = Joi.object({
  roomName: Joi.string().min(3).required(),
  password: Joi.string().pattern(/^[a-zA-Z0-9]{3,30}$/),
  gameStatsId: Joi.number().required(),
  isActive: Joi.boolean().required(),
  maxPlayers: Joi.number().min(2).required(),
})

export const roomsParamsSchema = Joi.object({
  id: Joi.string().length(24).required()
})
 