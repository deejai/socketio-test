import { io, Socket } from 'socket.io-client'



let socket: Socket = io("http://localhost:3100")

socket.emit("create-room")
