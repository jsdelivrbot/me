import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Card, CardHeader, CardTitle, CardText, CardBody, Button, CardFooter, CardImg, Container, CardDeck, CardColumns } from 'reactstrap';

import ProjectCard from './ProjectCard';

import '../styles/components/Projects.css';

class Projects extends React.Component {
  render() {
    const { projects } = this.props;
    const projectItems = Object.keys(projects)
    .slice(4,7)
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
            { projectItems }
          </CardDeck>
        </Container>
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

export default connect(mapStateToProps)(Projects);