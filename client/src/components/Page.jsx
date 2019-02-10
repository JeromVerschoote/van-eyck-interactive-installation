import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { Route, Link } from 'react-router-dom';

import Canvas from './Canvas';

class Page extends Component {

  renderMenu(type){
    if(type === 'even'){
      return(
        <div className='buttons centered'>
          <button className='button'>Restart Story</button>
        </div>
      )
    }else if(type === 'odd'){
      return(
        <div className='buttons centered'>
              <button className='button button--active'>nl</button>
              <button className='button'>fr</button>
              <button className='button'>de</button>
              <button className='button'>en</button>
              <button className='button'>it</button>
              <button className='button'>es</button>
          </div>
      )
    }
  }

  createAccordingImgTags(details, parent, directParent){
    return (
      <React.Fragment>
        {details.map((detail, index) => {
            return <img id={`${parent}${directParent}${index + 1}`} src={require(`../assets/img/${parent}${directParent}${index + 1}.jpg`)} alt="" key={index}/>
          })}
      </React.Fragment>
    )
}

  render() {
    const {title, subtitle, text, img, link, details} = this.props.data;
    const {type, parent} = this.props;

    return (
        <section className={type === 'odd' ? 'page page--odd' :  'page page--even'}>
        <div className='content'>
            {this.renderMenu(type)}
            <h1 className='h1'>{title}</h1>
            <p className='subtitle'>{subtitle}</p>
            <p className='paragraph'>{text}</p>
            <button className='button link'><Link to={title.toLowerCase() + '/app'}><p dangerouslySetInnerHTML={{__html: link.text}}></p></Link></button>
        </div>
        <div style={{display: 'none'}}>
          {this.createAccordingImgTags(details, parent, title)}
        </div>
        <Route path={'/' + title.toLowerCase() + '/app'} exact render={() => <Canvas data={details} parent={parent} directParent={title}/>} />
        <img src={require(`../assets/img/${img.src}`)} alt="Dit is een afbeelding die de persoon dieper in de pagina onderdompelt." width={img.width} height={img.height} className='image'/>
      </section>
    )
  }
}

export default withRouter(Page);