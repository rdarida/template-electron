import { StrictMode } from 'react';
import { render } from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

import { store } from '@/store';
import { CounterView } from '@/views';

import '@/styles/index.scss';

const muiCache = createCache({ key: 'mui', prepend: true });
const theme = createTheme();

render(
  <StrictMode>
    <Provider store={store}>
      <CacheProvider value={muiCache}>
        <ThemeProvider theme={theme}>
          <CssBaseline />

          <HashRouter basename="/main_window">
            <Switch>
              <Route exact path="/" component={CounterView} />
            </Switch>
          </HashRouter>
        </ThemeProvider>
      </CacheProvider>
    </Provider>
  </StrictMode>,
  document.getElementById('root')
);
