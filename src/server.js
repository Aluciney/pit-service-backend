require('dotenv').config();

const express = require('express');
const cors = require('cors');
const http = require("http");
const socketIO = require("socket.io");
const app = express();

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use('/api', require('./routes'));

const server = http.createServer(app);
const io = socketIO(server);

io.on('connection', socket => {

    socket.on('request_mechanical', location_user => {
        io.emit('mechanical', location_user);
    });

    socket.on('confirme_request_mechanical', location_user => {
        io.emit('confirme_mechanical', location_user);
    });
    
    socket.on('confirme_request_user', location_user => {
        io.emit('confirme_user', location_user);
    });

    socket.on('location_mechanical', socket_request => {
        io.emit('location_mechanical', socket_request);
    });
    
    socket.on('cancel_request_mechanical', location_user => {
        io.emit('cancel_mechanical', location_user);
    });
    
    socket.on('cancel_request_user', location_user => {
        io.emit('cancel_user', location_user);
    });

    socket.on('finish_request_mechanical', location_user => {
        io.emit('finish_mechanical', location_user);
    });

    socket.on('disconnect', () => {

    });
});

server.listen(process.env.PORT || 3001);