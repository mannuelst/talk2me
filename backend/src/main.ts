import { App } from './server'

const app = new App()
app.listenSocket()

console.log('hey socket')
app.listen()