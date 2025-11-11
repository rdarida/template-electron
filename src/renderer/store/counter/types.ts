import { Action } from 'redux';

export enum CounterActionType {
  INCREMENT = 'CounterAction.Increment',
  DECREMENT = 'CounterAction.Decrement'
}

export type CounterAction = Action<CounterActionType>;
