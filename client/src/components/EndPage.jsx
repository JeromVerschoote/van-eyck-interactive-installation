import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

class EndPage extends Component {
  render() {
    const {title, text} = this.props.data;
    const {type} = this.props;

    return (
        <section className={type === 'odd' ? 'page page--odd' :  'page page--even'}>
        <div className='content'>
            <h1>{title}</h1>
            <p>{text}</p>
        </div>
      </section>
    )
  }
}

export default withRouter(EndPage);