import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText
} from 'reactstrap';
import { Link } from 'react-router-dom';

import '../styles/components/Projects.css';

class ProjectsList extends Component {
  render() {
    const { projects } = this.props;
    const projectItems = Object.keys(projects)
    .filter(project => projects[project].published === true)
    .map(projectName => {
      const project = projects[projectName];
      const { description, name, slug } = project;
      return (
        <ListGroupItem
          action
          key={ slug }
          tag={ Link }
          to={ `/projects/${ slug }` }>
          <ListGroupItemHeading>
            { name }
          </ListGroupItemHeading>
          <ListGroupItemText>
            { description }
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