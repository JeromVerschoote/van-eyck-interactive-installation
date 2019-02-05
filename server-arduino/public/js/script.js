let socket;

const init = () => {
    socket = io.connect(`/`);
    socket.on(`connect`, () => {
        console.log(`Connected: ${socket.id}`);
    });

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);
};

const handleKeyDown = e => {
    socket ? socket.emit(`touch`, getKeyFromKeyCode(e.keyCode)) : null;
}

const handleKeyUp = e => {
    socket ? socket.emit(`touchReleased`, getKeyFromKeyCode(e.keyCode)) : null;
}

const getKeyFromKeyCode = keyCode => {

    if(keyCode){
        let key;

        keyCode === 37 ? key = `arrowLeft` : null;
        keyCode === 39 ? key = `arrowRight` : null;
    
        return key;
    }
}

init();