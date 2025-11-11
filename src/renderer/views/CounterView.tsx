import { FC, useCallback, useState } from 'react';

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
      <h1>💖 Hello World!</h1>
      <p>Welcome to your Electron application.</p>

      <h4>Count: {count}</h4>

      <div>
        <button onClick={onDecrement}>-</button>
        <button onClick={onIncrement}>+</button>
      </div>
    </div>
  );
};
