import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  CardDeck,
  Container
} from 'reactstrap';

import ProjectCard from './ProjectCard';
import Spinner from './Spinner';

import '../styles/components/Projects.css';

class Projects extends Component {
  render() {
    const { isLoading, projects } = this.props;
    const projectItems = Object.keys(projects)
    .filter(project => projects[project].published === true)
    .slice(3,6)
    .map(projectName => {
      const project = projects[projectName];
      const props = {
        key: project.slug,
        ...project
      };
      return <ProjectCard { ...props } />;
    });

    return (
      <div className="Projects">
        <Container>
          <CardDeck>
            { isLoading && <Spinner /> }
            { !isLoading && projectItems }
          </CardDeck>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { projects } = state;
  return {
    projects,
    isLoading: !Object.keys(projects).length
  }
};

Projects.propTypes = {
  projects: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(Projects);