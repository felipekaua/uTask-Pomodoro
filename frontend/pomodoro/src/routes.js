import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import MainApp from './pages/MainApp';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={MainApp}/>
                <Route path="/routes-teste" component={Login}/>
                <Route path="/routes-teste2" component={Cadastro}/>
            </Switch>
        </BrowserRouter>
    );
}