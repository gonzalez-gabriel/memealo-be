import express from 'express'
import { createServer } from 'node:http'
import { roomsRouter } from '@/routes/rooms'
import { userRouter } from '@/routes/user'
import { errorHandler } from '@/middlewares/errorHandler'
import 'dotenv/config'
import { socketServer } from '@/socket'
import cors from 'cors'

const PORT = process.env.PORT ?? 5000

const app = express()

const server = createServer(app)
socketServer(server)

app.use(cors())

app.use(express.json())

app.use('/api', roomsRouter, userRouter)

app.use(errorHandler)

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

