import './css/TimerLengthPanel.css';
import React from 'react';

const TimerLengthPanel = (props) => {
  //
  const id = props.id;

  //
  return (
    <div className='timer-length-panel'>
      <h1 id={`${id.toLowerCase()}-label`}>{id}</h1>

      <div className='buttons-container'>

        <button id={`${id.toLowerCase()}-decrement`}>-</button>

        <p id={`${id.toLowerCase()}-length`}>{props.length}</p>

        <button id={`${id.toLowerCase()}-increment`}>+</button>
      </div>

    </div>
  );
}

export default TimerLengthPanel;