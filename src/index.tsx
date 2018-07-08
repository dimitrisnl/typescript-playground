import 'bootstrap/dist/css/bootstrap.min.css';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import logger from 'redux-logger';
import Base from './Base';
import './index.css';
import rootReducer from './state/root';

const history = createBrowserHistory();

const composeEnhancer: typeof compose =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  connectRouter(history)(rootReducer),
  composeEnhancer(applyMiddleware(routerMiddleware(history), logger))
);

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Base history={history} />
      </Provider>
    </AppContainer>,
    document.getElementById('root') as HTMLElement
  );
};

render();

// Hot reloading
if (module.hot) {
  // Reload components
  module.hot.accept('./Base', () => {
    render();
  });

  // Reload reducers
  module.hot.accept('./state/root', () => {
    store.replaceReducer(connectRouter(history)(rootReducer));
  });
}
