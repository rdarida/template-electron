import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import counter from './counter/reducer';

const reducer = combineReducers({
  counter
});

export * from './counter';
export type Store = ReturnType<typeof reducer>;
export const store = createStore(reducer, applyMiddleware(thunk));
