import './css/TimerDisplay.css'
import React from 'react';
import { connect } from 'react-redux';
import { reset, start, stop } from '../actions'

const TimerDisplay = (props) => {

  const getMMSS = (seconds) => {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    let mmss = min < 10 ? '0' : '';
    mmss += `${min}:`;
    mmss += sec < 10 ? '0' : '';
    return mmss + sec;
  }

  ////
  const left = getMMSS(props.secondsLeft);
  console.log(left);


  const { reset, start, stop, isRunning, isSession } = props;

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
      <h2 id='timer-label'>
        {isSession ? 'Session' : 'Break'}
      </h2>

      <p id='time-left' className='time-left'>{left}</p>

      <div className='timer-display-controls' >
        <button id='start_stop' onClick={startStop}>
          {startStopText}
        </button>
        <button id='reset' onClick={reset}>
          RESET
        </button>
      </div>

    </div>
  )
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

