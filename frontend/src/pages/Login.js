import React from 'react';

import Form from './../components/Form'

import HeaderL from './../components/HeaderLogin'

function Login(){

        
    return(

        <div>
            <HeaderL/>
            <Form h2 = 'Bem vindo!' label1 = 'Login' label2 = 'Senha' btnText = 'Entrar' p = 'Primeira vez aqui?' btnText2 = 'Cadastrar'/>

        </div>

    );
    
}

export default Login;