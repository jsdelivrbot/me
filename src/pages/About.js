import React from 'react';
import { Container } from 'reactstrap';

import PageTitle from '../components/PageTitle';

const About = () => {
  return (
    <div className="page-About">
      <Container className='text-left'>
        <PageTitle
          title='Dashboard'
          subtitle='Recent Content'
        />
        <p>I am a software engineer who inhabits San Francisco, California, USA and works on web software that helps small businesses create and grow their online presence. Over the last 9 years I have worked as a developer for both startups and corporations, focused on eDiscovery, healthcare, and education technology.</p>
        <p>I'm a multifaceted individual with a strong interest in the web, music, literature, and many fields of science and art. I'm motivated by an innate drive to both understand and create. Over time I have explored a variety of interests, often involving the creation of original code, cinematography, photography and written content.</p>
        <p>This website exists as a hub to connect visitors to my work, much of which is available for use under open source, copyleft and Creative Commons licenses.</p>
      </Container>
    </div>
  );
};

export default About;
