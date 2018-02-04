import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'reactstrap';

import Masthead from '../components/Masthead';
import Photography from '../components/Photography';
import Projects from '../components/Projects';
import Stats from '../components/Stats';
import TitlePanel from '../components/TitlePanel';

// import '../styles/components/Photography.css';

const Home = () => {
  return (
    <div className="Home">
      <header className="App-header">
        <Masthead />
      </header>

      <Stats />

      <Container>
        <TitlePanel right={
          <div>Btn</div>
        } />
      </Container>

      <Projects />
    </div>
  );
};

export default Home;
