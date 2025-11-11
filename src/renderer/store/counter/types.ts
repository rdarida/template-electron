import { Action } from 'redux';

import { Store } from '..';

export enum CounterActionType {
  REQUEST = 'CounterAction.Request',
  SUCCESS = 'CounterAction.Success'
}

export type CounterState = {
  value: number;
  isLoading: boolean;
};

export type CounterAction = {
  payload?: number;
} & Action<CounterActionType>;

export type CounterDispatch = (action: CounterAction) => void;

export type CounterThunk = (
  dispatch: CounterDispatch,
  getStore: () => Store
) => void;
