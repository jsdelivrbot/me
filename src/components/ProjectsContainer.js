import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Button,
  Card,
  CardBody,
  CardColumns,
  CardDeck,
  CardFooter,
  CardHeader,
  CardImg,
  CardText,
  CardTitle,
  Container
} from 'reactstrap';

import ProjectCard from './ProjectCard';

import '../styles/components/Projects.css';

class Projects extends React.Component {
  render() {
    const { projects } = this.props;
    const projectItems = Object.keys(projects)
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