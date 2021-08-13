import React from 'react'

import './../css/Cadastro.css'

import Cadastroform from './../components/Cadastroform'

import HeaderL from './../components/HeaderLogin'

function Cadastro(){

    return(

        <div>
            <HeaderL/>
            <Cadastroform h2 = "Cadastro" label1 = "Login" label2 = "Senha" label3 = "Confirme Senha" btnText = "Cadastrar" p = "Já possui conta?" btnText2 = "Login"/>

        </div>

    );

}

export default Cadastro;