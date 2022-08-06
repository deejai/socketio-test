import { Socket } from 'socket.io'

const Express = require("express")()
const Http = require("http").Server(Express)
const Socketio = require("socket.io")(Http)

class Lobby {
    public readonly name: string
    
}

Socketio.on("connection", (socket: Socket) => {
    console.log("connected")
    socket.on("create-room", (socket: Socket)=>{
    })
})

Http.listen(3100, () => {
    console.log("Listening at :3100...")
})
