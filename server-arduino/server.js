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
    
    socket.on(`touch`, touch => {
        console.log(`Touch detected: ${touch}`);
        io.sockets.emit(`touch`, touch);
    });

    socket.on(`touchReleased`, touch => {
        console.log(`Key released: ${touch}`);
        io.sockets.emit(`keyReleased`, touch);
    });
});