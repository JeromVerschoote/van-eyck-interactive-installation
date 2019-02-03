import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Leefwereld from './models/Leefwereld.jsx';
import Creatieproces from './models/Creatieproces.jsx';
import Levensloop from './models/Levensloop.jsx';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <p><Link to="/leefwereld">Leefwereld</Link></p>
        <p><Link to="/creatieproces">Creatieproces</Link></p>
        <p><Link to="/levensloop">Levensloop</Link></p>
        <Switch>
          <Route path='/leefwereld' exact render={() => <Leefwereld/>} />
          <Route path='/creatieproces' exact render={() => <Creatieproces/>} />
          <Route path='/levensloop' exact render={() => <Levensloop/>} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
