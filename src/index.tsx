import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { enthusiasm } from '~/reducers/index';
import { StoreState } from '~/types/index';
import { EnthusiasmAction } from '~/actions';

import '~/index.css';
import routes from './routes';

const store = createStore<StoreState, EnthusiasmAction, number, string>(enthusiasm, {
  enthusiasmLevel: 1,
  languageName: 'TypeScript',
});
 
ReactDOM.render(
  <Provider store={store}>
    <Router>
      {renderRoutes(routes)}
    </Router>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
