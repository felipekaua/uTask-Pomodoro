import React, { useState } from 'react';
import './../css/Cadastro.css';
import { Link, useHistory } from 'react-router-dom';
import api from '../services/api';

// import './buttonCadastro'
// import './button'
//import api from '../services/api';

const Cadastroform = (props) => {
  const [user, setUser] = React.useState('');
  const [pw, setPw] = React.useState('');
  const [Confirmepw, setConfirmePw] = React.useState('');

  function disabled(value, value2, value3) {
    const button = document.querySelector('.buttonCadastro');
    if (value !== '' && value2 !== '' && value3 !== '') {
      button.disabled = false;
    } else {
      button.disabled = true;
    }
  }

  function handleUserChange(e) {
    disabled(`${e.target.value}`, pw, Confirmepw);
    setUser(`${e.target.value}`);
  }
  function handlePwChange(e) {
    disabled(user, `${e.target.value}`, Confirmepw);
    setPw(`${e.target.value}`);
  }
  function handleConfirmePwChange(e) {
    disabled(user, pw, `${e.target.value}`);
    setConfirmePw(`${e.target.value}`);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    await api
      .post('/users/create', {
        login: user,
        password: pw,
      })
      .then((res) => {
        const { _id } = res.data;
        console.log(_id);
        alert('usuário criado com sucesso!');
      })
      .catch((err) => {
        console.log('erro na criação de usuário');
      });
  }

  //HTML
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h2 className="Cadastro">{props.h2}</h2>

        <label className="labelLoginCadastro">{props.label1}</label>

        <input
          className="caixaLoginCadastro"
          onChange={handleUserChange}
          value={user}
          placeholder="   Insira um login"
        />

        <label className="labelSenhaCadastro">{props.label2}</label>

        <input
          className="caixaSenhaCadastro"
          type="password"
          onChange={handlePwChange}
          value={pw}
          placeholder="   Insira uma senha"
        />

        <label className="labelConfirmeSenha">{props.label3}</label>

        <input
          className="caixaConfirmeSenha"
          type="password"
          onChange={handleConfirmePwChange}
          value={Confirmepw}
        />

        <button
          className="buttonCadastro"
          type="submit"
          value="disabled"
          disabled
        >
          {props.btnText}
        </button>

        <p className="japossuiconta">{props.p}</p>

        <Link className="linklogin" to="/">
          {props.btnText2}
        </Link>
      </div>
    </form>
  );
};

export default Cadastroform;
