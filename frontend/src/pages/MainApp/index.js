import React from 'react';
import './../../css/Timer.css';
import Modal from './../../components/Modal';
import './../../css/Modal.css';
import Timer from './../../components/Timer';
import Tasks from './../../components/Tasks';
import notif from './../../assets/notif.mp3';
import Header from './../../components/Header';
import api from './../../services/api';

export default class MainApp extends React.Component {
  constructor() {
    super();

    this.state = {
      pomodoroLength: 25,
      ShortRestLength: 5,
      LongRestLength: 15,
      timerMinute: 0,
      isPlay: false,
      isLong: 0,
      tasks: [],
      audio: new Audio(notif),
    };

    const userId = localStorage.getItem('user');
    api
      .post('/users/getTimes', {
        _id: userId,
      })
      .then((res) => {
        const { pomodoro, short_break, long_break } = res.data;

        this.setState({
          pomodoroLength: pomodoro,
          ShortRestLength: short_break,
          LongRestLength: long_break,
        });
      });

    this.aumentarTempo = this.aumentarTempo.bind(this);
    this.diminuirTempo = this.diminuirTempo.bind(this);
    this.aumentarTempoDC = this.aumentarTempoDC.bind(this);
    this.diminuirTempoDC = this.diminuirTempoDC.bind(this);
    this.aumentarTempoDL = this.aumentarTempoDL.bind(this);
    this.diminuirTempoDL = this.diminuirTempoDL.bind(this);
    this.onToggleInterval = this.onToggleInterval.bind(this);
    this.decreaseTimerMinute = this.decreaseTimerMinute.bind(this);
    this.setTimer = this.setTimer.bind(this);
    this.skipTimer = this.skipTimer.bind(this);
    this.onPlayTimer = this.onPlayTimer.bind(this);
  }

  onPlayTimer(isPlay) {
    this.setState({
      isPlay: isPlay,
    });

    // if (isPlay === true) {
    //   const eng = document.getElementsByClassName('engrenagem')[0];
    //   eng.style.visibility = 'hidden';
    // }
  }

  aumentarTempo() {
    this.setState((prevState) => {
      return {
        pomodoroLength: prevState.pomodoroLength + 1,
        timerMinute: prevState.pomodoroLength + 1,
      };
    });
    this.setTimer();
  }

  diminuirTempo() {
    this.setState((prevState) => {
      return {
        pomodoroLength: prevState.pomodoroLength - 1,
        timerMinute: prevState.pomodoroLength - 1,
      };
    });
  }
  aumentarTempoDC() {
    this.setState((prevState) => {
      return {
        ShortRestLength: prevState.ShortRestLength + 1,
      };
    });
  }
  diminuirTempoDC() {
    this.setState((prevState) => {
      return {
        ShortRestLength: prevState.ShortRestLength - 1,
      };
    });
  }
  aumentarTempoDL() {
    this.setState((prevState) => {
      return {
        LongRestLength: prevState.LongRestLength + 1,
      };
    });
  }
  diminuirTempoDL() {
    this.setState((prevState) => {
      return {
        LongRestLength: prevState.LongRestLength - 1,
      };
    });
  }

  setTimer() {
    this.state.timerMinute = this.state.pomodoroLength;

    if (this.state.isLong !== 0) {
      this.setState({
        isLong: 0,
      });
    }
  }
  
  skipTimer() {
    if (this.state.timerMinute !== 0) {
      this.setState({
        timerMinute: 0,
      });
    }
  }

  decreaseTimerMinute() {
    this.setState((prevState) => {
      return {
        timerMinute: prevState.timerMinute - 1,
      };
    });
  }

  onToggleInterval(isSession) {
    if (isSession) {
      this.setState({
        timerMinute: this.state.pomodoroLength,
      });
      const background = document.getElementById('timerId');
      if (background.classList.contains('TimerSb')) {
        background.classList.remove('TimerSb');
        background.classList.add('Timer');
      } else if (background.classList.contains('TimerLb')) {
        background.classList.remove('TimerLb');
        background.classList.add('Timer');
      } else {
      }
    } else if (isSession === false && this.state.isLong < 2) {
      this.setState({
        timerMinute: this.state.ShortRestLength,
        isLong: this.state.isLong + 1,
      });
      const background = document.getElementById('timerId');
      if (background.classList.contains('Timer')) {
        background.classList.remove('Timer');
        background.classList.add('TimerSb');
      } else if (background.classList.contains('TimerLb')) {
        background.classList.remove('TimerLb');
        background.classList.add('TimerSb');
      } else {
      }
    } else {
      this.setState({
        timerMinute: this.state.LongRestLength,
        isLong: 0,
      });
      const background = document.getElementById('timerId');
      if (background.classList.contains('Timer')) {
        background.classList.remove('Timer');
        background.classList.add('TimerLb');
      } else if (background.classList.contains('TimerSb')) {
        background.classList.remove('TimerSb');
        background.classList.add('TimerLb');
      } else {
      }
    }
    this.playAudio();
  }

  playAudio() {
    this.state.audio.play();
  }

  render() {
    return (
      <>
        <Header isPlay={this.state.isPlay} />
        {/* <div className="Timer" id="timerId"> */}
          <Timer
            timerMinute={this.state.timerMinute}
            decreaseTimerMinute={this.decreaseTimerMinute}
            toggleInterval={this.onToggleInterval}
            setTimer={this.setTimer}
            onPlayTimer={this.onPlayTimer}
            isLong={this.state.isLong}
            skipTimer={this.skipTimer}
          />
        {/* </div> */}
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
      </>
    );
  }
}
