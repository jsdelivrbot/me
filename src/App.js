import React, { Component } from 'react';

import AboutCard from './components/AboutCard';
import Footer from './components/Footer';
import Masthead from './components/Masthead';
import Photography from './components/Photography';
import Projects from './components/Projects';
import Stats from './components/Stats';
import TopNav from './components/TopNav';

import 'bootstrap/dist/css/bootstrap.css';
import './styles/components/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopNav />
        <header className="App-header">
          <Masthead />
        </header>
        <Stats />
        <Projects />
        <AboutCard />
        <Photography />
        <Footer />
      </div>
    );
  }
}

export default App;
