const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const server = express()

server.use(cors())
server.use(bodyParser.json()) // Allows json uploads

server.use('/', [
  require('./routes/todolist')
])


server.listen(7000, (error) => {
  if (error) {
    console.log('Error occured', error)
  }
  else{
    console.log('Server started at http://localhost:7000')
  }
})