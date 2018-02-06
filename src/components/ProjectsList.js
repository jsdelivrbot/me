import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  CardDeck,
  Container,
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText
} from 'reactstrap';
import { Link } from 'react-router-dom';

import ProjectCard from './ProjectCard';

import '../styles/components/Projects.css';

class ProjectsList extends Component {
  render() {
    const { projects } = this.props;
    const projectItems = Object.keys(projects)
    .filter(project => projects[project].published === true)
    .map(projectName => {
      const project = projects[projectName];
      return (
        <ListGroupItem tag={ Link } to={ `/projects/${ project.slug }` } action>
          <ListGroupItemHeading>
            { project.name }
          </ListGroupItemHeading>
          <ListGroupItemText>
            { project.description }
          </ListGroupItemText>
        </ListGroupItem>
      );
    });

    return (
      <div className="ProjectsList">
        <ListGroup>
          { projectItems }
        </ListGroup>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { projects } = state;
  return {
    projects
  }
};

ProjectsList.propTypes = {
  projects: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(ProjectsList);