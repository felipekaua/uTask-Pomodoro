import React from 'react';
import './../../css/Timer.css';
import Modal from './../../components/Modal';
import Timer from './../../components/Timer';

    export default class MainApp extends React.Component{
        constructor(){
            super();

            this.state = {
                breakLength: 5,
                ShortRestLength: 5,
                LongRestLength: 10,
                pomodoroLength: 25,
                timerMinute: 0,
            };

            this.aumentarTempo = this.aumentarTempo.bind(this);
            this.diminuirTempo = this.diminuirTempo.bind(this);
            this.aumentarTempoDC = this.aumentarTempoDC.bind(this);
            this.diminuirTempoDC = this.diminuirTempoDC.bind(this);
            this.aumentarTempoDL = this.aumentarTempoDL.bind(this);
            this.diminuirTempoDL = this.diminuirTempoDL.bind(this);
            this.onToggleInterval = this.onToggleInterval.bind(this);
            this.onUpdateTimerMinute = this.onUpdateTimerMinute.bind(this);
        }

        aumentarTempo(){
            this.setState((prevState)=>{
                return{
                    pomodoroLength: prevState.pomodoroLength + 1,
                    timerMinute: prevState.pomodoroLength + 1,
                }
            })
        }
        diminuirTempo(){
            this.setState((prevState)=>{
                return{
                    pomodoroLength: prevState.pomodoroLength - 1,
                    timerMinute: prevState.pomodoroLength - 1,
                }
            })
        }
        aumentarTempoDC(){
            this.setState((prevState)=>{
                return{
                    ShortRestLength: prevState.ShortRestLength + 1
                }
            })
        }
        diminuirTempoDC(){
            this.setState((prevState)=>{
                return{
                    ShortRestLength: prevState.ShortRestLength - 1
                }
            })
        }
        aumentarTempoDL(){
            this.setState((prevState)=>{
                return{
                    LongRestLength: prevState.LongRestLength + 1
                }
            })
        }
        diminuirTempoDL(){
            this.setState((prevState)=>{
                return{
                    LongRestLength: prevState.LongRestLength - 1
                }
            })
        }
        
        onUpdateTimerMinute(){
            this.setState((prevState)=>{
                return{
                    timerMinute:prevState.timerMinute-1,
                }
            })
        }

        onToggleInterval(isSession){
            // const counter;
            if(isSession){
                this.setState({
                    timerMinute: this.pomodoroLength
            })}
            // else if(isSession===false && counter <=2) {
            //     this.setState({
            //         timerMinute: ShortRestLength
            //     })
            //     counter++;
            // }
            else{
                this.setState({
                    timerMinute: this.LongRestLength
                })
                // counter = 0;
            }
        }




        render(){
           return (<>
            <div className="Timer">
                <Timer 
                timerMinute={this.state.timerMinute}
                updateTimerMinute={this.onUpdateTimerMinute}
                toggleInterval={this.onToggleInterval}
                />
                <button>Start</button>
            </div>
                <Modal 
                pomodoroLength={this.state.pomodoroLength}
                aumentarM={this.aumentarTempo}
                diminuirM={this.diminuirTempo}

                ShortRestLength={this.state.ShortRestLength}
                aumentarDC={this.aumentarTempoDC}
                diminuirDC={this.diminuirTempoDC}
                
                LongRestLength={this.state.LongRestLength}
                aumentarDL={this.aumentarTempoDL}
                diminuirDL={this.diminuirTempoDL}
                />
            </>); 
        }
        
    }