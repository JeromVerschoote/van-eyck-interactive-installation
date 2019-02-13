let socket;

const init = () => {
    socket = io.connect(`/`);
    socket.on(`connect`, () => {
        console.log(`Connected: ${socket.id}`);
    });

   socket.on(`touch`, touch => {
      console.log(`Touch detected: ${touch}`);
   });
};

init();