import React from 'react';
import GithubCorner from 'react-github-corner';

import Jumbotron from '../components/Jumbotron';
import Page from '../components/Page';
import PromoPane from '../components/PromoPane';
import Projects from '../components/ProjectsContainer';
import Stats from '../components/StatsContainer';
import PageTitle from '../components/PageTitle';

import '../styles/pages/Home.css';

const Home = () => {
  return (
    <Page
      name='Home'
      title='Chris Vogt — Software Engineer in San Francisco'
    >
      <header className='App-header'>
        <Jumbotron
          headline={ 'CHRIS VOGT' }
          subhead={ 'Software Engineer in San Francisco' }
        >
          <a
            className="twitter-follow-button"
            data-dnt="true"
            href="https://twitter.com/c1v0"
          >
            Follow @c1v0
          </a>
          <GithubCorner
            bannerColor="#c5b358"
            direction="right"
            href={'https://github.com/chrisvogt'}
            octoColor="#6e1e9b"
            size={80}
          />
        </Jumbotron>
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
