import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Leefwereld from './models/Leefwereld.jsx';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <h1><Link to="/leefwereld">Leefwereld</Link></h1>
        <h1><Link to="/creatieproces">Creatieproces</Link></h1>
        <h1><Link to="/levensloop">Levensloop</Link></h1>
        <Switch>
          <Route path='/leefwereld' exact render={() => <Leefwereld/>} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
