import React, { Component } from 'react';
import { withRouter, Link } from "react-router-dom";

import {wrapTextIntoLines} from '../js/lib.js';
import {PADDING, COLOR, FONT} from '../js/style.js';

class Canvas extends Component {
  
  componentDidMount(){
    const details = this.props.data;
    const {parent} = this.props;

    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    let offsetNavigation = 0;

    if(parent === 'leefwereld'){
      
      details.forEach(detail => {
        const {title, text, img, position, dimensions, options} = detail;

        const lines = wrapTextIntoLines(ctx, text, dimensions.width - (PADDING * 2));
        let offset = 0;

        const image = document.getElementById(img.src);

        switch(options.pointedTo){
          case 'lowerLeft':
              this.drawBox(ctx, position.x, position.y, dimensions.width, -dimensions.height, COLOR.white);
              this.drawText(ctx, title, position.x + PADDING, position.y - dimensions.height + (PADDING * 1.5), COLOR.black, FONT.bold, '18px', 0);
              lines.forEach(line => {
                this.drawText(ctx, line, position.x + PADDING,position.y - dimensions.height + (PADDING * 2.5), COLOR.black, FONT.regular, '14px', offset);
                offset += 25;
              });
              this.drawImage(ctx, image, position.x, position.y - img.height, img.width, img.height);
              this.drawPointer(ctx, position.x, position.y -35, position.x, position.y, position.x + 35, position.y, COLOR.red);
          break;

          case 'topLeft':
            this.drawBox(ctx, position.x, position.y, dimensions.width, dimensions.height, COLOR.white);
            this.drawText(ctx, title, position.x + PADDING, position.y+ (PADDING * 1.5) + img.height, COLOR.black, FONT.bold, '18px', 0);
            lines.forEach(line => {
              this.drawText(ctx, line, position.x + PADDING,position.y + (PADDING * 2.5) + img.height, COLOR.black, FONT.regular, '14px', offset);
              offset += 25;
            });
            this.drawImage(ctx, image, position.x, position.y, img.width, img.height);
            this.drawPointer(ctx, position.x, position.y, position.x, position.y +35, position.x +35, position.y, COLOR.red);
          break;

          case 'topRight':
           this.drawBox(ctx, position.x, position.y, -dimensions.width, dimensions.height, COLOR.white);
           this.drawText(ctx, title, position.x - dimensions.width + PADDING, position.y + (PADDING * 1.5) + img.height, COLOR.black, FONT.bold, '18px', 0);
           lines.forEach(line => {
            this.drawText(ctx, line, position.x - dimensions.width + PADDING,position.y + (PADDING * 2.5) + img.height, COLOR.black, FONT.regular, '14px', offset);
            offset += 25;
          });
          this.drawImage(ctx, image, position.x - img.width, position.y, img.width, img.height);
          this.drawPointer(ctx, position.x, position.y, position.x -35, position.y, position.x, position.y +35, COLOR.red);
          break;

          case 'lowerRight':
            this.drawBox(ctx, position.x, position.y, -dimensions.width, -dimensions.height, COLOR.white);
            this.drawText(ctx, title, position.x - dimensions.width + PADDING, position.y - dimensions.height + (PADDING * 1.5), COLOR.black, FONT.bold, '18px', 0);
            lines.forEach(line => {
              this.drawText(ctx, line, position.x - dimensions.width + PADDING, position.y - dimensions.height + (PADDING * 2.5), COLOR.black, FONT.regular, '14px', offset);
              offset += 25;
            });
            this.drawImage(ctx, image, position.x -  img.width, position.y - img.height, img.width, img.height);
            this.drawPointer(ctx, position.x, position.y, position.x -35, position.y, position.x, position.y -35, COLOR.red);
          break;
        }
      });
    }else if(parent === 'creatieproces'){
      //navigatie weergeven
      details.forEach(detail => {
        this.drawText(ctx, detail.title, 1300 + offsetNavigation, 600 + (PADDING * 1.5), COLOR.white, FONT.bold, '20px', 0);
        offsetNavigation += 150;
      })

      //navigatie doorgeven in array
      const laag = details[0];
      const navigatieCreatieproces = laag.details;

      const creatieprocesExplanationLines = wrapTextIntoLines(ctx, laag.explanation, 600 - (PADDING * 2));
      const creatieprocesLines = wrapTextIntoLines(ctx, navigatieCreatieproces.text, navigatieCreatieproces.dimensions.width - (PADDING * 2));
      let offset = 0;

      creatieprocesExplanationLines.forEach(line => {
              this.drawText(ctx, line, 1200, 700 + (PADDING * 2.5), COLOR.white, FONT.regular, '18px', offset);
              offset += 25;
      });

      switch(navigatieCreatieproces.options.pointedTo){
        case 'topLeft':
            this.drawBox(ctx, navigatieCreatieproces.position.x, navigatieCreatieproces.position.y, navigatieCreatieproces.dimensions.width, navigatieCreatieproces.dimensions.height, COLOR.white);
            this.drawText(ctx, navigatieCreatieproces.subtitle, navigatieCreatieproces.position.x + PADDING, navigatieCreatieproces.position.y+ (PADDING * 1.5) + navigatieCreatieproces.detailimg.height, COLOR.black, FONT.bold, '18px', 0);
            creatieprocesLines.forEach(line => {
              this.drawText(ctx, line, navigatieCreatieproces.position.x + PADDING,navigatieCreatieproces.position.y + (PADDING * 2.5) + navigatieCreatieproces.detailimg.height, COLOR.black, FONT.regular, '14px', offset);
              offset += 25;
            });
            this.drawPointer(ctx, navigatieCreatieproces.position.x, navigatieCreatieproces.position.y, navigatieCreatieproces.position.x, navigatieCreatieproces.position.y +35, navigatieCreatieproces.position.x +35, navigatieCreatieproces.position.y, COLOR.red);
        break;
        case 'topRight':
           this.drawBox(ctx, navigatieCreatieproces.position.x, navigatieCreatieproces.position.y, -navigatieCreatieproces.dimensions.width, navigatieCreatieproces.dimensions.height, COLOR.white);
           this.drawText(ctx, navigatieCreatieproces.subtitle, navigatieCreatieproces.position.x - navigatieCreatieproces.dimensions.width + PADDING, navigatieCreatieproces.position.y + (PADDING * 1.5) + navigatieCreatieproces.detailimg.height, COLOR.black, FONT.bold, '18px', 0);
           creatieprocesLines.forEach(line => {
            this.drawText(ctx, line, navigatieCreatieproces.position.x - navigatieCreatieproces.dimensions.width + PADDING, navigatieCreatieproces.position.y + (PADDING * 2.5) + navigatieCreatieproces.detailimg.height, COLOR.black, FONT.regular, '14px', offset);
            offset += 25;
          });
          this.drawPointer(ctx, navigatieCreatieproces.position.x, navigatieCreatieproces.position.y, navigatieCreatieproces.position.x -35, navigatieCreatieproces.position.y, navigatieCreatieproces.position.x, navigatieCreatieproces.position.y +35, COLOR.red);
          break;
      }


    }else if(parent === 'levensloop'){

    }
  }

  drawPointer(ctx, x1, y1, x2, y2, x3, y3, color){
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.lineTo(x3, y3);
    ctx.fill();
    ctx.closePath();
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
    const {parent, directParent} = this.props;

    return(
      <React.Fragment>
        <canvas className='canvas' id='canvas' width="2000" height="1100" style={{backgroundImage: `url(${require(`../assets/img/${parent}${directParent}Background.jpg`)})`}}></canvas>
        <button className='button toFront'><Link to={`/${parent}`} className='button'>Terug naar verhaal</Link></button>
      </React.Fragment>
    );
  }
}

export default withRouter(Canvas);