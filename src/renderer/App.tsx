import { StrictMode } from 'react';
import { render } from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigProvider, ThemeConfig, theme } from 'antd';

import { store } from '@/store';
import { CounterView } from '@/views';

import '@/styles/index.scss';

const isDark = false;

const themeConfig: ThemeConfig = {
  ...theme,
  algorithm: isDark ? theme.darkAlgorithm : theme.defaultAlgorithm,
  token: {
    borderRadius: 0
  }
};

render(
  <StrictMode>
    <Provider store={store}>
      <ConfigProvider theme={themeConfig}>
        <HashRouter basename="/main_window">
          <Switch>
            <Route exact path="/" component={CounterView} />
          </Switch>
        </HashRouter>
      </ConfigProvider>
    </Provider>
  </StrictMode>,
  document.getElementById('root')
);
