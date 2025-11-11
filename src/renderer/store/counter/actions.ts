import { CounterAction, CounterActionType } from './types';

export function increment(): CounterAction {
  return { type: CounterActionType.INCREMENT };
}

export function decrement(): CounterAction {
  return { type: CounterActionType.DECREMENT };
}
