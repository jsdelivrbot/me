import React, { Component } from 'react';
import brands from '@fortawesome/fontawesome-free-brands';
import fontawesome from '@fortawesome/fontawesome';
import proLight from '@fortawesome/fontawesome-pro-light';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';

import Footer from './Footer';
import TopNav from './TopNav';

import About from '../pages/About';
import Home from '../pages/Home';
import Project from '../pages/Project';
import Projects from '../pages/Projects';

import 'bootstrap/dist/css/bootstrap.css';
import '../styles/components/App.css';

class App extends Component {
  constructor() {
    super(...arguments);
    fontawesome.library.add(brands, proLight);
  }
  render() {
    return (
      <div>
        <Helmet>
          <meta charSet='utf-8' />
          <title>{ 'www.chrisvogt.me' }</title>
        </Helmet>

        <div className='App'>
          <TopNav />

          <Route exact path='/' component={ Home } />
          <Route path='/about' component={ About } />
          <Switch>
            <Route exact path='/projects' component={ Projects }/>
            <Route path='/projects/:slug' component={ Project }/>
          </Switch>

          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
