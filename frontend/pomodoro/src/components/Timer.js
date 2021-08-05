import React from 'react';

class Timer extends React.Component{
    constructor(){
        super();

        this.state = {
            isSession: true,
            timerSecond:0,
            intervalId:0,
            
        };

        this.play = this.play.bind(this);
        this.stop = this.stop.bind(this);
        this.decreaseTimer = this.decreaseTimer.bind(this);
    }
play(){
    let intervalId = setInterval(this.decreaseTimer, 1000);
    
    this.props.setTimer();

    const startButton = document.getElementsByClassName('startButton')[0];
    const stopButton = document.getElementsByClassName('stopButton')[0];
    startButton.style.display = 'none';
    stopButton.style.display = 'block';

    this.setState({
        intervalId:intervalId
    })

    this.props.onPlayTimer(true);
}
stop(){
    clearInterval(this.state.intervalId);
    
    const startButton = document.getElementsByClassName('startButton')[0];
    const stopButton = document.getElementsByClassName('stopButton')[0];
    startButton.style.display = 'block';
    stopButton.style.display = 'none';
    const eng = document.getElementsByClassName('engrenagem')[0];
    eng.style.visibility = "visible"

    this.props.onPlayTimer(false);
}

decreaseTimer(){
    switch(this.state.timerSecond){
        case 0:
            if(this.props.timerMinute === 0){
                if(this.state.isSession){
                    this.setState({
                       isSession: false 
                    });

                    this.props.toggleInterval(this.state.isSession);

                    if(this.props.isLong === 0){
                        const Psbreak = document.getElementsByClassName('Psbreak')[0];
                        const Lbreak = document.getElementsByClassName('Lbreak')[0];

                        Psbreak.style.display = "none";
                        Lbreak.style.display = "block";

                    }else{
                        const Psbreak = document.getElementsByClassName('Psbreak')[0];
                        const Lbreak = document.getElementsByClassName('Lbreak')[0];

                        Psbreak.style.display = "block";
                        Lbreak.style.display = "none";
                    }
                }else{
                    this.setState({
                        isSession: true,
                    });
 
                    this.props.toggleInterval(this.state.isSession);
                     
                    const Psbreak = document.getElementsByClassName('Psbreak')[0];
                    const Lbreak = document.getElementsByClassName('Lbreak')[0];

                    Psbreak.style.display = "block";
                    Lbreak.style.display = "none"; 
                }
            }else{
                this.props.decreaseTimerMinute()
                this.setState({
                    timerSecond: 59,
                })
            }
        break;
        default:
            this.setState((prevState)=>{
                return{
                    timerSecond: prevState.timerSecond-1,
                }
            })
        break;
    }
}
    render(){
        return(
            <>
                <h1 className="Psbreak">{this.state.isSession === true ? "Pomodoro" : "Short Break"}</h1>
                <h1 className="Lbreak">Long Break</h1>
                <h2>{
                this.props.timerMinute === 0
                ? "00"
                : this.props.timerMinute < 10
                ? "0" + this.props.timerMinute
                : this.props.timerMinute
                            }:{
                this.state.timerSecond === 0 
                ? "00"
                : this.state.timerSecond < 10 
                ? "0" + this.state.timerSecond 
                : this.state.timerSecond}</h2>
                <button className="startButton" onClick={this.play}>Start</button>
                <button className="stopButton" onClick={this.stop}>Stop</button>
            </>
        )
    }
}

export default Timer;