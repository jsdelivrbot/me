import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import projectsReducer from './projectsReducer';
import quotesReducer from './quotesReducer';
import socialReducer from './socialReducer';
import statsReducer from './statsReducer';

export default combineReducers({
  projects: projectsReducer,
  quotes: quotesReducer,
  routing: routerReducer,
  social: socialReducer,
  stats: statsReducer
});