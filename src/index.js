import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux'

import Header from './components/layout/Header';
import Main from './components/layout/Main';
import dressUpApp from './reducers';
import { addSelectables } from './actions';

import './index.css';

const store = createStore(dressUpApp);

const unsubscribe = store.subscribe(() =>
  console.log(store.getState())
);

store.dispatch(addSelectables());
unsubscribe();

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div className="Website">
        <Header />
        <Main />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);