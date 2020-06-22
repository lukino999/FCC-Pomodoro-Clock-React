import {
  BREAK_INCREMENT,
  BREAK_DECREMENT,
  SESSION_INCREMENT,
  SESSION_DECREMENT,
  RESET,
  START,
  STOP,
  DEC_TIME_LEFT,
} from '../actions';

const INITIAL_STATE = {
  breakLength: 5,
  sessionLength: 25,
  isSession: true,
  isRunning: false,
  timerId: null,
  secondsLeft: 25 * 60
}

export default (state = INITIAL_STATE, action) => {
  // destructure state
  const { breakLength, sessionLength, secondsLeft, timerId } = state;


  switch (action.type) {
    case BREAK_INCREMENT:
      if (breakLength === 60) return state; // max length 60m
      return {
        ...state,
        breakLength: breakLength + 1
      }

    case BREAK_DECREMENT:
      if (breakLength === 1) return state; // min length 1
      return {
        ...state,
        breakLength: breakLength - 1
      }

    case SESSION_INCREMENT:
      if (sessionLength === 60) return state; // max length 60m
      return {
        ...state,
        sessionLength: sessionLength + 1
      }

    case SESSION_DECREMENT:
      if (sessionLength === 1) return state; // min length 1
      return {
        ...state,
        sessionLength: sessionLength - 1
      }

    case RESET:
      return INITIAL_STATE;

    case START:
      console.log(action);
      console.log(state);
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
      return {
        ...state,
        secondsLeft: secondsLeft - 1
      }

    default:
      return state;
  }
}