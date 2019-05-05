import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AppNavbar from './components/AppNavbar';
import Login from './components/Login';
import Register from './components/Register';
import Payment from './components/Payment';
import Profile from './components/Profile';
import Contractor from './components/Contractor';
import './App.css';
import ThankYou from './components/Thankyou';
import Home from './components/Home';
import { Provider } from 'react-redux';
import store from './store';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authActions';

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());

    // Redirect to login
    window.location.href = './login';
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <Router>
            <AppNavbar />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/register' component={Register} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/profile' component={Profile} />
              <Route exact path='/payment' component={Payment} />
              <Route exact path='/contractor' component={Contractor}/>
              <Route exact path='/thankyou' component={ThankYou} />
            </Switch>
          </Router>
        </Provider>
      </div>

    )
  }
}


export default App;
