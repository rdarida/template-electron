import { CounterAction, CounterActionType, CounterState } from './types';

const initialState: CounterState = {
  value: 0,
  isLoading: false
};

export default function counterReducer(
  state = initialState,
  { type, payload }: CounterAction
): CounterState {
  switch (type) {
    case CounterActionType.REQUEST: {
      return { ...state, isLoading: true };
    }

    case CounterActionType.SUCCESS: {
      return { value: payload, isLoading: false };
    }

    default: {
      return state;
    }
  }
}
