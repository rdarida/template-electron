import { StrictMode } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

import { store } from '@/store';
import { CounterView } from '@/views';

import '@/styles/index.scss';

const theme = createTheme();

render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <HashRouter basename="/main_window">
          <Switch>
            <Route exact path="/" component={CounterView} />
          </Switch>
        </HashRouter>
      </ThemeProvider>
    </Provider>
  </StrictMode>,
  document.getElementById('root')
);
