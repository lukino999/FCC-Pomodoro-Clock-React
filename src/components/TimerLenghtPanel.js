import './css/TimerLengthPanel.scss';
import React from 'react';
import Lcd from './Lcd';


const TimerLengthPanel = (props) => {
  //
  const { id, length, decClick, incClick, isSession } = props;

  let sessionOnOffClass;
  if (isSession) {
    sessionOnOffClass = (id.toLowerCase() === 'session') ? 'session-break-on' : 'session-break-off';
  } else {
    sessionOnOffClass = (id.toLowerCase() === 'session') ? 'session-break-off' : 'session-break-on';
  }

  //
  return (
    <div className='timer-length-panel'>

      <div id={`${id.toLowerCase()}-label`} className={`session-break ${sessionOnOffClass}`}>{id}</div>

      <div className='buttons-container'>

        <button
          className='round-button regular text-color'
          id={`${id.toLowerCase()}-decrement`}
          onClick={decClick}
        >
          <i className='fa fa-arrow-down' aria-hidden='true'></i>
        </button>

        <Lcd id={`${id.toLowerCase()}-length`} backgroundText='88' className='panel-font-size'>
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

      {/* <h1 className='text-color off-the-screen' id={`${id.toLowerCase()}-label`}>{id}</h1> */}

    </div>
  );
}


export default TimerLengthPanel