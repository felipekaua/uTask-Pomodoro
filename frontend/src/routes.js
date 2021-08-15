import { Switch, Route, Redirect } from 'react-router';
import { isAuthenticated } from './services/auth';
import React from 'react';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import MainApp from './pages/MainApp';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

function routes() {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/cadastro" component={Cadastro} />
      <PrivateRoute path="/pomodoro" exact component={MainApp} />
      <Route path="*" component={() => <h3>Page not found</h3>} />
    </Switch>
  );
}

export default routes;
