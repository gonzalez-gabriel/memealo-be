import { Server } from 'socket.io'
import type { Server as HttpServer } from 'http'
import type { ClientToServerEvents, ServerToClientEvents, SocketData, InterServerEvents } from '@/types/socket'


export const socketServer = (server: HttpServer) => {
  const io = new Server<ClientToServerEvents, ServerToClientEvents, InterServerEvents, SocketData>(server, {
    connectionStateRecovery: {}
  })

  console.log('socket.io is running')

  io.on('connection', (socket) => {
    console.log('user has connected!')

    socket.on('join-room', ({ room }: { room: string }) => {
      socket.join(room)
    })

    socket.on('message-sent', ({ message, room }: { message: string, room: string }) => {
      socket.to(room).emit('message-received', { message })
    })

    socket.on('disconnected', () => {
      console.log('an user has disconnected')
    })
  })
}
