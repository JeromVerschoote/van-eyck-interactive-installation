const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const port = process.env.PORT || 9090;

const MPR121 = require('node-picap');
const mpr121 = new MPR121('0x5C');

mpr121.setTouchThreshold(40);
mpr121.setReleaseThreshold(20);

app.use(`/`, express.static(`public`));

server.listen(port, () => {
console.log(`Server listening on port ${port}!`);
});

io.on('connection', socket => {
    console.log(`Connection`);

    mpr121.on('data', data => {
       data.forEach((electrode, index) => {
          if(electrode.isNewTouch){
             console.log(`Touch detected: ${index}`);
             io.sockets.emit(`touch`, index);
          }
       });
    });
});