import './css/TimerDisplay.scss'
import React from 'react';
import { connect } from 'react-redux';
import { reset, start, stop } from '../actions'
import Lcd from './Lcd';

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
        <div id='timer-label' className='off-the-screen'>
          {isSession ? 'Session' : 'Break'}
        </div>

        <div className='flex-space-around'>
          <div></div>
          <Lcd
            id='time-left'
            backgroundText='88:88'
            className='time-left-size'>
            {this.getMMSS(secondsLeft)}
          </Lcd>
          <div></div>
        </div>

        <div className='session-break'>
          <div
            className={isSession ? 'session-break-on' : 'session-break-off'}>
            SESSION
            </div>
          <div className='text-invisible'>--</div>
          <div className={isSession ? 'session-break-off' : 'session-break-on'}>BREAK</div>
        </div>

        <div className='flex-space-around' >
          <button className='round-button' id='start_stop' onClick={startStop}>
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

