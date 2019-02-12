import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { Route, Link } from 'react-router-dom';

import {wrapTextIntoLines} from '../js/lib.js';

import Canvas from './Canvas';

class Page extends Component {

  renderMenu(type){
    if(type === 'even'){
      return(
        <article className='article'>
        <hr className='hr'/>
        <div className='buttons centered'>
          <button className='button'>Restart Story</button>
        </div>
        <hr className='hr'/>
        </article>
      )
    }else if(type === 'odd'){
      return(
        <article className='article'>
          <hr className='hr'/>
          <div className='buttons'>
              <button className='button button--active'>nl</button>
              <button className='button'>fr</button>
              <button className='button'>de</button>
              <button className='button'>en</button>
              <button className='button'>it</button>
              <button className='button'>es</button>
          </div>
          <hr className='hr'/>
        </article>
      )
    }
  }

  createAccordingImgTags(details, parent, directParent){
    return (
      <React.Fragment>
        {details.map((detail, index) => (<img id={`${parent}${directParent}${index + 1}`} src={require(`../assets/img/${parent}${directParent}${index + 1}.jpg`)} alt="" key={index}/>))}
        {parent === 'creatieproces' ? details.map((detail, index) => (<img id={`${parent}${directParent}Background${index + 1}`} src={require(`../assets/img/${parent}${directParent}Background${index + 1}.jpg`)} alt=""/>)) : null}
      </React.Fragment>
    )
}

  render() {
    const {title, subtitle, text, img, link, details} = this.props.data;
    const {type, parent} = this.props;

    const lines = wrapTextIntoLines(link.text, 11);

    var rectStyle = {
      stroke: 'rgba(188, 0, 0, .6)',
      strokeWidth: '6',
      fill: 'none'
    };

    const svgStyle = {
      position: 'absolute',
      zIndex: '1',
    }

    return (
        <section className={type === 'odd' ? 'page page--odd' :  'page page--even'}>
        <div className='content'>
            {this.renderMenu(type)}
            <header>
            <h1 className='h1'>{title}</h1>
            <p className='subtitle'>{subtitle}</p>
            </header>
            <p className='paragraph'>{text}</p>
            <button className='button'>
              <Link className='button link' to={title.toLowerCase() + '/app'}>
                {lines.map((line, index) => <p key={index}>{line}</p>)}
              </Link>
              <svg width="800" height="400" style={svgStyle}>
                 <rect width="600" height="400" style={rectStyle} />
              </svg>
            </button>
        </div>
        <div style={{display: 'none'}}>
          {this.createAccordingImgTags(details, parent, title)}
        </div>
        <Route path={'/' + title.toLowerCase() + '/app'} exact render={() => <Canvas data={details} parent={parent} directParent={title}/>} />
        <img src={require(`../assets/img/${img.src}`)} alt="" width={img.width} height={img.height} className='image'/>
      </section>
    )
  }
}

export default withRouter(Page);