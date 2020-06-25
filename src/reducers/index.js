import {
  BREAK_INCREMENT,
  BREAK_DECREMENT,
  SESSION_INCREMENT,
  SESSION_DECREMENT,
  RESET,
  START,
  STOP,
  DEC_TIME_LEFT
} from '../actions';

const INITIAL_STATE = {
  breakLength: 5,
  sessionLength: 25,
  isSession: true,
  isRunning: false,
  secondsLeft: 25 * 60
}

export default (state = INITIAL_STATE, action) => {

  const { breakLength, sessionLength, secondsLeft, isSession, isRunning } = state;


  switch (action.type) {
    case BREAK_INCREMENT:
      if (isRunning) return state;
      //
      if (breakLength === 60) return state; // max length 60m
      return {
        ...state,
        breakLength: breakLength + 1
      }

    case BREAK_DECREMENT:
      if (isRunning) return state;
      //
      if (breakLength === 1) return state; // min length 1
      return {
        ...state,
        breakLength: breakLength - 1
      }

    case SESSION_INCREMENT:
      if (isRunning) return state;
      //
      if (sessionLength === 60) return state; // max length 60m
      return {
        ...state,
        sessionLength: sessionLength + 1,
        secondsLeft: secondsLeft + 60
      }

    case SESSION_DECREMENT:
      if (isRunning) return state;
      //
      if (sessionLength === 1) return state; // min length 1
      return {
        ...state,
        sessionLength: sessionLength - 1,
        secondsLeft: secondsLeft - 60
      }

    case RESET:
      return INITIAL_STATE;

    case START:
      return {
        ...state,
        isRunning: true,
        timerId: action.payload
      }

    case STOP: {
      return {
        ...state,
        isRunning: false
      }
    }


    case DEC_TIME_LEFT:
      let _secLeft;
      let _isSess;
      if (secondsLeft === 0) {
        _isSess = !isSession;
        _secLeft = 60 * (_isSess ? sessionLength : breakLength);
      } else {
        _isSess = isSession;
        _secLeft = secondsLeft - 1;
      }
      return {
        ...state,
        secondsLeft: _secLeft,
        isSession: _isSess
      }


    default:
      return state;
  }
}



//