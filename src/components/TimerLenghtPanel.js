import './css/TimerLengthPanel.css';
import React from 'react';


const TimerLengthPanel = (props) => {
  //
  const { id, length, decClick, incClick } = props;

  //
  return (
    <div className='timer-length-panel'>
      <h1 id={`${id.toLowerCase()}-label`}>{id}</h1>

      <div className='buttons-container'>

        <button
          id={`${id.toLowerCase()}-decrement`}
          onClick={decClick}
        >
          -
        </button>

        <p id={`${id.toLowerCase()}-length`}>{length}</p>

        <button
          id={`${id.toLowerCase()}-increment`}
          onClick={incClick}
        >
          +
        </button>
      </div>

    </div>
  );
}


export default TimerLengthPanel