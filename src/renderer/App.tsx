import { StrictMode } from 'react';
import { render } from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

import { CounterView } from '@/views';

import '@/styles/index.scss';

const theme = createTheme();

render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <HashRouter basename="/main_window">
        <Switch>
          <Route exact path="/" component={CounterView} />
        </Switch>
      </HashRouter>
    </ThemeProvider>
  </StrictMode>,
  document.getElementById('root')
);
