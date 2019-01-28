let socket;

let rightHandPosition, torsoPosition;
let rightHandRelativePosition, rightHandRelativeSpeed, tempSpeed;

const init = () => {
    socket = io.connect(`/`);
    socket.on(`connect`, () => {
        console.log(`Connected: ${socket.id}`);
    });

    socket.on('bodyFrame', frame => {

        frame.bodies.forEach(body => {
            if(body.tracked){
               
                rightHandPosition = body.joints[11].depthX;
                torsoPosition = body.joints[1].depthX;

                setInterval(() => {
                    if(tempSpeed){
                        rightHandRelativePosition = rightHandPosition - torsoPosition;
                        rightHandRelativeSpeed = rightHandRelativePosition - tempSpeed;

                        if(rightHandRelativeSpeed < -0.34){
                            const gesture = `swipeLeft`;
                            console.log(`Gesture detected: ${gesture}`);
                            socket.emit(`gesture`, gesture);
                            tempSpeed = rightHandRelativePosition;
                        }

                        if(rightHandRelativeSpeed > 0.34){
                            const gesture = `swipeRight`;
                            console.log(`Gesture detected: ${gesture}`);
                            socket.emit(`gesture`, gesture);
                            tempSpeed = rightHandRelativePosition;
                        }
                    }else{
                        rightHandRelativePosition = rightHandPosition - torsoPosition;
                        tempSpeed = rightHandRelativePosition;
                    }
                }, 1000);

            }
        });
    });
};

init();