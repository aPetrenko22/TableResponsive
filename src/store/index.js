
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import state from './root-reducer';

const middleware = process.env.NODE_ENV === 'development'
  ? composeWithDevTools(applyMiddleware())
  : applyMiddleware();

const store = createStore(state, middleware);


export default store;
