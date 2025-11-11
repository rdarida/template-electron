import { Channel } from '_types_';

import { CounterAction, CounterActionType, CounterThunk } from './types';

function requestChange(): CounterAction {
  return { type: CounterActionType.REQUEST };
}

function successChange(payload: number): CounterAction {
  return { type: CounterActionType.SUCCESS, payload };
}

export function increment(): CounterThunk {
  return (dispatch, getStore) => {
    dispatch(requestChange());

    const { value } = getStore().counter;

    electronApi
      .invoke<number>(Channel.COUNTER_INCREMENT, value)
      .then(reply => dispatch(successChange(reply)));
  };
}

export function decrement(): CounterThunk {
  return (dispatch, getStore) => {
    dispatch(requestChange());

    const { value } = getStore().counter;

    electronApi
      .invoke<number>(Channel.COUNTER_DECREMENT, value)
      .then(reply => dispatch(successChange(reply)));
  };
}
