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
                <h1>Pomodoro</h1>
                <h2>00:00</h2>
                <button onClick={startTimer}>Start</button>
            </div>
                
            </>
        );
    }