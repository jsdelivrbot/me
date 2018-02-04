import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'reactstrap';

import AboutCard from '../components/AboutCard';

const About = () => {
  return (
    <div className="page-Home">
      <Container>
        <AboutCard />
      </Container>
    </div>
  );
};

export default About;
