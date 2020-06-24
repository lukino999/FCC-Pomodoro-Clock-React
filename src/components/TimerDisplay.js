import './css/TimerDisplay.css'
import React from 'react';
import { connect } from 'react-redux';
import { reset, start, stop } from '../actions'

class TimerDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.sample = process.env.PUBLIC_URL + '/samples/alarm-clock-01.mp3';
    this.player = React.createRef();
  }

  getMMSS = (seconds) => {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    let mmss = min < 10 ? '0' : '';
    mmss += `${min}:`;
    mmss += sec < 10 ? '0' : '';
    return mmss + sec;
  }

  async playAlarm() {
    try {
      await this.player.play();
    } catch (err) {
      console.log(err);
    }
  }

  reset = () => {
    this.props.reset();
    this.player.pause();
    this.player.currentTime = 0;
  }


  render() {
    const { start, stop, isRunning, isSession, secondsLeft } = this.props;

    if (secondsLeft === 0) {
      this.playAlarm()
    }

    let startStop;
    let startStopText;

    if (isRunning) {
      startStop = stop;
      startStopText = 'STOP';
    } else {
      startStop = start;
      startStopText = 'START';
    }

    return (
      <div className='timer-display' >
        <audio
          src={this.sample}
          preload=''
          className='clip'
          id='beep'
          ref={ref => this.player = ref}
        ></audio>
        <h2 id='timer-label'>
          {isSession ? 'Session' : 'Break'}
        </h2>

        <p id='time-left' className='time-left'>{this.getMMSS(secondsLeft)}</p>

        <div className='timer-display-controls' >
          <button id='start_stop' onClick={startStop}>
            {startStopText}
          </button>
          <button id='reset' onClick={this.reset}>
            RESET
        </button>
        </div>

      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    isSession: state.isSession,
    isRunning: state.isRunning,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    reset() {
      dispatch(reset());
    },
    start() {
      dispatch(start());
    },
    stop() {
      dispatch(stop());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TimerDisplay);

