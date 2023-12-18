import express from 'express'
import { createServer } from 'node:http'
import { roomsRouter } from '@/routes/rooms'
import { userRouter } from '@/routes/user'
import { errorHandler } from '@/middlewares/errorHandler'
import 'dotenv/config'
import { socketServer } from '@/socket'
import cors from 'cors'
import { expressjwt as jwt } from 'express-jwt'

const PORT = process.env.PORT ?? 5000

const app = express()

const server = createServer(app)
socketServer(server)

app.use(cors())

app.use(express.json())

app.use(
  jwt({
    secret: process.env.SECRET_KEY,
    algorithms: ["HS256"]
  }).unless({ path: ["/api/auth/register", "/api/auth/login", "/api/auth/refresh"] })
)

app.use('/api', roomsRouter, userRouter)

app.use(errorHandler)

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

