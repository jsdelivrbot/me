import React from 'react';

import Masthead from '../components/Masthead';
import Projects from '../components/ProjectsContainer';
import Stats from '../components/StatsContainer';
import PageTitle from '../components/PageTitle';

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
