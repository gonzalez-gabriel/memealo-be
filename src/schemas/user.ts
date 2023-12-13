import { z } from 'zod'
export const bodyUserSchema = z.object({
  body: z.object({
    username: z.string().min(1).max(20),
    email: z.string().min(1).max(20),
    password: z.string().min(1).max(25),
    cheemsCoins: z.number().int().nonnegative()
  })
})

export const idUserSchema = z.object({
  params: z.object({
    id: z.string().regex(/^[0-9]+$/, 'id must be a number')
  })
})

export const updateUserSchema = z.object({
  body: bodyUserSchema.shape.body,
  params: idUserSchema.shape.params
})

