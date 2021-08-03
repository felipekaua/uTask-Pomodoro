import React from 'react';
import './../css/Header.css';
import logoTomateVermelho from './../assets/logoTomateVermelho.png';
import utaskPomodoro from './../assets/utaskPomodoro.png';
import config_ico from './../assets/config_ico.png';

function Header() {
  function abrirModal() {
    const mod = document.getElementsByClassName('modalBackground')[0];
    mod.style.display = 'block';
  }
  return (
    <header>
      <div>
        <img src={logoTomateVermelho} className = "logo" alt="logo"></img>
      </div>
      <div>
        <img src={utaskPomodoro} className = "titulo" alt="titulo"></img>
      </div>
      <div>
        <img src={config_ico} onClick={abrirModal} className = "engrenagem" alt="configuracao"></img>
      </div>
    </header>
  );
}
export default Header;