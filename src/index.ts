import express from 'express'
import { router } from './routes'
import 'dotenv/config'
import cors from 'cors'

const app = express()

app.use(cors())

const PORT = process.env.PORT

app.use(express.json())

app.use('/api', router)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
