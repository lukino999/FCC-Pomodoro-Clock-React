import './css/TimerDisplay.css'
import React from 'react';

const TimerDisplay = (props) => {
  //
  const mmss = props.timeLeft.toMMSS()

  return (
    <div className='timer-display' >
      <h2 id='timer-label'>{props.running}</h2>

      <p id='time-left' className='time-left'>{mmss}</p>

      <div className='timer-display-controls' >
        <button id='start_stop'>START</button>
        <button id='reset'>RESET</button>
      </div>

    </div>
  )
}

export default TimerDisplay;

// convert sec to mm:ss
// https://stackoverflow.com/questions/6312993/javascript-seconds-to-time-string-with-format-hhmmss
String.prototype.toMMSS = function () {
  var sec_num = parseInt(this, 10); // don't forget the second param
  var minutes = Math.floor(sec_num / 60);
  var seconds = sec_num - (minutes * 60);

  if (minutes < 10) { minutes = "0" + minutes; }
  if (seconds < 10) { seconds = "0" + seconds; }
  return minutes + ':' + seconds;
}