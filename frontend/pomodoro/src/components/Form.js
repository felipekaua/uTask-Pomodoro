import React from 'react'
import './../css/Form.css'
//import api from '../services/api';

const Form = (props) => {
    const [user, setUser] = React.useState("");
    const [pw, setPw] = React.useState("");

    function handleUserChange(e){
        setUser(`${e.target.value}`)
    }
    function handlePwChange(e){
        setPw(`${e.target.value}`)
    }

//HTML
    return (
        <form>

            <div className="inputLogin">

                <label className = "labelLogin">

                    {props.label1}

                </label>

                <input className = "caixaLogin" onChange={handleUserChange} value={user} placeholder="Seu login..."/>

                <label className = "labelSenha">

                    {props.label2}

                </label>

                <input className = "caixaSenha" onChange={handlePwChange} value={pw} placeholder="Sua senha..."/>

        
                <button className="button" type = "submit">

                    {props.btnText}

                </button>

            </div>

        </form>
    )
}

export default Form