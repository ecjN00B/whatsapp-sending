var app = require('./config/server'),
    port = process.env.port || 3000;

var server = app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

var io = require('socket.io').listen(server);

io.on('connection', (socket) => {
    console.log(`${socket.id} connected`);
    socket.on('disconnect', () => {
        console.log(`${socket.id} disconnected`);
    });
});