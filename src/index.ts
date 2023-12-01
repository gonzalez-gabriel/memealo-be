import express from 'express'
import { roomsRouter } from '@/routes/rooms'
import { userRouter } from '@/routes/user'
// import { errorHandler } from '@/middlewares'
import 'dotenv/config'
import cors from 'cors'

const app = express()

app.use(cors())

const PORT = process.env.PORT || 3000

app.use(express.json())

app.use('/api', roomsRouter, userRouter)

// app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
