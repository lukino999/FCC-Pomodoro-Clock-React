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

    const sessionOnOffClass = isSession ? 'session-break-on' : 'session-break-off';
    const breakOnOffClass = isSession ? 'session-break-off' : 'session-break-on';

    return (
      <div className='timer-display text-color' >
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
          <button
            id='start_stop'
            className='round-button large'
            onClick={startStop}>
            <i
              className={`fa fa-pause led-padding ${isRunning ? 'pause-led-on' : 'pause-led-off'}`}
              aria-hidden='true'></i>
            <i className={`fa fa-play led-padding ${isRunning ? 'play-led-off' : 'play-led-on'}`}
              aria-hidden='true'></i>
          </button>
          <Lcd
            id='time-left'
            backgroundText='88:88'
            className='time-left-size'>
            {this.getMMSS(secondsLeft)}
          </Lcd>
          <button
            id='reset'
            className='round-button large text-color'
            onClick={this.reset}>
            <i className='fa fa-refresh' aria-hidden='true'></i>
          </button>
        </div>

        <div className='session-break'>
          <div className={`half-width ${sessionOnOffClass}`}>SESSION</div>
          <div className={`half-width ${breakOnOffClass}`}>BREAK</div>
        </div>

        <div className='flex-space-around' >


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

