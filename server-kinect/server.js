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
            io.sockets.emit('bodyFrame', frame);
        });

        socket.on(`gesture`, gesture => {
            console.log(`Gesture detected: ${gesture}`);
            io.sockets.emit(`gesture`, gesture);
        });
        
        socket.on(`broadcast`, body => {
            console.log(`Broadcasting: ${body.joints[11].depthX}`);
            io.sockets.emit(`broadcast`, body);
        });
 
         kinect.openBodyReader();
    });;
}