import { createStore, applyMiddleware, compose } from 'redux';
import { thunkMiddleware } from 'redux-thunk';
import reducer from '../reducers';

function createMyStore(initialState) {
  const middleWares = [];
  middleWares.push(thunkMiddleware);
  return createStore(reducer, initialState, compose(applyMiddleware(...middleWares)));
}

export default function initRedux(initialState) {
  return createMyStore(initialState);
}
