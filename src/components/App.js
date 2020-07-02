import React from 'react';
import './css/App.scss';
import { connect } from 'react-redux';
import {
  breakDecrement,
  breakIncrement,
  sessionDecrement,
  sessionIncrement
} from '../actions';

import TimerLengthPanel from './TimerLenghtPanel';
import TimerDisplay from './TimerDisplay';

const App = (props) => {

  const {
    sessionLength,
    breakLength,
    breakDecrement,
    breakIncrement,
    sessionDecrement,
    sessionIncrement,
    secondsLeft,
    isSession
  } = props

  return (
    <div className='app'>

      <div className='clock-body'>
        <TimerDisplay secondsLeft={secondsLeft} />

        <div className='panel-container'>

          <TimerLengthPanel
            id='SESSION'
            length={sessionLength}
            incClick={sessionIncrement}
            decClick={sessionDecrement}
            isSession={isSession}
          />

          <TimerLengthPanel
            id='BREAK'
            length={breakLength}
            incClick={breakIncrement}
            decClick={breakDecrement}
            isSession={isSession}
          />

        </div>

      </div>
      <footer>
        FreeCodeCamp Pomodoro Clock - &copy; Luca M - <a
          href='https://github.com/lukino999/FCC-Pomodoro-Clock-React'
          target='_blank'>source</a></footer>
    </div >
  )
}

const mapStateToProps = (state) => {
  return {
    breakLength: state.breakLength,
    sessionLength: state.sessionLength,
    secondsLeft: state.secondsLeft,
    isSession: state.isSession
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    breakIncrement() {
      dispatch(breakIncrement())
    },

    breakDecrement() {
      dispatch(breakDecrement())
    },

    sessionIncrement() {
      dispatch(sessionIncrement())
    },

    sessionDecrement() {
      dispatch(sessionDecrement())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);