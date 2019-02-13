let socket;

let skeletonCenter;
let skeleton = {}

const init = () => {
    socket = io.connect(`/`);
    
    skeletonCenter = new SkeletonJoint();
    skeleton.handRight = new SkeletonJoint();
    skeleton.handLeft = new SkeletonJoint();

    socket.on(`connect`, () => {
        console.log(`Connected: ${socket.id}`);
    });

    socket.on('bodyFrame', frame => {
        updateFrame(frame);
    });
};

const updateFrame = frame => {
    frame.bodies.forEach(body => {

        if(body.tracked){
            socket.emit(`broadcast`, body);
            
            skeletonCenter.update(body.joints[1]);
            skeleton.handRight.update(body.joints[11], skeletonCenter);
            skeleton.handLeft.update(body.joints[7], skeletonCenter);

            addGestureListeners();
        };
    });
}

const addGestureListeners = () => {
    const INTERVAL_RATE = 1000;

    setInterval(() => {
        Object.keys(skeleton).forEach(key => {
            skeleton[key].addSwipeLeftListener(key, socket);
            skeleton[key].addSwipeRightListener(key, socket);
        });
    }, INTERVAL_RATE);
}

init();