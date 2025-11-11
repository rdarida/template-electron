import { CounterAction, CounterActionType } from './types';

const initialState = 0;

export default function counterReducer(
  state = initialState,
  { type }: CounterAction
): number {
  switch (type) {
    case CounterActionType.INCREMENT: {
      return state + 1;
    }

    case CounterActionType.DECREMENT: {
      return state - 1;
    }

    default: {
      return state;
    }
  }
}
