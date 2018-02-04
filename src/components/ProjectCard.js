import React from 'react';
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardImg,
  CardText,
  CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProjectCard = props => {
  const {
    bannerUrl,
    description,
    name,
    slug
  } = props;
  return (
    <Card>
      <CardHeader tag="h6">Project</CardHeader>
      <CardImg top width="100%" src={ bannerUrl } alt={ name } />
      <CardBody>
        <CardTitle>{ name }</CardTitle>
        <CardText>{ description }</CardText>
        <Link to={ `/project/${ slug }` }>
          <Button color='www btn-primary'>View Project</Button>
        </Link>
      </CardBody>
    </Card>
  );
};

ProjectCard.propTypes = {
  bannerUrl: PropTypes.string,
  description: PropTypes.string,
  id: PropTypes.number,
  name: PropTypes.string,
  published: PropTypes.bool,
  slug: PropTypes.string,
  thumbUrl: PropTypes.string
}

export default ProjectCard;