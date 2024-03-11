import { App } from './app'

const app = new App()
app.listenSocket()

console.log('hey socket')
app.listen()