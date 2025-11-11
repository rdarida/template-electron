import { StrictMode } from 'react';
import { render } from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';

import { CounterView } from '@/views';

import '@/styles/index.scss';

render(
  <StrictMode>
    <HashRouter basename="/main_window">
      <Switch>
        <Route exact path="/" component={CounterView} />
      </Switch>
    </HashRouter>
  </StrictMode>,
  document.getElementById('root')
);
