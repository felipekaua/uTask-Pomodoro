import React, { useState } from 'react';
import './../css/Form.css';
import { Link, useHistory } from 'react-router-dom';
import Message from './Message';
import api from '../services/api';
import { login } from './../services/auth';

const Form = (props) => {
  const history = useHistory();

  const [user, setUser] = React.useState('');
  const [pw, setPw] = React.useState('');

  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  function disabled(value, value2) {
    const button = document.querySelector('.button');
    if (value !== '' && value2 !== '') {
      button.disabled = false;
    } else {
      button.disabled = true;
    }
  }

  function handleUserChange(e) {

    disabled(`${e.target.value}`, pw);
    setUser(`${e.target.value}`);

  }

  function handlePwChange(e) {

    disabled(user, `${e.target.value}`);
    setPw(`${e.target.value}`);

  }

  async function handleSubmit(e) {
    e.preventDefault();

    setError(false);

    await api
      .post('/users/login', {
        login: user,
        password: pw,
      })
      .then((res) => {
        const { token } = res.data;
        login(token);
        setSuccess(true);
        setTimeout(() => history.push('/pomodoro'), 1500);
      })
      .catch((res) => {
        console.log('something went wrong');
        setError(true);
      });
    if (!validate(user, pw)) {
      setError(true);
      return;
    }

  }

  function validate(user, pass) {
    if (user === 'errado') return false;

    if (!user.trim() || !pass.trim()) return false;

    return true;
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h2 className="Bemvindo">{props.h2}</h2>

        <label className="labelLogin">{props.label1}</label>

        <input
          className="caixaLogin"
          onChange={handleUserChange}
          value={user}
          placeholder="   Seu login..."
        />

        <label className="labelSenha">{props.label2}</label>

        <input
          className="caixaSenha"
          type="password"
          onChange={handlePwChange}
          value={pw}
          placeholder="   Sua senha..."
        />

        <button className="button" type="submit" value="disabled" disabled>
          {props.btnText}
        </button>

        <p className="primeiravez">{props.p}</p>

        <Link className="linkcadastrar" to="/cadastro">
          {props.btnText2}
        </Link>
      </div>

      {error && (
        <Message
          status="error"
          title="Oops..."
          msg="Ocorreu um erro, tente novamente"
        />
      )}

      {success && <Message status="success" title="Wow" msg="Sucesso!" />}
    </form>
  );
};

export default Form;
