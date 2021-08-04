import React from 'react';

class Timer extends React.Component{
    constructor(){
        super();

        this.state = {
            isSession: true,
            timerSecond:0,
        }
    }
    render(){
        return(
            <>
                <h1>{this.state.isSession === true ? "Pomodoro" : "Short Break"}</h1>
                <h2>{
                this.props.timerMinute === 0
                ? "00"
                : this.props.timerMinute < 10
                ? "0" + this.props.timerMinute
                : this.props.timerMinute 
                            } : {
                this.state.timerSecond === 0 
                ? "00"
                : this.state.timerSecond < 10 
                ? "0" + this.state.timeSecond 
                : this.state.timerSecond}</h2>
                
            </>
        )
    }
}

export default Timer;