import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

import {wrapTextIntoLines} from '../js/lib.js';
import {PADDING, COLOR, FONT} from '../js/settings.js';

let lines;
let offset;

class Canvas extends Component {
  
  componentDidMount(){
    const details = this.props.data;
    const {parent} = this.props;

    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    if(parent === 'leefwereld'){
      details.forEach(detail => {
        const {title, text, img, position, dimensions, options} = detail;

        switch(options.pointedTo){
          case 'lowerLeft':
              lines = wrapTextIntoLines(ctx, text, dimensions.width - (PADDING * 5));
              offset = 0;
              this.drawBox(ctx, position.x, position.y, dimensions.width, -dimensions.height, COLOR.white);
              this.drawText(ctx, title, position.x + PADDING, position.y - dimensions.height + (PADDING * 1.5), COLOR.black, FONT.bold, '18px', 0);
              lines.forEach(line => {
                this.drawText(ctx, line, position.x + PADDING,position.y - dimensions.height + (PADDING * 2.5), COLOR.black, FONT.regular, '14px', offset);
                offset += 25;
              });
          break;

          case 'topLeft':
            this.drawBox(ctx, position.x, position.y, dimensions.width, dimensions.height, COLOR.white);
          break;

          case 'topRight':
           this.drawBox(ctx, position.x, position.y, -dimensions.width, dimensions.height, COLOR.white);
          break;

          case 'lowerRight':
            lines = wrapTextIntoLines(ctx, text, dimensions.width - (PADDING * 2));
            offset = 0;
            this.drawBox(ctx, position.x, position.y, -dimensions.width, -dimensions.height, COLOR.white);
            this.drawText(ctx, title, position.x - dimensions.width + PADDING, position.y - dimensions.height + (PADDING * 1.5), COLOR.black, FONT.bold, '18px', 0);
            lines.forEach(line => {
              this.drawText(ctx, line, position.x - dimensions.width + PADDING, position.y - dimensions.height + (PADDING * 2.5), COLOR.black, FONT.regular, '14px', offset);
              offset += 25;
            });
          break;
        }
      });
    }else if(parent === 'creatieproces'){

    }else if(parent === 'levensloop'){

    }
  }

  drawBox(ctx, x, y, width, height, color){
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.fillRect(x, y, width, height);
    ctx.closePath();
  }

  drawText(ctx, text, x, y, color, font, size, offset){
    ctx.fillStyle = color;
    ctx.font = `${size} ${font}`;
    ctx.beginPath();
    ctx.fillText(text, x, y + offset);
    ctx.closePath();
  }

  drawImage(ctx, img, x, y, width, height){
    ctx.drawImage(img, x, y, width, height);
  }

  render() {
    return(
      <canvas className='canvas' id='canvas' width="2000" height="1100"></canvas>
    );
  }
}

export default withRouter(Canvas);