import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Leefwereld from './models/Leefwereld.jsx';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <p><Link to="/leefwereld">Leefwereld</Link></p>
        <p><Link to="/creatieproces">Creatieproces</Link></p>
        <p><Link to="/levensloop">Levensloop</Link></p>
        <Switch>
          <Route path='/leefwereld' exact render={() => <Leefwereld/>} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
