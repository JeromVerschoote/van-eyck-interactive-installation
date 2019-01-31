const GESTURE_SENSITIVITY = 0.34;

class SkeletonJoint{
    constructor(){
        this.position = {};
    }

    update(joint, skeletonCenter){
        this.position.x = joint.depthX;
        this.position.y = joint.depthY;

        if(skeletonCenter){
            this.skeletonCenter = skeletonCenter;
        }
    }

    addSwipeLeftListener(skeletonPart, socket){
        if(this._getRelativeSpeed().x < -GESTURE_SENSITIVITY){
            const gesture = `swipeLeft`;
            console.log(`Gesture detected: ${gesture} (${skeletonPart})`);

            socket.emit(`gesture`, gesture);

            this.tempRelativeSpeed = this.relativePosition;
        }
    }

    addSwipeRightListener(skeletonPart, socket){
        if(this._getRelativeSpeed().x > GESTURE_SENSITIVITY){
            const gesture = `swipeRight`;
            console.log(`Gesture detected: ${gesture} (${skeletonPart})`);

            socket.emit(`gesture`, gesture);

            this.tempRelativeSpeed = this.relativePosition;
        }
    }

    _getRelativePosition(){
        let relativePosition = {};

        relativePosition.x = this.position.x - skeletonCenter.position.x;
        relativePosition.y = this.position.y - skeletonCenter.position.y;

        return relativePosition;
    }

    _getRelativeSpeed(){
            if(this.tempRelativeSpeed){
                this.relativePosition = this._getRelativePosition();

                this.relativeSpeed = {
                    'x': this.relativePosition.x - this.tempRelativeSpeed.x,
                    'y': this.relativePosition.y - this.tempRelativeSpeed.y,
                }

                return this.relativeSpeed;
            }else{
                this.relativePosition = this._getRelativePosition();
                this.tempRelativeSpeed = this.relativePosition;
            }
    }
}