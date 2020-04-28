import React from 'react';
import './css/App.css';
import TimerLengthPanel from './TimerLenghtPanel';
import TimerDisplay from './TimerDisplay';

const App = () => {

  return (
    <div className='app'>
      <h1 className='header'>Pomodoro Clock</h1>
      <div className='panel-container'>
        <TimerLengthPanel id='Break' length={5} />
        <TimerLengthPanel id='Session' length={25} />
      </div>
      <TimerDisplay running='Session' timeLeft={(60 * 25).toString()} />
    </div>
  )
}

export default App;