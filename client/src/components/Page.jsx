import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

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

  render() {
    const {title, subtitle, text, img, imgWidth, imgHeight} = this.props.data;
    const {type} = this.props;

    return (
        <section className={type === 'odd' ? 'page page--odd' :  'page page--even'}>
        <div className='content'>
            {this.renderMenu(type)}
            <h1 className='h1'>{title}</h1>
            <p className='subtitle'>{subtitle}</p>
            <p className='paragraph'>{text}</p>
            <div className='buttons centered'>
              <button className='button'>Dieper in pagina duiken</button>
            </div>
            <img src={require(`../assets/img/${img}`)} alt="Dit is een afbeelding die de persoon dieper in de pagina onderdompelt." width={imgWidth} height={imgHeight} />
        </div>
      </section>
    )
  }
}

export default withRouter(Page);