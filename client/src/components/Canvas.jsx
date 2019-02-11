import React, { Component } from 'react';
import { withRouter, Link } from "react-router-dom";

import {wrapTextFromCanvasIntoLines} from '../js/lib.js';
import {PADDING, COLOR, FONT} from '../js/style.js';

class Canvas extends Component {
  
  componentDidMount(){
    const details = this.props.data;
    const {parent} = this.props;

    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');


    if(parent === 'leefwereld'){

      details.forEach(detail => {
        const {title, text, img, position, dimensions, options} = detail;
        const image = document.getElementById(img.src);
        let lines, offset = 0;

        detail === details[0] ? lines = wrapTextFromCanvasIntoLines(ctx, text, dimensions.width - (PADDING * 5.5)) : lines = wrapTextFromCanvasIntoLines(ctx, text, dimensions.width - (PADDING * 2));

        this.drawCard(ctx, title, lines, offset, img, image, position, dimensions, options);
      });


    }else if(parent === 'creatieproces'){


      if(this.currentLayer){
        const {section, title, text, img, position, dimensions, options} = this.currentLayer;
        
        const image = document.getElementById(img.src);
        let lines, offset = 0;

        lines = wrapTextFromCanvasIntoLines(ctx, text, dimensions.width - (PADDING * 2));

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        this.drawCard(ctx, title, lines, offset, img, image, position, dimensions, options);
        this.drawInfo(ctx, section, FONT, COLOR);
      }else{
        this.currentLayer = details[0];

        const {section, title, text, img, position, dimensions, options} = this.currentLayer;
        
        const image = document.getElementById(img.src);
        let lines, offset = 0;

        lines = wrapTextFromCanvasIntoLines(ctx, text, dimensions.width - (PADDING * 10.5));

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        this.drawCard(ctx, title, lines, offset, img, image, position, dimensions, options);
        this.drawInfo(ctx, section, FONT, COLOR);
      }


    }else if(parent === 'levensloop'){

      const currentLayer = details[13];

      if(currentLayer){

      currentLayer.textboxes.forEach(detail => {
        const {title, text, img, position, dimensions, options} = detail;
        const image = document.getElementById(img.src);
        let lines, offset = 0;

        lines = wrapTextFromCanvasIntoLines(ctx, text, dimensions.width - (PADDING * 10.5));

        this.drawCard(ctx, title, lines, offset, img, image, position, dimensions, options);

    }
      )}
    }
  }

  drawCard(ctx, title, lines, offset, img, image, position, dimensions, options){
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

      default:
        console.log('No direction provided in json data.')
      break;
    }
  }

  drawInfo(ctx, section, font, color){
    const {title, text, position} = section;
    const {display, regular, bold} = font;
    const {white, red} = color;

    this.drawText(ctx, title, position.x, position.y, white, display, '20px', 0);
    this.drawText(ctx, text, position.x, position.y + 20, white, regular, '14px', 0);
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

  createNavigation(){
    return(
      <div className='creatieproces-nav'>
        <button className='creatieproces-nav-button creatieproces-nav-button--1' onClick={e => this.handleClick(e)} value='0'></button>
        <button className='creatieproces-nav-button creatieproces-nav-button--2' onClick={e => this.handleClick(e)} value='1'></button>
        <button className='creatieproces-nav-button creatieproces-nav-button--3' onClick={e => this.handleClick(e)} value='2'></button>
        <button className='creatieproces-nav-button creatieproces-nav-button--4' onClick={e => this.handleClick(e)} value='3'></button>
      </div>
    )
  }

  handleClick(e){
    e.preventDefault();

    const value = e.currentTarget.value;
    const details = this.props.data;

    const buttons = document.querySelectorAll('.creatieproces-nav-button');

    buttons.forEach(button => {
      button.classList.remove('creatieproces-nav-button--active');
    });

    e.currentTarget.classList.add('creatieproces-nav-button--active');

    this.currentLayer = details[value];

    this.componentDidMount();
  }

  render() {
    const {parent, directParent} = this.props;

    return(
      <React.Fragment>
        <canvas className='canvas' id='canvas' width="2000" height="1100" style={{backgroundImage: `url(${require(`../assets/img/${parent}${directParent}Background.jpg`)})`}}></canvas>
        <button className='button toFront'><Link to={`/${parent}`} className='button'>Terug naar verhaal</Link></button>
        {parent === 'creatieproces' ? this.createNavigation() : null}
      </React.Fragment>
    );
  }
}

export default withRouter(Canvas);