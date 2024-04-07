
import express, { Application } from 'express';
import http from 'http';
import { Server, Socket } from 'socket.io';

class App {
    private app: Application
    private http: http.Server
    private io: Server

    constructor() {
        this.app = express();
        this.http = new http.Server(this.app)
        this.io = new Server(this.http, {
            cors: {
                origin: '*'
            }
        })
    }

    public listen() {
        this.http.listen(3333, () => {
            console.log('Server is up on 3333')
        })
    }

    public listenSocket() {
        this.io.of('/streams').on('connection', this.socketEvents)
    }

    private socketEvents(socket: Socket) {
        console.log('socket connected: ' + socket.id)
        socket.on('subscribe', (data) => {
            console.log('usuário inserido na sala: ' + data.roomId)
            socket.join(data.roomId)
            socket.join(data.socketId)
            //array de rooms| prop rooms é nativa do socket
            const roomSession = Array.from(socket.rooms)
            if (roomSession.length > 1) {
                socket.to(data.roomId).emit('new user', {
                    socketId: socket.id,
                    username: data.username
                })
            }

        })
        socket.on('newUserStart', (data) => {
            console.log('Entrou um novo usuário: ', data)
            socket.to(data.to).emit('newUserStart', {
                sender: data.sender
            })
        })


        socket.on('chat', (data) => {
            console.log("Socket: ", data)
            socket.broadcast.to(data.roomId).emit('chat', {
                message: data.message,
                username: data.username,
                time: data.time
            })
        })
    }
}
export { App };
