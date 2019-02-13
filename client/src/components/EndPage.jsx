import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

import handtekening from'../assets/img/endHandtekening.png';

class EndPage extends Component {

  handleClickRefresh(e){
    window.location.reload(); 
  }

  render() {
    const {title, text, img} = this.props.data;
    const {type} = this.props;

    return (
        <section className={type === 'odd' ? 'page page--odd page--end' :  'page page--even page--end'}>
        <div className='content'>
            <h1 className='h2'>{title}</h1>
            <p className='paragraph'> {text}</p>
            <article className='article'>
        <hr className='line'/>
        <div className='buttons centered'>
        <button className='button' onClick={e => this.handleClickRefresh(e)} >Restart Story</button>
        </div>
        <hr className='line'/>
        </article>
            <img src={require(`../assets/img/${img.src}`)} alt="Dit is een afbeelding om het boek mee af te sluiten." width={img.width} height={img.height} className="endGif"/>
            <img src={handtekening} alt="Dit is de handtekening van Van Eyck" width="295" height="200" className="endHandtekening"/>
        </div>
      </section>
    )
  }
}

export default withRouter(EndPage);