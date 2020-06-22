// action constant
export const BREAK_INCREMENT = 'BREAK_INCREMENT';
export const BREAK_DECREMENT = 'BREAK_DECREMENT';
export const SESSION_INCREMENT = 'SESSION_INCREMENT';
export const SESSION_DECREMENT = 'SESSION_DECREMENT';
export const RESET = 'RESET';
export const START = 'START';
export const DEC_TIME_LEFT = 'DEC_TIME_LEFT';
export const STOP = 'STOP';

// break action creators
export const breakIncrement = () => {
  return { type: BREAK_INCREMENT }
}

export const breakDecrement = () => {
  return { type: BREAK_DECREMENT }
}

// session action creators
export const sessionIncrement = () => {
  return { type: SESSION_INCREMENT }
}

export const sessionDecrement = () => {
  return { type: SESSION_DECREMENT }
}

export const reset = () => {
  return { type: RESET }
}




// timer /////
//////////////
export const start = () => {
  return (dispatch) => {
    let timerId = setInterval(dispatch, 1000, { type: DEC_TIME_LEFT });

    dispatch({
      type: START,
      payload: timerId
    });
  }
}

export const stop = () => {
  return (dispatch, getState) => {
    clearInterval(getState().timerId);

    dispatch({ type: STOP });
  }
}

export const timeLeftDec = () => {
  return { type: DEC_TIME_LEFT }
}
