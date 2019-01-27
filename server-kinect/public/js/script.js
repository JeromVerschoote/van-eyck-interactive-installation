let socket;

const init = () => {
    socket = io.connect(`/`);
    socket.on(`connect`, () => {
        console.log(`Connected: ${socket.id}`);
    });

    socket.on('bodyFrame', frame => {
        console.log(frame);
    });
};

init();