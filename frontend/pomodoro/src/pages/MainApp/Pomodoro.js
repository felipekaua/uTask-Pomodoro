import React, {useState, useEffect} from 'react';

export default function Pomodoro(props){
    const [minutes, setMinutes] = useState(1);
    const [seconds, setSeconds] = useState(0);
    const [shortBreak, setShortBreak] = useState(false);
    // const [LongBreak, setLongBreak] = useState(false);

    function click(){
        
        // useEffect(() => {
            let interval = setInterval(()=>{
                clearInterval(interval);
    
                if(seconds === 0){
                    if (minutes !==0){
                        setSeconds(59);
                        setMinutes(minutes-1);
                    }else{
                        let minutes = shortBreak ? 24:4;
                        let seconds = 59;
    
                        setSeconds(seconds);
                        setMinutes(minutes);
                        setShortBreak(!shortBreak);
                    }
                }else{
                    setSeconds(seconds-1);
                }
            }, 1000);

        // }, [seconds]);
    }
    const timerMinutes = minutes <10 ?"0"+`${minutes}` : minutes;
    const timerSeconds = seconds <10?"0"+`${seconds}` : seconds;
    return (<>
            <div className="Timer">
                <h1>Pomodoro</h1>
                <h2>{timerMinutes}:{timerSeconds}</h2>
                <button onClick={click}>Start</button>
            </div>
            </>);
}