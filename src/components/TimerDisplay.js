import './css/TimerDisplay.css'
import React from 'react';
import { connect } from 'react-redux';
import { reset } from '../actions'

const TimerDisplay = (props) => {
  //
  const mmss = props.timeLeft.toMMSS();
  const { reset } = props;


  return (
    <div className='timer-display' >
      <h2 id='timer-label'>
        {props.isSession ? 'Session' : 'Break'}
      </h2>

      <p id='time-left' className='time-left'>{mmss}</p>

      <div className='timer-display-controls' >
        <button id='start_stop'>
          {props.isRunning ? 'STOP' : 'START'}
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
    isRunning: state.isRunning
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    reset() {
      dispatch(reset());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TimerDisplay);



// convert sec to mm:ss
// https://stackoverflow.com/questions/6312993/javascript-seconds-to-time-string-with-format-hhmmss
String.prototype.toMMSS = function () {
  var sec_num = parseInt(this, 10); // don't forget the second param
  var minutes = Math.floor(sec_num / 60);
  var seconds = sec_num - (minutes * 60);

  if (minutes < 10) { minutes = "0" + minutes; }
  if (seconds < 10) { seconds = "0" + seconds; }
  return minutes + ':' + seconds;
}