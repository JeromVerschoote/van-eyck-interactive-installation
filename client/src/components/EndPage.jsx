import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

import handtekening from'../assets/img/endHandtekening.png';
import zelfportret from'../assets/img/endPage.png';

class EndPage extends Component {
  render() {
    const {title, text} = this.props.data;
    const {type} = this.props;

    return (
        <section className={type === 'odd' ? 'page page--odd page--end' :  'page page--even page--end'}>
        <div className='content'>
            <h1 className='h2'>{title}</h1>
            <p className='paragraph'> {text}</p>
            <img src={zelfportret} alt="Dit is de zelfportret van Van Eyck" width="600" height="400" />
            <img src={handtekening} alt="Dit is de handtekening van Van Eyck" width="295" height="200" />
        </div>
      </section>
    )
  }
}

export default withRouter(EndPage);