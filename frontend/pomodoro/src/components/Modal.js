import React from 'react';
import './../css/Modal.css';
import blackArrowUp from './../assets/blackArrowUp.png';
import blackArrowDown from './../assets/blackArrowDown.png';

function Modal(props){
  function diminuirTempo() {
    if (props.pomodoroLength === 1){
      return;
    }

    props.diminuirM();

  }
  function aumentarTempo() {
    if(props.pomodoroLength === 60){
      return;
    }

    props.aumentarM();
  }
  function diminuirTempoDC() {
    if (props.ShortRestLength === 1){
      return;
    }

    props.diminuirDC();

  }
  function aumentarTempoDC() {
    if(props.ShortRestLength === 60){
      return;
    }

    props.aumentarDC();
  }
  function diminuirTempoDL() {
    if (props.LongRestLength === 1){
      return;
    }

    props.diminuirDL();

  }
  function aumentarTempoDL() {
    if(props.LongRestLength === 60){
      return;
    }

    props.aumentarDL();
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
            <p>{props.pomodoroLength}</p>
            <div className="img">
              <img src={blackArrowUp} onClick={aumentarTempo} alt=""></img>
              <img src={blackArrowDown} onClick={diminuirTempo} alt=""></img>
            </div>
          </div>
        </div>

        <div className="timerBox">
          <p>Pausa Curta</p>
          <div className="timer">
            <p>{props.ShortRestLength}</p>
            <div className="img">
              <img src={blackArrowUp} onClick={aumentarTempoDC} alt=""></img>
              <img src={blackArrowDown} onClick={diminuirTempoDC} alt=""></img>
            </div>
          </div>
        </div>

        <div className="timerBox">
          <p>Pausa Longa</p>
          <div className="timer">
            <p>{props.LongRestLength}</p>
            <div className="img">
              <img src={blackArrowUp} onClick={aumentarTempoDL} alt=""></img>
              <img src={blackArrowDown} onClick={diminuirTempoDL} alt=""></img>
            </div>
          </div>
        </div>

        <button type="button">Salvar</button>
      </div>
    </div> /*modalBackground*/
  );
};

export default Modal;
