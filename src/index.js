import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import store, { history } from './store'

import App from './App';
import { loadProjects } from './actions/projectsActions';
import { loadSocial } from './actions/socialActions';
import { loadStats } from './actions/statsActions';
import { loadQuotes } from './actions/quotesActions';
import registerServiceWorker from './registerServiceWorker';

import './styles/index.css';

store.dispatch(loadProjects);
store.dispatch(loadSocial);
store.dispatch(loadStats);
store.dispatch(loadQuotes);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <App />
      </div>
    </ConnectedRouter>
  </Provider>  
, document.getElementById('root'));

registerServiceWorker();
