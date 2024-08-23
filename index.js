const express = require('express');
const path = require('path');
require('dotenv').config();

//App de Express
const app = express();

//NodeServer
const server = require('http').createServer(app);
const io = require('socket.io')(server);
require('./sockets/socket')(io); 

// Path Publico
const publicPath = path.resolve(__dirname, 'public');

server.listen(process.env.PORT, (err) => {
  if (err) throw new Error(err);
  console.log('Servidor Corriendo en puerto', process.env.PORT );
  app.use(express.static(publicPath));
} );