import React, { Component, Fragment } from 'react';
import { Router, Route, Switch } from 'react-router';
import HomePage from '../pages/HomePage';
import SignIn from '../pages/signIn-signUp/signIn';

class AppRoute extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
          <Route exact path = "/" component={HomePage} />

          <Route exact path='signIn' component={SignIn}/>
        </Switch>
      </Fragment>
    )
  }
}

export default AppRoute