import React from 'react';
import thunkMiddleware from 'redux-thunk';
// import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';
import App from './components/App';

// const loggerMiddleware = createLogger()

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);