require('./init')

const http = require('http')
const api = require('./api').default
const WebsocketServer = require('./ws').default
const Exchange = require('./exchange').default

// Start the http/api server
const httpServer = http.createServer(api.callback())
httpServer.listen(process.env.PORT || '3005')
httpServer.on('error', (err) => { throw err })
httpServer.on('listening', () => {
  const address = httpServer.address()
  console.log('Listening on %s%s', address.address, address.port)
})

// Start the Websocket Server
const wsServer = new WebsocketServer(httpServer)
wsServer.start()

// Start the Exchange Server
const exServer = new Exchange()
exServer.startCacheUpdateJobs()
