import { FC, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HeartFilled } from '@ant-design/icons';

import { Store, decrement, increment } from '@/store';
import { Button } from '@/components';

export const CounterView: FC = (): JSX.Element => {
  const { value } = useSelector((store: Store) => store.counter);
  const dispatch = useDispatch();

  const onDecrement = useCallback(() => {
    dispatch(decrement());
  }, [dispatch]);

  const onIncrement = useCallback(() => {
    dispatch(increment());
  }, [dispatch]);

  return (
    <div>
      <h1>
        <HeartFilled style={{ color: 'red' }} /> Hello World!
      </h1>

      <p>Welcome to your Electron application.</p>

      <h4>Count: {value}</h4>

      <div>
        <Button color="red" onClick={onDecrement}>
          -
        </Button>

        <Button color="green" onClick={onIncrement}>
          +
        </Button>
      </div>
    </div>
  );
};
