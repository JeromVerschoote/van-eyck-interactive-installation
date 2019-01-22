const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const port = process.env.PORT || 9090;

app.use(`/`, express.static(`public`));

server.listen(port, () => {
console.log(`Server listening on port ${port}!`);
});

io.on('connection', socket => {
    console.log(`Connection`);
    
    socket.on(`keyPressed`, key => {
        console.log(`Key pressed: ${key}`);
        io.sockets.emit(`keyPressed`, key);
    });

    socket.on(`keyReleased`, key => {
        console.log(`Key released: ${key}`);
        io.sockets.emit(`keyReleased`, key);
    });
});