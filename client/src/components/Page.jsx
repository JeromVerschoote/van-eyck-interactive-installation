import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

class Page extends Component {

  renderMenu(type){
    if(type === 'even'){
      return (
        <button>Restart Story</button>
      )
    }else if(type === 'odd'){
      return (
        <div>
              <button>nl</button>
              <button>fr</button>
              <button>de</button>
              <button>en</button>
              <button>it</button>
              <button>es</button>
          </div>
      )
    }
  }

  render() {
    const {title, subtitle, text} = this.props.data;
    const {type} = this.props;

    return (
        <section className={type === 'odd' ? 'page page--odd' :  'page page--even'}>
        <div className='content'>
            {this.renderMenu(type)}
            <h1>{title}</h1>
            <p>{subtitle}</p>
            <p>{text}</p>
        </div>
      </section>
    )
  }
}

export default withRouter(Page);