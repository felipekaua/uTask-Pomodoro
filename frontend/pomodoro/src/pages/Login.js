import React from 'react';
import './../css/Login.css';

import Header from './../components/Header'

import Form from './../components/Form'

import {Link} from 'react-router-dom';

function Login(){

    return(

        <div>
            <Header/>
            <h1> Bem vindo!</h1>

            <Form 
            label1 = 'Login'
            label2 = 'Senha'
            btnText = 'Entrar'
            />
            <p className = "primeiravez">Primeira vez aqui?</p>
            <Link className = "linkcadastrar" to = "/cadastro"> Cadastrar</Link>
        </div>

    );

}

export default Login;