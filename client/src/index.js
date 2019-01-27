import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import Api from './js/api.js';
import Canvas from './js/classes/Canvas';

import {enableLocalKeys} from './js/debugTools.js';

const arduino = new Api('http://localhost:9090');
const kinect = new Api('http://localhost:8080');

ReactDOM.render(<App />, document.getElementById('root'));

let canvas, $canvas, $book;

const init = () => {
    $canvas = document.getElementById('pageflip-canvas');
    $book = document.getElementById('book');
    canvas = new Canvas($canvas, 1679, 972, 0, $book);

    //enableLocalKeys(canvas);

    render();
}

const render = () =>{
    requestAnimationFrame(render);
    canvas.render();
}

arduino.socket.on('keyPressed', key => {
    console.log(key);

        if(key === `arrowLeft` && canvas.book.currentPage - 1 >= 0){
            canvas.book.flips[canvas.book.currentPage - 1].dragging = true;
        }

        if(key === `arrowRight` && canvas.book.currentPage + 2 <= canvas.book.flips.length){
            canvas.book.flips[canvas.book.currentPage].dragging = true;
        }
    }
);

arduino.socket.on(`keyReleased`, key => {
    console.log(key);

    canvas.book.flips.forEach(flip => {
        if(flip.dragging){

            if(key === `arrowRight`){
                flip.target = -1;
                canvas.book.currentPage = Math.min(canvas.book.currentPage + 1, canvas.book.flips.length);
            }
            
            if(key === `arrowLeft`){
                flip.target = 1;
                canvas.book.currentPage = Math.max(canvas.book.currentPage - 1, 0);
            }
        }
        flip.dragging = false;
    });
});

kinect.socket.on(`bodyFrame`, frame => {
    console.log(frame);
});

init();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
