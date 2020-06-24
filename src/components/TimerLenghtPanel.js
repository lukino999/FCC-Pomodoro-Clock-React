import './css/TimerLengthPanel.scss';
import React from 'react';
import Lcd from './Lcd';


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

        {/* <p id={`${id.toLowerCase()}-length`}>{length}</p> */}
        <Lcd id={`${id.toLowerCase()}-length`} backgroundText='00' className='panel-font-size'>
          {length}
        </Lcd>


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