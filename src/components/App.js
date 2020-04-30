import React from 'react';
import './css/App.css';
import { connect } from 'react-redux';
import { reducer } from '../reducers';
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
    sessionIncrement
  } = props

  return (
    <div className='app'>
      <h1 className='header'>Pomodoro Clock</h1>
      <div className='panel-container'>
        <TimerLengthPanel
          id='Break'
          length={breakLength}
          incClick={breakIncrement}
          decClick={breakDecrement}
        />

        <TimerLengthPanel
          id='Session'
          length={sessionLength}
          incClick={sessionIncrement}
          decClick={sessionDecrement}
        />

      </div>
      <TimerDisplay timeLeft={(60 * 25).toString()} />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    breakLength: state.breakLength,
    sessionLength: state.sessionLength
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