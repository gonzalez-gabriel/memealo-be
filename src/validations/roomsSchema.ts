import { z } from 'zod';

export const bodyRoomsSchema = z.object({
  body: z.object({
    roomName: z.string().min(3),
    password: z.string().regex(/^[a-zA-Z0-9]{3,30}$/).optional(),
    gameStatsId: z.number(),
    isActive: z.boolean(),
    maxPlayers: z.number().min(2),
  })
});

export const idRoomSchema = z.object({
  params: z.object({
    id: z.string().regex(/^[0-9]+$/, 'id must be a number')
  })
});

export const updateUserSchema = z.object({
  body: bodyRoomsSchema.shape.body,
  params: idRoomSchema.shape.params
})
