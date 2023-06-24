const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const cors = require('cors');
const Socket = require('./models/socket');

const app = express();
const server = http.createServer(app);

const io = socketio(server);

app.use(cors());

new Socket(io);

module.exports = server;
