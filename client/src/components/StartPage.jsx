import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

import logo from'../assets/img/logo.svg';

class StartPage extends Component {
  render() {
    const {title, text} = this.props.data;
    const {type} = this.props;

    return (
        <section className={type === 'odd' ? 'page page--odd page--start' :  'page page--even page--start'}>
        <div className='content'>
          <img src={logo} alt="Dit is het logo van MSK Gent." width="300" height="300" />
          <h1 className='h2'>Van Eyck: Een Optische Revolutie</h1>
          <h2 className='h3'>{title}</h2>
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
          <p className='paragraph'>{text}</p>
        </div>
      </section>
    )
  }
}

export default withRouter(StartPage);