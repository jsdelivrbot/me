import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import brands from '@fortawesome/fontawesome-free-brands';
import proLight from '@fortawesome/fontawesome-pro-light';

import Footer from './Footer';
import TopNav from './TopNav';

import Home from '../pages/Home';
import About from '../pages/About';

import 'bootstrap/dist/css/bootstrap.css';
import '../styles/components/App.css';

class App extends Component {
  constructor() {
    super(...arguments);
    fontawesome.library.add(brands, proLight);
  }
  render() {
    return (
      <div className='App'>
        <TopNav />

        <Route exact path='/' component={ Home }/>
        <Route path='/about' component={ About }/>

        <Footer />
      </div>
    );
  }
}

export default App;
