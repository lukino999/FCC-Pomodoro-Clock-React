import './css/TimerLengthPanel.scss';
import React from 'react';
import Lcd from './Lcd';


const TimerLengthPanel = (props) => {
  //
  const { id, length, decClick, incClick } = props;

  //
  return (
    <div className='timer-length-panel'>

      <div className='buttons-container'>

        <button
          className='round-button regular text-color'
          id={`${id.toLowerCase()}-decrement`}
          onClick={decClick}
        >
          <i className='fa fa-arrow-down' aria-hidden='true'></i>
        </button>

        <Lcd id={`${id.toLowerCase()}-length`} backgroundText='00' className='panel-font-size'>
          {length}
        </Lcd>

        <button
          className='round-button regular text-color'
          id={`${id.toLowerCase()}-increment`}
          onClick={incClick}
        >
          <i className='fa fa-arrow-up' aria-hidden='true'></i>
        </button>
      </div>

      <h1 className='text-color off-the-screen' id={`${id.toLowerCase()}-label`}>{id}</h1>

    </div>
  );
}


export default TimerLengthPanel