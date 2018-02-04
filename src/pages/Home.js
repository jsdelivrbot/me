import React from 'react';

import Masthead from '../components/Masthead';
import Page from '../components/Page';
import PromoPane from '../components/PromoPane';
import Projects from '../components/ProjectsContainer';
import Stats from '../components/StatsContainer';
import PageTitle from '../components/PageTitle';

const Home = () => {
  return (
    <Page name='Home'>
      <header className='App-header'>
        <Masthead />
      </header>

      <Stats />
      <PromoPane />
      
      <PageTitle
        title='Dashboard'
        subtitle='Recent Content'
      />
      <Projects />
    </Page>
  );
};

export default Home;
