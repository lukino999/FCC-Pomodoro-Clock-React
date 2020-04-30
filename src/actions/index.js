// action constant
export const BREAK_INCREMENT = 'BREAK_INCREMENT';
export const BREAK_DECREMENT = 'BREAK_DECREMENT';
export const SESSION_INCREMENT = 'SESSION_INCREMENT';
export const SESSION_DECREMENT = 'SESSION_DECREMENT';
export const RESET = 'RESET';

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