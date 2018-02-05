import React from 'react';

import Jumbotron from '../components/Jumbotron';
import Page from '../components/Page';
import PromoPane from '../components/PromoPane';
import Projects from '../components/ProjectsContainer';
import Stats from '../components/StatsContainer';
import PageTitle from '../components/PageTitle';

import '../styles/pages/Home.css';

const Home = () => {
  return (
    <Page name='Home'>
      <header className='App-header'>
        <Jumbotron
          headline={ 'CHRISVOGT.me' }
          subhead={ 'Software Engineer in San Francisco' }
        />
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
