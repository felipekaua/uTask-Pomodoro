import React from 'react'
import './../css/Cadastro.css'
import {Link} from 'react-router-dom';
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

                <h1> 
                    {props.h1}
                </h1>

                <label className = "labelLogin">

                    {props.label1}

                </label>

                <input className = "caixaLogin" onChange={handleUserChange} value={user} placeholder="   Insira um login"/>

                <label className = "labelSenha">

                    {props.label2}

                </label>

                <input className = "caixaSenha" onChange={handlePwChange} value={pw} placeholder="   Insira uma senha"/>

                <label className = "labelConfirmeSenha">

                    {props.label3}

                </label>

                <input className = "caixaConfirmeSenha" onChange={handleConfirmePwChange} value={Confirmepw} />

                <button className="button" type = "submit">

                    {props.btnText}

                </button>

                <p className = "primeiravez">

                    {props.p}
                    
                </p>

                <Link className = "linkcadastrar" to = "/">

                    {props.btnText2}

                </Link>

            </div>

        </form>
    )
}

export default Cadastroform;