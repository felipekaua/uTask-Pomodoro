import React from 'react';
import { useState } from 'react';
import './../css/Modal.css';
import blackArrowUp from './../assets/blackArrowUp.png';
import blackArrowDown from './../assets/blackArrowDown.png';

const Modal = () => {
  const [tempo, setTempo] = useState(0);
  const [tempo1, setTempo1] = useState(0);
  const [tempo2, setTempo2] = useState(0);

  function aumentarTempo() {
    setTempo((prevState) => prevState + 1);
  }
  function diminuirTempo() {
    if (tempo !== 0) setTempo((prevState) => prevState - 1);
  }

  function aumentarTempo1() {
    setTempo1((prevState) => prevState + 1);
  }
  function diminuirTempo1() {
    if (tempo1 !== 0) setTempo1((prevState) => prevState - 1);
  }

  function aumentarTempo2() {
    setTempo2((prevState) => prevState + 1);
  }
  function diminuirTempo2() {
    if (tempo2 !== 0) setTempo2((prevState) => prevState - 1);
  }
  function fecharModal() {
    const modal = document.getElementsByClassName('modalBackground')[0];
    window.onclick = (event) => {
      if (event.target === modal) modal.style.display = 'none';
    };
  }
  return (
    <div className="modalBackground" onClick={fecharModal}>
      <div className="modalWindow">
        <h1>Configuração</h1>
        <h3>Tempo (minutos)</h3>

        <div className="timerBox">
          <p>Pomodoro</p>
          <div className="timer">
            <p>{tempo}</p>
            <div className="img">
              <img src={blackArrowUp} onClick={aumentarTempo} alt=""></img>
              <img src={blackArrowDown} onClick={diminuirTempo} alt=""></img>
            </div>
          </div>
        </div>

        <div className="timerBox">
          <p>Pausa Curta</p>
          <div className="timer">
            <p>{tempo1}</p>
            <div className="img">
              <img src={blackArrowUp} onClick={aumentarTempo1} alt=""></img>
              <img src={blackArrowDown} onClick={diminuirTempo1} alt=""></img>
            </div>
          </div>
        </div>

        <div className="timerBox">
          <p>Pausa Longa</p>
          <div className="timer">
            <p>{tempo2}</p>
            <div className="img">
              <img src={blackArrowUp} onClick={aumentarTempo2} alt=""></img>
              <img src={blackArrowDown} onClick={diminuirTempo2} alt=""></img>
            </div>
          </div>
        </div>

        <button type="button">Salvar</button>
      </div>
    </div> /*modalBackground*/
  );
};

export default Modal;
