import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App.js';
import { BrowserRouter } from "react-router-dom";
import * as serviceWorker from './serviceWorker';

import Api from './js/api.js';

const server = {
    'arduino': new Api('http://localhost:9090'),
    'kinect': new Api('http://localhost:8080')
}

ReactDOM.render(<BrowserRouter><App server={server}/></BrowserRouter>, document.getElementById('root'));

const init = () => {
    server.kinect.socket.on(`broadcast`, body => {
        server.arduino.socket.on(`touch`, touch => handleTouch(touch, body));
    });
}

const handleTouch = (touch, body) => {
    const rightHand = body.joints[11];
    const position = {
        'x': rightHand.depthX,
        'y': rightHand.depthY
    }

    console.log(document.elementFromPoint(position.x, position.y));
    //  document.elementFromPoint(position.x, position.y).click();
}

init();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
