import React from 'react';
import PropTypes from 'prop-types';
import { Button, Container, Col, Row } from 'reactstrap';
import { connect } from 'react-redux';

import Jumbotron from '../components/Jumbotron';
import Page from '../components/Page';
import PageTitle from '../components/PageTitle';

import '../styles/pages/Project.css';

const findBySlug = (projects, slug) => {
  const projectsArr = Object.keys(projects).map(projectId => {
    return projects[projectId];
  });
  const found = projectsArr.filter(project => project.slug === slug);
  return found;
};

const Project = props => {
  const project = findBySlug(props.projects, props.match.params.slug)[0];
  const title = project ? `${project.name} — Project » CHRISVOGT.me` : '';
  return (
    <Page name='Project' title={ title }>
      <Jumbotron headline='PROJECT' />
      <Container className='text-left'>
        {project &&
          <div>
            <Row>
              <Col xs='12' sm='4'>
                <img style={ { width: '100%' } }src={ project.banner_url } alt="Generic placeholder image" />
              </Col>
              <Col xs='12' sm='8'>
                <Row>
                  <PageTitle title={ project.name } />
                </Row>
                <p>{ project.description }</p>
                <a href={ project.demo_url } title={ project.name }>
                  <Button outline color='primary'>View Demo</Button>
                </a>
                {' '}
                <a href={ project.github_url } title={ project.name }>
                  <Button outline color='secondary'>View Code</Button>
                </a>
              </Col>
            </Row>
          </div>  
        }
      </Container>
    </Page>
  );
};

const mapStateToProps = state => {
  const { projects } = state;
  return {
    projects: projects
  }
};

Project.propTypes = {
  project: PropTypes.object
};

export default connect(mapStateToProps)(Project);
