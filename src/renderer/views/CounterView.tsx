import { FC, useCallback, useState } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';

import { Button } from '@/components';

export const CounterView: FC = (): JSX.Element => {
  const [count, setCount] = useState(0);

  const onDecrement = useCallback(() => {
    setCount(current => current - 1);
  }, []);

  const onIncrement = useCallback(() => {
    setCount(current => current + 1);
  }, []);

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
