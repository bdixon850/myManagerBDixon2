import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AppNavbar from './components/AppNavbar';
import Home from './components/Home';
import Signup from './components/Signup';
import Profile from './components/Profile';
import Login from './components/Login';
// import Payment from './components/Payment';
import NotFound from './components/NotFound';
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
            <Route exact path='/' component={Home} />
            <Route path='/signin' component={Login} />
            <Route path='/signup' component={Signup} />
            <Route path='/profile' component={Profile} />
            {/* <Route exact path='/payment' component={Payment} /> */}
            <Route path='/contractor' component={Contractor} />
            <Route path='/*' component={NotFound} />
          </Switch>
        </Router>
      </div>

    )
  }
}


export default App;
