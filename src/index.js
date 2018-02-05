import React from 'react';
import ReactDOM from 'react-dom';
import MixpanelProvider from 'react-mixpanel';
import mixpanel from 'mixpanel-browser';
import store, { history } from './store'
import { ConnectedRouter } from 'react-router-redux'
import { Provider } from 'react-redux'

import App from './components/App';
import { loadProjects } from './actions/projectsActions';
import { loadSocial } from './actions/socialActions';
import { loadStats } from './actions/statsActions';
import { loadQuotes } from './actions/quotesActions';
import registerServiceWorker from './registerServiceWorker';

import './styles/index.css';

mixpanel.init('f79ee6b8ae07d924c40afc497ccfdc46');

store.dispatch(loadProjects);
store.dispatch(loadSocial);
store.dispatch(loadStats);
store.dispatch(loadQuotes);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <MixpanelProvider mixpanel={mixpanel}>
        <App />
      </MixpanelProvider>
    </ConnectedRouter>
  </Provider>  
, document.getElementById('root'));

registerServiceWorker();
