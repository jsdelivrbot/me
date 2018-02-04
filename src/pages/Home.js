import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'reactstrap';

import Masthead from '../components/Masthead';
import Projects from '../components/ProjectsContainer';
import Stats from '../components/StatsContainer';
import PageTitle from '../components/PageTitle';

// import '../styles/components/Photography.css';

const Home = () => {
  return (
    <div className='Home'>
      <header className='App-header'>
        <Masthead />
      </header>

      <Stats />

      <PageTitle
        title='Dashboard'
        subtitle='Recent Content'
      />

      <Projects />
    </div>
  );
};

export default Home;
