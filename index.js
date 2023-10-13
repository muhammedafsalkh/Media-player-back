// import json-server
const jsonServer =require('json-server')

// create json d=server using json-server library
const mediaPlayerServer=jsonServer.create()

// set up path/route for db.json file
const router = jsonServer.router("db.json")

// Returns middkewares used by JSON Server.
const middleware = jsonServer.defaults()

// set up port for server app
const port = 4000 || process.env.port

// use middleware and router in server
mediaPlayerServer.use(middleware)
mediaPlayerServer.use(router)

// server lisren for request from frontend
mediaPlayerServer.listen(port,()=>{
    console.log('run');
})