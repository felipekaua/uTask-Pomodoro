import React from 'react';

import Header from './../components/Header'

import Form from './../components/Form'

function Login(){

    return(

        <div>
            <Header/>

            <Form h1 = 'Bem Vindo!' label1 = 'Login' label2 = 'Senha' btnText = 'Entrar' p = 'Primeira vez aqui?' btnText2 = 'Cadastrar'/>

        </div>

    );

}

export default Login;