import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

import Logo from'../assets/img/logo.svg';

class StartPage extends Component {
  render() {
    const {title, text} = this.props.data;
    const {type} = this.props;

    return (
        <section className={type === 'odd' ? 'page page--odd' :  'page page--even'}>
        <div className='content'>
          <img src={Logo} alt="Dit is het logo van MSK Gent." width="400" height="400" />
          <h1>Van Eyck: Een Optische Revolutie</h1>
          <h2>{title}</h2>
          <div>
              <button>nl</button>
              <button>fr</button>
              <button>de</button>
              <button>en</button>
              <button>it</button>
              <button>es</button>
          </div>
          <p>{text}</p>
        </div>
      </section>
    )
  }
}

export default withRouter(StartPage);