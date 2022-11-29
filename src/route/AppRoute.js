import React, { Component, Fragment } from 'react';
import { Router, Route, Switch } from 'react-router';
import HomePage from '../pages/HomePage';
import SignIn from '../pages/signIn-signUp/signIn';

class AppRoute extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          <Switch>
            <Route exact path="/">
            <HomePage/>
            </Route>
            <Route exact path="/signIn">
            <SignIn/>
            </Route>
          </Switch>
        </Router>
      </Fragment>
    )
  }
}

export default AppRoute