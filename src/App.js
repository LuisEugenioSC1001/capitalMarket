import React, { Component } from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import SignInSide from './home/pages/SignInSide'
import LoginPage from './auth/pages/login/LoginPage'
import RegisterPage from './auth/pages/register/RegisterPage'
export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/index' component={SignInSide} />
          <Route exact path='/login' component={LoginPage} />
          <Route exact path='/register' component={RegisterPage} />
          <Route component={LoginPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}