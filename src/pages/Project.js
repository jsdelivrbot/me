import React from 'react';
import PropTypes from 'prop-types';
import { Button, Container, Col, Row } from 'reactstrap';
import { connect } from 'react-redux';

import Jumbotron from '../components/Jumbotron';
import Page from '../components/Page';
import PromoPane from '../components/PromoPane';

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

  const formatDate = date => {
    const dateObj = new Date(date);
    const options = {  
      weekday: 'long',
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    };
    return dateObj.toLocaleString('en-us', options);
  };

  return (
    <Page name='Project' title={ title }>
      <Jumbotron>
        { project && <h2>{ project.name }</h2> }
        { project && <p>{`Created: ${ formatDate(project.created) }`}</p> }
      </Jumbotron>
      <PromoPane
        buttonText='Browse Projects'
        linkTitle='View All Projects'
        linkURL='/projects'
        text='Check out my other projects on this site.'
      />
      <Container className='text-left'>
        { project &&
          <div>
            <Row>
              <Col xs='12' sm='4'>
                <img style={ { width: '100%' } } src={ project.banner_url } alt={ project.name } />
              </Col>
              <Col xs='12' sm='8'>
                <p>{ project.description }</p>
                <a href={ project.demo_url } title={ project.name }>
                  <Button outline color='primary' disabled={ !project.demo_url }>View Demo</Button>
                </a>
                {' '}
                <a href={ project.github_url } title={ project.name }>
                  <Button outline color='secondary' disabled={ !project.github_url }>View Code</Button>
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
