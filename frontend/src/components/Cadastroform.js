import React from 'react'
import './../css/Cadastro.css'
import {Link} from 'react-router-dom';

// import './buttonCadastro'
// import './button'
//import api from '../services/api';

const Cadastroform = (props) => {
    const [user, setUser] = React.useState("");
    const [pw, setPw] = React.useState("");
    const [Confirmepw, setConfirmePw] = React.useState("");

    function handleUserChange(e){
        setUser(`${e.target.value}`)
    }
    function handlePwChange(e){
        setPw(`${e.target.value}`)
    }
    function handleConfirmePwChange(e){
        setConfirmePw(`${e.target.value}`)
    }

//HTML
    return (
        <form>

            <div>

                <h2 className = "Cadastro"> 
                    {props.h2}
                </h2>

                <label className = "labelLoginCadastro">

                    {props.label1}

                </label>

                <input className = "caixaLoginCadastro" onChange={handleUserChange} value={user} placeholder="   Insira um login"/>

                <label className = "labelSenhaCadastro">

                    {props.label2}

                </label>

                <input className = "caixaSenhaCadastro" type = "password" onChange={handlePwChange} value={pw} placeholder="   Insira uma senha"/>

                <label className = "labelConfirmeSenha">

                    {props.label3}

                </label>

                <input className = "caixaConfirmeSenha" type = "password" onChange={handleConfirmePwChange} value={Confirmepw} />

                <button className="buttonCadastro" type = "submit" value = "disabled" disabled>

                    {props.btnText}

                </button>

                <p className = "japossuiconta">

                    {props.p}
                    
                </p>

                <Link className = "linklogin" to = "/">

                    {props.btnText2}

                </Link>

            </div>

        </form>
    )
}

export default Cadastroform;