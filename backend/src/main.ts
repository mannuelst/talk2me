import { App } from './app'

const app = new App()
app.listenSocket()

console.log('passei no socket')
app.listen()