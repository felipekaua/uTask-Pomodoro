import {Switch, Route} from 'react-router';

import React from 'react';

import Login from './pages/Login'

import Cadastro from './pages/Cadastro'

function routes (){
    return (
        <Switch>
            <Route exact path = "/" component={Login} />
            <Route path = "/cadastro" component={Cadastro} />
        </Switch>
    );
}

export default routes;