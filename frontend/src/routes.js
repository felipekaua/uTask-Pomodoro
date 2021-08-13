import { Switch, Route } from 'react-router';
import React from 'react';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import MainApp from './pages/MainApp';

function routes() {
  return (
    <Switch>
      <Route exact path="/uTask-Pomodoro" component={Login} />
      <Route path="/cadastro" component={Cadastro} />
      <Route path="/pomodoro" exact component={MainApp} />
    </Switch>
  );
}

export default routes;
