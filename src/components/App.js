import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import brands from '@fortawesome/fontawesome-free-brands';
import { faCheckSquare, faCoffee } from '@fortawesome/fontawesome-pro-light';

import Footer from './Footer';
import Social from './Social';
import TopNav from './TopNav';

import Home from '../pages/Home';
import About from '../pages/About';

import 'bootstrap/dist/css/bootstrap.css';
import '../styles/components/App.css';

class App extends Component {
  constructor() {
    super(...arguments);
    fontawesome.library.add(brands, faCheckSquare, faCoffee);
  }
  render() {
    return (
      <div className='App'>
        <TopNav />

        <Route exact path='/' component={ Home }/>
        <Route path='/about' component={ About }/>

        <Social />
        <Footer />
      </div>
    );
  }
}

export default App;
