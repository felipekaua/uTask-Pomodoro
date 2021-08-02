import React from 'react';
import './../../css/Timer.css';
import tomate from './../../assets/tomateVermelho.png'

    export default function MainApp(){
        function startTimer(){
            console.log("click");
        }
        return(
            <>
            <div className="Timer">
                <button onClick={startTimer}>Start</button>
                <img src={tomate} alt="tomate"></img>
                <h1>00:00</h1>
            </div>
            </>
        );
    }