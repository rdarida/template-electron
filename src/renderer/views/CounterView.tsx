import { FC, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FavoriteIcon from '@mui/icons-material/Favorite';

import { Store, decrement, increment } from '@/store';
import { Button } from '@/components';

export const CounterView: FC = (): JSX.Element => {
  const count = useSelector((store: Store) => store.counter);
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
        <FavoriteIcon color="error" /> Hello World!
      </h1>

      <p>Welcome to your Electron application.</p>

      <h4>Count: {count}</h4>

      <div>
        <Button color="error" onClick={onDecrement}>
          -
        </Button>

        <Button color="success" onClick={onIncrement}>
          +
        </Button>
      </div>
    </div>
  );
};
