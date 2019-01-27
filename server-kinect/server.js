const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const port = /*process.env.PORT ||*/ 8080;

const Kinect2 = require('./lib/kinect2');
var kinect = new Kinect2();

app.use(`/`, express.static(`public`));

server.listen(port, () => {
    console.log(`Server listening on port ${port}!`);
});

if(kinect.open()){
    console.log(`Kinect active`);

    io.on('connection', socket => {
        console.log('Connection');

        kinect.on('bodyFrame', frame => {
            console.log(frame);
            io.sockets.emit('bodyFrame', frame);
        });
 
         kinect.openBodyReader();
    });;
}