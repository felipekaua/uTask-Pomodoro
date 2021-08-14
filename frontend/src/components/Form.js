import React, { useState } from 'react';
import './../css/Form.css';
import { Link, useHistory } from 'react-router-dom';
import Message from './Message';
import api from '../services/api';

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
    // setUser((prevstate) => {
    //   prevstate = `${e.target.value}`;
    //   if (prevstate === '') {
    //     button.disabled = true;
    //   }
    //   return prevstate;
    // });
  }

  function handlePwChange(e) {
    disabled(user, `${e.target.value}`);
    setPw(`${e.target.value}`);
    // setPw((prevstate) => {
    //   prevstate = `${e.target.value}`;
    //   if (prevstate === '') {
    //     button.disabled = true;
    //   }
    //   return prevstate;
    // });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    setError(false);

    await api.post('/users/login',{
      login: user,
      pass: pw,
    }).then((res)=>{
      const { _id } = res.data;
      console.log(_id);



      setSuccess(true);
      setTimeout(() => history.push('/pomodoro'), 1500);
    }).catch((res)=>{
      console.log("something went wrong");
    })
    if (!validate(user, pw)) {
      setError(true);
      return;
    }

    // login efetuado com sucesso
    // setSuccess(true);
    // setTimeout(() => history.push('/pomodoro'), 1500);
  }

  // Acendendo o botão
  //   function stateHandle(e) {
  //     const button = document.querySelector('.button');
  //     e.preventDefault();

  //     if (user !== '') {
  //       if (pw === '') {
  //         button.disabled = true;
  //       }
  //     }

  //     if (user === '') {
  //       if (pw !== '') {
  //         button.disabled = true;
  //       }
  //     }

  //     if (user !== '') {
  //       if (pw === '') {
  //         button.disabled = true;
  //       }
  //     }

  //     if (user !== '') {
  //       if (pw !== '') {
  //         button.disabled = false;
  //       }
  //     }
  //   }

  function validate(user, pass) {
    if (user === 'errado') return false;

    if (!user.trim() || !pass.trim()) return false;

    return true;
  }

  //HTML===================================================================================
  //onChange={stateHandle}
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
