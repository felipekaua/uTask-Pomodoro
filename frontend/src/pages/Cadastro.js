import React from 'react'

import './../css/Cadastro.css'

import Cadastroform from './../components/Cadastroform'

function Cadastro(){

    return(

        <div>
    
            <Cadastroform h2 = "Cadastro" label1 = "Login" label2 = "Senha" label3 = "Confirme Senha" btnText = "Cadastrar" p = "Já possui conta?" btnText2 = "Login"/>

        </div>

    );

}

export default Cadastro;