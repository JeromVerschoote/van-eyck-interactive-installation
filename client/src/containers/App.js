import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import data from '../assets/data/data.json';

import Book from './Book.js';

class App extends Component {
  
  render() {
    const {leefwereld, creatieproces, levensloop} = data;

    return (
      <React.Fragment>
        <p><Link to="/leefwereld">Leefwereld</Link></p>
        <p><Link to="/creatieproces">Creatieproces</Link></p>
        <p><Link to="/levensloop">Levensloop</Link></p>
        <Switch>
          <Route path='/leefwereld' exact render={() => <Book server={this.props.server} data={leefwereld}/>} />
          <Route path='/creatieproces' exact render={() => <Book server={this.props.server} data={creatieproces}/>}/>} />
          <Route path='/levensloop' exact render={() => <Book server={this.props.server} data={levensloop}/>}/>} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
