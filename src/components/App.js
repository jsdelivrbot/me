import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import Footer from './Footer';
import Social from './Social';
import TopNav from './TopNav';

import Home from '../pages/Home';
import About from '../pages/About';

import 'bootstrap/dist/css/bootstrap.css';
import '../styles/components/App.css';

class App extends Component {
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
