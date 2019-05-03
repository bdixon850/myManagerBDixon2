import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AppNavbar from './components/AppNavbar';
import Login from './components/Login';
import Payment from './components/Payment';
import Profile from './components/Profile';
// import Search from './pages/Search'
import Contractor from './components/Contractor';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <AppNavbar />
          <Switch>
            <Route exact path='/' component={Login} />
            <Route exact path='/profile' component={Profile} />
            <Route exact path='/payment' component={Payment} />
            <Route exact path='/contractor' component={Contractor}/>
          </Switch>
        </Router>
      </div>

    )
  }
}


export default App;
