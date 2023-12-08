// import express from 'express'
// import { Server } from 'socket.io'
// import { createServer } from 'node:http'
// import type { Request, Response } from 'express'

// const PORT = process.env.PORT ?? 3000

// const app = express()

// const server = createServer(app)

// const io = new Server(server, {
//   connectionStateRecovery: {}
// })

// io.on('connection', (socket) => {
//   console.log('user has connected!')

//   socket.on('disconnected', () => {
//     console.log('an user has disconnected')
//   })

//   socket.on('chat message', (msg: string) => {
//     io.emit('chat message', msg)
//   })
// })

// app.get('/chat', (_req: Request, res: Response) => {
//   res.sendFile(process.cwd() + '/client/index.html')
// })

// server.listen(3000, () => {
//   console.log(`Server is running on port ${PORT}`)
// })
