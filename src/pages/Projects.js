import React from 'react';
import PropTypes from 'prop-types';
import { Button, Container, Col, Row } from 'reactstrap';
import { connect } from 'react-redux';

import Jumbotron from '../components/Jumbotron';
import Page from '../components/Page';
import PageTitle from '../components/PageTitle';
import ProjectsList from '../components/ProjectsList';

import '../styles/pages/Projects.css';

const Projects = props => {
  return (
    <Page name='Projects'>
      <Jumbotron headline='PROJECTS' />
      <Container className='text-left'>
        <ProjectsList />
      </Container>
    </Page>
  );
};

const mapStateToProps = state => {
  const { projects } = state;
  return { projects };
};

Projects.propTypes = {
  projects: PropTypes.object
};

export default connect(mapStateToProps)(Projects);
